import styled from "styled-components";
import Eq from "./Eq";

const RightGameSidebar = () => {
  return (
    <StyledContainer>
      <Eq />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 200px;
  height: 100vh;
  border: 1px solid white;
  background-color: #222;
`;

export default RightGameSidebar;
