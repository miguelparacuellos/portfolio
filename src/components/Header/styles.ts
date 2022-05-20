import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  background-color: #03a9f4;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled(Link)`
  padding: 0.5rem 2rem;

  text-decoration: none;
  color: white;

  &:hover,
  active {
    border: 1px solid white;
    border-radius: 5px;
  }

  &:active {
    background-color: #4fc3f7;
  }
`;
