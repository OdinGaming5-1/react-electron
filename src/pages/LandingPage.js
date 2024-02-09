import React from 'react';
import supabase from '../supabaseConnection';
import { useNavigate } from "react-router-dom";
import Users from './Users';


const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/")
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};


function LandingPage() {
  return (
    <div>
      <h2>Landing Page</h2>
      <p>Welcome! You are logged in.</p>
      <LogoutButton />
      <Users />
    </div>
  );
}

export default LandingPage;