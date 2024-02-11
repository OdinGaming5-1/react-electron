import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://pkvnnraectowfazzjneo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrdm5ucmFlY3Rvd2ZhenpqbmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NjI3NDgsImV4cCI6MjAyMzIzODc0OH0.8slt4OM2EJ744iMLFHxZrWgRqshhcI3zt-eBr0X62Ms"
);
export default supabase;
