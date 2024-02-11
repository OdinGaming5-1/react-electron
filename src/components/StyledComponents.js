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
  cursor: pointer;
  transition: background-color 0.3s ease;
  color:black;
  background-color: #e2e2e2;
  border: 1px solid #a0a0ff;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background-color: #ccc;
  }
`;

const StyledButton2 = styled.button`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color:black;
  background-color: #e2e2e2;
  border: 1px solid #a0a0ff;
  border-radius: 8px;

  &:hover {
    background-color: #ccc;
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
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
  min-width: 300px;
  min-height: 60px;
  max-width: 300px;
  max-height: 500px;
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
export { StyledContainer, StyledDiv, StyledButton, StyledButton2,StyledForm,StyledInput,StyledTextArea, CenteredContainer300 };
