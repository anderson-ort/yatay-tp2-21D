import { createClient } from "@supabase/supabase-js";

// import postgres from "postgres";
// import { SUPABASE_DATABASE_URL } from "../config/supabase.config.js";

// const connectionString = SUPABASE_DATABASE_URL;
// const sql = postgres(connectionString);

// export default sql;

export const supabase = createClient(
	"https://egqrswddsxzmlkfdwiws.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVncXJzd2Rkc3h6bWxrZmR3aXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzE4MjEsImV4cCI6MjA2MjE0NzgyMX0.EOGnz5tJnHx_Gu006_oLK1yUoqkna8gOp-6Gssx0gKg",
);
