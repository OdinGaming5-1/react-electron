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
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export { StyledContainer, StyledDiv, StyledButton };
