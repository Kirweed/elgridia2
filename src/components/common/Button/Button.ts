import styled from "styled-components";

const Button = styled.button`
  color: inherit;
  border: 1px solid white;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: 25px;
  padding: 10px 20px;
`;

export default Button;
