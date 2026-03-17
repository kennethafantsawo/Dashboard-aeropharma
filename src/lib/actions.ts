"use server";

import { z } from "zod";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function login(values: z.infer<typeof loginSchema>): Promise<{ error?: string; success?: boolean }> {
  const parsedValues = loginSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: "Invalid input" };
  }

  const { username, password } = parsedValues.data;

  const validUsername = process.env.LOGIN_USERNAME;
  const validPassword = process.env.LOGIN_PASSWORD;

  if (username === validUsername && password === validPassword) {
    return { success: true };
  } else {
    return { error: "Nom d'utilisateur ou mot de passe incorrect." };
  }
}


const supplierSchema = z.object({
  name: z.string().min(2, { message: "Le nom du fournisseur doit contenir au moins 2 caractères." }),
});

export async function addSupplier(values: z.infer<typeof supplierSchema>): Promise<{ error?: string; success?: boolean }> {
  if (!supabase) {
    return { error: "La base de données n'est pas configurée." };
  }

  const parsedValues = supplierSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: "Données invalides." };
  }

  const { name } = parsedValues.data;

  const { error } = await supabase.from("fournisseurs").insert([{ nom: name }]);

  if (error) {
    console.error("Supabase error:", error);
    if (error.code === '23505') { // unique_violation
        return { error: "Ce fournisseur existe déjà." };
    }
    return { error: "Impossible d'ajouter le fournisseur." };
  }

  revalidatePath("/dashboard/settings");
  return { success: true };
}

export async function getSuppliers() {
    if (!supabase) {
      console.warn("Supabase n'est pas configuré, impossible de récupérer les fournisseurs.");
      return [];
    }
    const { data, error } = await supabase.from("fournisseurs").select('id, nom').order('nom');
    if (error) {
        console.error("Supabase error:", error);
        return [];
    }
    return data as { id: string; nom: string }[];
}

export async function deleteSupplier(id: string): Promise<{ error?: string; success?: boolean }> {
    if (!supabase) {
        return { error: "La base de données n'est pas configurée." };
    }
    
    if (!id) {
        return { error: "ID de fournisseur invalide." };
    }

    const { error } = await supabase.from('fournisseurs').delete().match({ id });

    if (error) {
        console.error("Supabase error:", error);
        return { error: "Impossible de supprimer le fournisseur." };
    }

    revalidatePath('/dashboard/settings');
    return { success: true };
}
