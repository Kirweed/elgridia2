import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 150px;
`;

enum FormType {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
}

const HomeView = () => {
  const [shownForm, setShownForm] = useState(FormType.LOGIN);
  return (
    <>
      <StyledHeader>Witaj w Elgridii przybyszu!</StyledHeader>
      {shownForm === FormType.LOGIN ? (
        <StyledContainer>
          <LoginForm />
          <Button
            small
            secondary
            onClick={() => setShownForm(FormType.REGISTER)}
          >
            Nie masz jeszcze konta? Zarejestruj się!
          </Button>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <RegisterForm />
          <Button small secondary onClick={() => setShownForm(FormType.LOGIN)}>
            Masz konto? Zaloguj się!
          </Button>
        </StyledContainer>
      )}
    </>
  );
};

export default HomeView;
