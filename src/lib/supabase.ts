import { createClient } from '@supabase/supabase-js';

// Note: The '!' asserts that the values are not null. 
// In a real application, you should handle cases where these environment variables might be missing.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
