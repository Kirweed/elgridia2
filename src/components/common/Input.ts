import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export default Input;
