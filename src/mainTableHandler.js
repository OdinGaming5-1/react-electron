import StatusEnum from "./StatusEnum";
import supabase from "./supabaseConnection";

export async function FindByName(name) {
  try {
    const { data, error } = await supabase
      .from("mainTable")
      .select("*")
      .ilike("name", `%${name}%`)
      .order("createdDate", { ascending: false })
      .order("processDate", { ascending: false })
      .order("finishedDate", { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("FindByName", error);
  } 
}

export async function FindByNameOld(name) {
  try {
    const { data, error } = await supabase
      .from("mainTable")
      .select("*")
      .eq("status", "Bitti")
      .ilike("name", `%${name}%`)
      .order("createdDate", { ascending: false })
      .order("processDate", { ascending: false })
      .order("finishedDate", { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("FindByName", error);
  } 
}

export async function FindByNameOtherThanOld(name) {
  try {
    const { data, error } = await supabase
      .from("mainTable")
      .select("*")
      .neq("status", "Bitti")
      .ilike("name", `%${name}%`)
      .order("createdDate", { ascending: false })
      .order("processDate", { ascending: false })
      .order("finishedDate", { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("FindByName", error);
  } 
}

export async function FindAll() {
  return FindByStatus([StatusEnum.New, StatusEnum.Processing, StatusEnum.Cancel, StatusEnum.Done]);
}
export async function FindByStatus(status) {
  try {
    let result = [];
    for (let index = 0; index < status.length; index++) {
      const element = status[index];
      const { data, error } = await supabase
        .from("mainTable")
        .select("*")
        .eq("status", element)
        .order("createdDate", { ascending: false })
        .order("processDate", { ascending: false })
        .order("finishedDate", { ascending: false });
      if (error) throw error;
      result = [...result, ...data];
    }
    return result;
  } catch (error) {
    console.error("FindBy", error);
  }
}
export async function Insert(value) {
  try {
    const { error } = await supabase.from("mainTable").insert([value]);
    if (error) throw error;
  } catch (error) {
    console.error("Insert", error);
  }
}

export async function UpdateStatus(id, value) {
  try {
    let updateData = {
      status: value,
    };
    updateData =
      value === StatusEnum.Processing
        ? {
            ...updateData,
            processDate: value === StatusEnum.Processing ? new Date() : null,
          }
        : {
            ...updateData,
            finishedDate: value === StatusEnum.Done ? new Date() : null,
          };
    const { error } = await supabase
      .from("mainTable")
      .update(updateData)
      .eq("id", id);
    if (error) throw error;
    console.log("Update");
  } catch (error) {
    console.error("Update", error);
  }
}

export async function UpdateRow(value) {
  try {
    const { error } = await supabase
      .from("mainTable")
      .update(value)
      .eq("id", value.id);
    if (error) throw error;
    console.log("Update");
  } catch (error) {
    console.error("Update", error);
  }
}
export async function DeleteById(value) {
  try {
    const { error } = await supabase.from("mainTable").delete().eq("id", value);
    if (error) throw error;
    console.log("Delete");
  } catch (error) {
    console.error("Delete", error);
  }
}
