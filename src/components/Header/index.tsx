// Shared internal imports
import logo from "assets/WhiteLogo.png";
import { Link } from "react-router-dom";

// Internal imports
import {
  BottomWrapper,
  HeaderWrapper,
  Logo,
  NavItem,
  NavWrapper,
} from "./styles";

const Header = () => {
  // RENDERERS
  const renderHeaderTopSide = () => (
    <Link to="/">
      <Logo src={logo} alt="Author's icon" />
    </Link>
  );

  const renderHeaderBottomSide = () => (
    <BottomWrapper>
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/skills">Skills</NavItem>
        <NavItem to="/work">Work</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavWrapper>
    </BottomWrapper>
  );

  return (
    <HeaderWrapper>
      {renderHeaderTopSide()}
      {renderHeaderBottomSide()}
    </HeaderWrapper>
  );
};

export default Header;
