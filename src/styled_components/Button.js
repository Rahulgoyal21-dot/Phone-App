import styled from "styled-components";
import { Button } from "grommet";

export const ButtonContainer = styled(Button)`
  text-transform: capitalize;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 1rem;
  background: transparent;
  transitions: all 0.5s ease-in-out;
  font-size: 1.43rem;
  padding: 0.5rem 0.8rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &:focus {
    outline: white;
  }
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  cursor: pointer;
`;
