import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../auth";
import Button from "../components/common/Button";
import Header from "../components/common/Header";

const LobbyView = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StyledContainer>
        <h1>Jesteś zalogowany jako: xxx</h1>
        <StyledButtons>
          <Button
            onClick={() => {
              navigate("/game");
            }}
          >
            Wejdź do gry
          </Button>
          <Button error onClick={logOut}>
            logout
          </Button>
        </StyledButtons>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

export default LobbyView;
