import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "./common/Button";

const LeftGameSidebar = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <Button error onClick={() => navigate("/lobby")}>
        Wróć do lobby
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 200px;
  height: 100vh;
  border: 1px solid white;
  background-color: #222;
`;

export default LeftGameSidebar;
