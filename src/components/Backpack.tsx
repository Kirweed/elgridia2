import styled from "styled-components";

const BackpackElements = Array.from(Array(60).keys());

const Backpack = () => (
  <StyledContainer>
    {BackpackElements.map((element, index) => (
      <BackpackElement key={index} />
    ))}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 32px);
`;

const BackpackElement = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
`;

export default Backpack;
