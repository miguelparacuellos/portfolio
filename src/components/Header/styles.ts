import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 2rem;

  background-color: #0d47a1;
`;

export const Logo = styled.img`
  height: 3rem;
  margin: 1.5rem;
`;

export const BottomWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 1.5rem;
`;

export const NavItem = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  padding: 0.75rem;

  border: 1px solid #0d47a1;

  &:hover,
  &:active {
    border: 1px solid #e3f2fd;
    border-radius: 15px;
  }

  &:active {
    background-color: #42a5f5;
  }
`;
