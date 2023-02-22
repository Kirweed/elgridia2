import styled from "styled-components";

const EqElements = Array.from(Array(12).keys());

const Eq = () => (
  <StyledContainer>
    {EqElements.map((element) => (
      <EqElement />
    ))}
  </StyledContainer>
);

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 66px);
`;

const EqElement = styled.div`
  width: 66px;
  height: 66px;
  border: 1px solid white;
`;

export default Eq;
