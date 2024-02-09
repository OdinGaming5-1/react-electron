import React from "react";
import UserForm from "../components/UserForm";
import styled from 'styled-components';


const StyledForm = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const UserFormPage = ({ onSubmit, title }) => {
  return (
    <StyledForm>
      <h2>{title}</h2>
      <UserForm 
        onSubmit={onSubmit} 
        buttonTitle={title} />
    </StyledForm>
  );
};

export default UserFormPage;
