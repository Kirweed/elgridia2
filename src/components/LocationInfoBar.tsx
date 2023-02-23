import { memo } from "react";
import styled from "styled-components";

interface LocationInfoBarProps {
  x: number;
  y: number;
}

const LocationInfoBar = ({ x, y }: LocationInfoBarProps) => (
  <StyledContainer>
    <span>Nazwa lokalizacji</span>
    <span>{`${x}, ${y}`}</span>
  </StyledContainer>
);

const StyledContainer = styled.div`
  width: fit-content;
  position: absolute;
  left: 200px;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  gap: 20px;
`;

export default memo(LocationInfoBar);
