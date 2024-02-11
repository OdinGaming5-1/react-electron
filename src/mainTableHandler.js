import StatusEnum, { all, getId, getValue } from "./StatusEnum";
import { GetFormattedDate } from "./pages/Util";
import supabase from "./supabaseConnection";

export async function FindCount() {
  try {
    const { count } = await supabase
      .from("mainTable")
      .select("*", { count: "exact" });
    return count;
  } catch (error) {
    console.error("FindCount", error);
  }
}
export async function FindAll({ page, itemCount }) {
  return FindByNameAndStatus({
    name: "",
    status: all(),
    page: page,
    itemCount: itemCount,
  });
}
export async function FindByNameAndStatus({ name, status, page, itemCount }) {
  try {
    const statusIdList = [];
    status.forEach((e) => statusIdList.push(getId(e)));
    const { data, error } = await supabase
      .from("mainTable")
      .select("*")
      .ilike("name", `%${name}%`)
      .in("status_id", statusIdList)
      .order("status_id")
      .order("createdDate", { ascending: false })
      .order("processDate", { ascending: false })
      .order("finishedDate", { ascending: false })
      .range((page - 1) * itemCount, page * itemCount - 1);
    let value = data.map((v, i) => {
      return {
        ...v,
        status: getValue(v.status_id),
      };
    });
    const { count } = await supabase
      .from("mainTable")
      .select("*", { count: "exact" })
      .ilike("name", `%${name}%`)
      .in("status_id", statusIdList);
    if (error) throw error;
    return { data: value, length: count };
  } catch (error) {
    console.error("FindByNameAndStatus error", error);
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
    const statusId = getId(value);
    let updateData = {
      status_id: statusId,
    };
    if (value === StatusEnum.Processing) {
      updateData = {
        ...updateData,
        processDate: new Date(),
      };
    } else if (value === StatusEnum.Done) {
      updateData = {
        ...updateData,
        finishedDate: new Date(),
      };
    }
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
  } catch (error) {
    console.error("Update", error);
  }
}
export async function DeleteById(value) {
  try {
    const { error } = await supabase.from("mainTable").delete().eq("id", value);
    if (error) throw error;
  } catch (error) {
    console.error("Delete", error);
  }
}
export async function DeleteAllDone() {
  try {
    const { error } = await supabase.from("mainTable").delete().eq("status_id", 4); // 4 -> Done
    if (error) throw error;
  } catch (error) {
    console.error("Delete", error);
  }
}
export async function ExportCSV() {
  try {
    const { data, error } = await supabase
      .from("mainTable")
      .select(`musteri_adi: name, 
        aciklama: detail, 
        olusturma_tarihi: createdDate, 
        islem_tarihi: processDate, 
        bitis_tarihi: finishedDate`)
      .csv();
    if (error) throw error;
    console.log("CSV", data);

    const csvData = new Blob([data], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvData);

    console.log(csvUrl);

    const link = document.createElement("a");
    link.href = csvUrl;
    link.download = GetFormattedDate(new Date()) + "-geçmiş_kayıtlar.csv";
    link.click();

    URL.revokeObjectURL(csvUrl);
  } catch (error) {
    console.error("ExportCSV", error);
  }
}
