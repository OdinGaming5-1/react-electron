import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://cksjplohiwqcxyfdovqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrc2pwbG9oaXdxY3h5ZmRvdnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3OTY3MjEsImV4cCI6MjAyMjM3MjcyMX0.LSG3KbrV7e3EjLOD80FBnvXde7leVHz33hQCpZU4XIk"
);
export default supabase;
