import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

enum FormType {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
}

const HomeView = () => {
  const [shownForm, setShownForm] = useState(FormType.LOGIN);
  return (
    <>
      <Header />
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
