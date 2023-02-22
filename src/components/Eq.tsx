import styled from "styled-components";

const EqElements = [
  null,
  "helmet",
  null,
  "ring",
  "neckle",
  "gloves",
  "weapon",
  "chestplate",
  "shield",
  null,
  "pants",
  null,
  null,
  "boots",
];

const Eq = () => (
  <StyledContainer>
    {EqElements.map((element, index) =>
      element ? <EqElement key={index} /> : <EqPlaceholder />
    )}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32px);
  place-items: center;
`;

const EqElement = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid white;
`;
const EqPlaceholder = styled.div`
  width: 32px;
  height: 32px;
`;

export default Eq;
