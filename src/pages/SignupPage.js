import React from "react";
import UserFormPage from "./UserFormPage";
import supabase from "../supabaseConnection";


const SignupPage = ({ onSignup }) => {
  async function signUpNewUser({ email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if(error) {
        alert(error.message)
        return;
    }
    console.log('signed up :', data)
    alert(
      `signed up with ${data.user.email} check your email for confirmation`
    );
    onSignup();
  }
  return (
    <div>
      <UserFormPage title={"Sign Up"} onSubmit={signUpNewUser} />
    </div>
  );
};

export default SignupPage;