import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledDiv, StyledButton } from "../components/StyledComponents";


const HomePage = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const navigate = useNavigate();


  const handleSwitchPage = () => {
    setIsLoginPage(!isLoginPage);
  };

  const redirectToLanding = () => {
    navigate("/landing");
  };

  return (
    <StyledContainer>
      {isLoginPage ? (
        <LoginPage onLogin={redirectToLanding} />
      ) : (
        <SignupPage onSignup={redirectToLanding} />
      )}
      <StyledDiv>
        <StyledButton onClick={handleSwitchPage}>
          {isLoginPage ? "Sign Up" : "Login"}
        </StyledButton>
      </StyledDiv>
    </StyledContainer>
  );
};

export default HomePage;
