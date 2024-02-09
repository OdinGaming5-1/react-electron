import supabase from "./supabaseConnection";

export async function FindRole({ name, password }) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("role")
      .eq('name', name)
      .eq('password', password);
    if (error) throw error;
    console.log("role", data);
    return data;
  } catch (error) {
    console.error("role", error);
  }
}
