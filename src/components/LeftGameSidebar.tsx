import { memo } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "./common/Button";

const LeftGameSidebar = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StatsInfo>
        <UsernameAnLevelLabel>
          <span>Username</span>
          <span>1 lvl</span>
        </UsernameAnLevelLabel>
        <span>Statystyki: </span>
        <StatsInfoGrid>
          <span>Siła:</span>
          <span>0</span>
          <span>Zręczność:</span>
          <span>0</span>
          <span>Mądrość:</span>
          <span>0</span>
          <span>Szczęście:</span>
          <span>0</span>
        </StatsInfoGrid>
      </StatsInfo>
      <Button error small onClick={() => navigate("/lobby")}>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

const StatsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const StatsInfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const UsernameAnLevelLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default memo(LeftGameSidebar);
