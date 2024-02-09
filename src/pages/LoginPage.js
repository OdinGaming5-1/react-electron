import React from "react";
import UserFormPage from "./UserFormPage";
import supabase from "../supabaseConnection";

const LoginPage = ({ onLogin }) => {
  async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if(error) {
        alert(error.message)
        return;
    }
    console.log('signed in :', data)
    alert(`signed in`);
    onLogin();
  }
  return (
    <div>
      <UserFormPage title={'Login'} onSubmit={signIn} />
    </div>
  );
};

export default LoginPage;