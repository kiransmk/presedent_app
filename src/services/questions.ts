import supabase from "../config/supabase_client";

export async function saveExtractions(questions: string[]) {
  return await supabase
    .from("questions")
    .insert({ questions })
    .select("id, inserted_at");
}

export async function getPrevExtractions() {
  return await supabase
    .from("questions")
    .select("id, inserted_at")
    .order("inserted_at", { ascending: false });
}

export async function getExtraction(id: string) {
  return await supabase.from("questions").select().eq("id", id);
}
