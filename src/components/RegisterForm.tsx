import styled from "styled-components";

import Button from "./common/Button";
import Input from "./common/Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  gap: 30px;
  padding: 30px 40px;
  align-items: center;ś
`;

const RegisterForm = () => (
  <StyledForm>
    <Input type="text" placeholder="nazwa gracza" />
    <Input type="email" placeholder="email" />
    <Input type="password" placeholder="hasło" />
    <Button type="button">Zarejestruj się!</Button>
  </StyledForm>
);

export default RegisterForm;
