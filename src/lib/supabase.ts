import { createClient } from '@supabase/supabase-js';

// Fallback to prevent app crash if .env is missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

if (!import.meta.env.VITE_SUPABASE_URL) {
    console.error('CRITICAL: Supabase URL missing in .env');
}

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
