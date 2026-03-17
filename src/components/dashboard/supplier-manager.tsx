"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { addSupplier, deleteSupplier } from "@/lib/actions";
import { Loader2, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
});

type Supplier = {
    id: string;
    nom: string;
}

export default function SupplierManager({ suppliers }: { suppliers: Supplier[] }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await addSupplier(values);
    if (result.success) {
      toast({
        title: "Succès",
        description: "Fournisseur ajouté.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: result.error || "Une erreur est survenue.",
      });
    }
    setIsSubmitting(false);
  }

  async function handleDelete(id: string) {
    setIsDeleting(id);
    const result = await deleteSupplier(id);
     if (result.success) {
      toast({
        title: "Succès",
        description: "Fournisseur supprimé.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: result.error || "Une erreur est survenue.",
      });
    }
    setIsDeleting(null);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gérer les Fournisseurs</CardTitle>
        <CardDescription>
          Ajouter ou supprimer un grossiste ou un fournisseur.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du Fournisseur</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Grossiste A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Ajouter le Fournisseur
            </Button>
          </form>
        </Form>

        <div className="space-y-2">
            <h4 className="text-sm font-medium">Fournisseurs existants</h4>
            <div className="rounded-md border max-h-60 overflow-y-auto">
              {suppliers.length > 0 ? (
                  <ul className="divide-y divide-border">
                      {suppliers.map((supplier) => (
                          <li key={supplier.id} className="flex items-center justify-between p-3">
                              <span>{supplier.nom}</span>
                              <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                      <Button variant="ghost" size="icon" disabled={isDeleting === supplier.id}>
                                          {isDeleting === supplier.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4 text-destructive" />}
                                      </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                      <AlertDialogHeader>
                                      <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                                      <AlertDialogDescription>
                                          Cette action est irréversible. Le fournisseur "{supplier.nom}" sera définitivement supprimé.
                                      </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                                      <AlertDialogAction onClick={() => handleDelete(supplier.id)} className="bg-destructive hover:bg-destructive/90">Supprimer</AlertDialogAction>
                                      </AlertDialogFooter>
                                  </AlertDialogContent>
                              </AlertDialog>
                          </li>
                      ))}
                  </ul>
              ) : (
                  <p className="p-3 text-sm text-muted-foreground">Aucun fournisseur ajouté.</p>
              )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
