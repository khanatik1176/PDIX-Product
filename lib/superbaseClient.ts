import { supabaseAnonKey, supabaseUrl } from '@/utils/config';
import { createClient } from '@supabase/supabase-js';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
