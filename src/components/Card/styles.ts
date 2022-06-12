import styled from "styled-components";
import { ContainerProps } from "./ts";

export const Container = styled.div<ContainerProps>`
  display: flex;
  ${({ flexFlow }) => (flexFlow ? `flex-flow: ${flexFlow}` : "")}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ""}
  ${({ alignItems }) => (alignItems ? `alignItems: ${alignItems}` : "")}
  ${({ gap }) => (gap ? `gap: ${gap}` : "")}

  padding: 1rem 2rem;

  border: 1px solid #0d47a1;
  border-radius: 15%;
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor}` : ""}
`;
