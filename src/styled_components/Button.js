import styled from "styled-components";
import { Button, Box } from "grommet";

export const ButtonContainer = styled(Button)`
  text-transform: capitalize;
  color: black;
  border-radius:0.5rem
  background: transparent;

  font-size: 1.43rem;
  padding:0.5rem 0.8rem;
  margin:0.2rem 0.5rem 0.2rem 0;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--mainWhite);
    color: var(--mainBlue);
  }
  cursor: pointer;
 
`;
