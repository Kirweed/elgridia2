import styled from "styled-components";

import Button from "../common/Button";
import Input from "../common/Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  gap: 30px;
  padding: 30px 40px;
  align-items: center;
`;

const LoginFrom = () => (
  <StyledForm>
    <Input type="text" placeholder="username" />
    <Input type="password" placeholder="password" />
    <Button type="button">Sing in!</Button>
  </StyledForm>
);

export default LoginFrom;
