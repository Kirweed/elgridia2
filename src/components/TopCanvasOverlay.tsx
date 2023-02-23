import { memo } from "react";
import styled from "styled-components";

const TopCanvasOverlay = () => {
  return (
    <StyledContainer>
      <HpBar />
      <span>Username</span>
      <span>1 lvl</span>
      <FatigueBar />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 30px;
`;

const HpBar = styled.div`
  position: absolute;
  top: 50%;
  left: -250px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.error};
  border: 4px solid ${({ theme }) => theme.colors.blue};
  border-right: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 18px;
  transform: translateY(-50%);
`;

const FatigueBar = styled.div`
  position: absolute;
  top: 50%;
  right: -250px;
  width: 250px;
  background-color: white;
  border: 4px solid ${({ theme }) => theme.colors.blue};
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 18px;
  transform: translateY(-50%);
`;

export default memo(TopCanvasOverlay);
