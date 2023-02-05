import styled from "styled-components";

const Button = styled.button<{ small?: boolean; secondary?: boolean }>`
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.grey : theme.colors.blue};
  border: 1px solid white;
  border-radius: 5px;
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.blue : theme.colors.grey};
  font-size: ${({ small }) => (small ? "16px" : "25px")};
  padding: ${({ small }) => (small ? "5px 10px" : "10px 20px")};
`;

export default Button;
