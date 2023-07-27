import supabase from "../config/supabase_client";
import { QuestionType } from "../types/database";

export async function saveExtractions(questions: QuestionType[]) {
  return await supabase.from("questions").insert({ questions }).select();
}

export async function getPrevExtractions() {
  return await supabase
    .from("questions")
    .select()
    .order("inserted_at", { ascending: false });
}

export async function getExtraction(id: string) {
  return await supabase.from("questions").select().eq("id", id);
}
