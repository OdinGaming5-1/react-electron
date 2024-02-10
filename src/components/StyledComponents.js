import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none;
  background-color: #fff;
  margin-top: 60px;
`;

const StyledButton = styled.button`
  width: 300px;
  padding: 10px;
  background-color: #007bff;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled form component
const StyledForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CenteredContainer300 = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Styled input component
const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
// Styled input component
const StyledTextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
// // Styled button component
// const StyledButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #007bff;
//   background-color: blue;
//   color: #fff;
//   border: none;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
export { StyledContainer, StyledDiv, StyledButton,StyledForm,StyledInput,StyledTextArea, CenteredContainer300 };
