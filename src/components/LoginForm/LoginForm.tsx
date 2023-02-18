import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../auth";

import Button from "../common/Button";
import Input from "../common/Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  gap: 30px;
  padding: 30px 40px;
  align-items: center;ś
`;

const LoginFrom = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuth();

  const submitForm = () => {
    logIn(username, password);
  };

  return (
    <StyledForm>
      <Input
        type="text"
        placeholder="nazwa gracza"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="button" onClick={submitForm}>
        Zaloguj się!
      </Button>
    </StyledForm>
  );
};

export default LoginFrom;
