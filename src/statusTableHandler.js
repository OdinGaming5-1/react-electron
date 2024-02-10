import { findByKey } from "./StatusEnum";
import supabase from "./supabaseConnection";

export async function FindById(id) {
  try {
    const { data, error } = await supabase
      .from("status")
      .select('value')
      .eq('id', id);
    if (error) throw error;
    console.log("FindById", data);
    return findByKey(data);
  } catch (error) {
    console.error("FindById", error);
  }
}
export async function FindByValue(value) {
  try {
    const { data, error } = await supabase
      .from("status")
      .select('id')
      .eq('value', value);
    if (error) throw error;
    return data.id;
  } catch (error) {
    console.error("FindByValue", error);
  }
}
