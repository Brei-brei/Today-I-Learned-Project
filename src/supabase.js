
import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://tlpvpoluqdgnsqrvxpgj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscHZwb2x1cWRnbnNxcnZ4cGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NjIxNDgsImV4cCI6MjA3MzMzODE0OH0.CDTX2v5JsOYhBhbBtT0RY4usr7JgAL9a-3RnCwi0L3A"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;