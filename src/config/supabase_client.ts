import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database";

const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL as string,
  import.meta.env.SUPABASE_ANON_PUBLIC as string
);

export default supabase;
