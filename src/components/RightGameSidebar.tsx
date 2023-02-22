import styled from "styled-components";
import Backpack from "./Backpack";
import Eq from "./Eq";

const RightGameSidebar = () => {
  return (
    <StyledContainer>
      <Eq />
      <span>Plecak: </span>
      <Backpack />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 220px;
  height: 100vh;
  border: 1px solid white;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;
`;

export default RightGameSidebar;
