import logo from "assets/WhiteLogo.png";

import { HeaderWrapper, Logo, NavBarWrapper, NavItem } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Website's logo" />
      <NavBarWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/skills">Skills</NavItem>
        <NavItem to="/work">Work</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
