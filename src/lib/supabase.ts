import { createClient } from '@supabase/supabase-js';

// This function will now be the single source of truth for the client.
function getSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const urlPlaceholder = 'VOTRE_URL_SUPABASE_ICI';
    const keyPlaceholder = 'VOTRE_CLE_ANON_SUPABASE_ICI';
    
    const restartReminder = "N'oubliez pas de redémarrer le serveur (Ctrl+C puis 'npm run dev') après avoir modifié le fichier .env.";

    if (!supabaseUrl || supabaseUrl === urlPlaceholder) {
        const urlValue = supabaseUrl ? `'${supabaseUrl}'` : 'non définie';
        return { 
            client: null, 
            error: `L'URL Supabase est incorrecte. Valeur actuelle: ${urlValue}. Veuillez la vérifier dans votre fichier .env. ${restartReminder}`
        };
    }

    if (!supabaseKey || supabaseKey === keyPlaceholder) {
        const keyValue = supabaseKey ? `'${supabaseKey}'` : 'non définie';
        return { 
            client: null, 
            error: `La clé 'anon' Supabase est incorrecte. Valeur actuelle: ${keyValue}. Veuillez la vérifier dans votre fichier .env. ${restartReminder}`
        };
    }
    
    if (!(supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'))) {
        return { 
            client: null, 
            error: `L'URL de Supabase ("${supabaseUrl}") ne semble pas être une URL valide.`
        };
    }

    try {
        const client = createClient(supabaseUrl, supabaseKey);
        return { client, error: null };
    } catch (e) {
        const message = e instanceof Error ? e.message : 'Erreur inconnue';
        return { 
            client: null, 
            error: `Une erreur est survenue lors de la connexion à Supabase : ${message}`
        };
    }
}

const { client, error } = getSupabaseClient();

export const supabase = client;
export const supabaseInitializationError = error;
