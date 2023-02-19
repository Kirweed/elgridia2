import styled from "styled-components";

const Header = () => <StyledHeader>Witaj w Elgridii przybyszu!</StyledHeader>;

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 100px;
`;

export default Header;
