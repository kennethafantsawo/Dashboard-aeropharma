import { createClient } from '@supabase/supabase-js';

// This function will now be the single source of truth for the client.
function getSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const urlPlaceholder = 'VOTRE_URL_SUPABASE_ICI';
    const keyPlaceholder = 'VOTRE_CLE_ANON_SUPABASE_ICI';

    if (!supabaseUrl || supabaseUrl.includes(urlPlaceholder)) {
        return { 
            client: null, 
            error: `ERREUR DE CONFIGURATION : L'URL de Supabase est manquante. Assurez-vous d'avoir : 1. Copié l'URL depuis les paramètres API de votre projet Supabase. 2. Collé l'URL dans le fichier .env. 3. **IMPÉRATIF : Redémarré votre serveur de développement.**` 
        };
    }

    if (!supabaseKey || supabaseKey.includes(keyPlaceholder)) {
        return { 
            client: null, 
            error: `ERREUR DE CONFIGURATION : La clé 'anon' de Supabase est manquante. Assurez-vous d'avoir : 1. Copié la clé 'anon' (publique) depuis les paramètres API. 2. Collé la clé dans le fichier .env. 3. **IMPÉRATIF : Redémarré votre serveur de développement.**`
        };
    }
    
    if (!(supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'))) {
        return { 
            client: null, 
            error: `Erreur de configuration : L'URL de Supabase ("${supabaseUrl}") ne semble pas être une URL valide.`
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
