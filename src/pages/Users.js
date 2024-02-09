import React, { useState, useEffect } from "react";
import supabase from "../supabaseConnection";

function Users() {
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("roles")
        .select("*");

      console.log(data);
      if(error)
        throw error;

      setRoles(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const addUserRole = async () => {
    try {
      console.log("Role:",role);
      const { data, error } = await supabase.from("roles").insert([{
        role: role,
      }]);
      console.log(data, error);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <>
      <div>Users</div>
      {roles && (
        <ul>
          {roles.map((row) => (
            <li key={row.id}>{row.role}</li>
          ))}
        </ul>
      )}
      <input type="text" name="role" onChange={(e) => setRole(e.target.value)} />
      <button type="submit" onClick={addUserRole}>Insert Data</button>
    </>
  );
}

export default Users;
