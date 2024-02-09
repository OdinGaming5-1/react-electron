import React, { useState } from 'react';
import { StyledButton,StyledForm,StyledInput } from './StyledComponents';


const NUserForm = ({ onSubmit, buttonTitle }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: name, password: password });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StyledButton type="submit">{buttonTitle}</StyledButton>
    </StyledForm>
  );
};

export default NUserForm;
