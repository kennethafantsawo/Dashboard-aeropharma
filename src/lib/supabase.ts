import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isValidSupabaseUrl = (url: string | undefined): url is string => {
    return !!url && (url.startsWith('http://') || url.startsWith('https://')) && !url.includes("VOTRE_URL_SUPABASE_ICI");
}

function initializeSupabase() {
    if (isValidSupabaseUrl(supabaseUrl) && supabaseKey && !supabaseKey.includes('VOTRE_CLE_ANON_SUPABASE_ICI')) {
        return createClient(supabaseUrl, supabaseKey);
    }
    
    // On the server, this will print to the console. On the client, it will be visible in the browser console.
    console.warn(
    "ACTION REQUISE : Vous devez configurer vos clés Supabase. Le message que vous voyez n'est pas une erreur de code, mais une instruction. Pour continuer, veuillez suivre ces étapes :\n1. Allez sur le site de Supabase et connectez-vous.\n2. Dans votre projet, allez dans Paramètres > API.\n3. Copiez l'URL du projet et la clé 'anon' (publique).\n4. Collez ces valeurs dans le fichier .env à la place des textes d'exemple."
  );
    return null;
}

export const supabase = initializeSupabase();
