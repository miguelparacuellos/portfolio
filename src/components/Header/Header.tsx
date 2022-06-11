// Shared internal imports
import logo from "assets/WhiteLogo.png";

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
  const renderHeaderTopSide = () => <Logo src={logo} alt="Author's icon" />;

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
