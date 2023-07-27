import type { Database } from "./database";

export type Countries = Database["public"]["Tables"]["countries"]["Row"];
export type Questions = Database["public"]["Tables"]["questions"]["Row"];
// export type Extractions = Omit<Questions, "questions">;
