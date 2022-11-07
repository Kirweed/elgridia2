import styled from "styled-components";
import LoginForm from "../../components/LoginForm";

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

const HomeView = () => (
  <>
    <StyledHeader>Witaj w Elgridii przybyszu!</StyledHeader>
    <StyledContainer>
      <LoginForm />
      <p>Don't have account? sign up!</p>
    </StyledContainer>
  </>
);

export default HomeView;
