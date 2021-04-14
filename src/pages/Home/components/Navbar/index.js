import { NavbarContainer, ButtonNav, Content } from './styles';

function Navbar() {
  return (
    <NavbarContainer>
      <ButtonNav>REGISTRAR GRÁTIS</ButtonNav>
      <Content>
        <span>Tags em alta</span>
        <ul>
          <li>#reactjs</li>
          <li>#javascript</li>
          <li>#dotnet</li>
          <li>#php</li>
          <li>#materialdesign</li>
          <li>#webdev</li>
          <li>#materialdesign</li>
        </ul>
      </Content>
    </NavbarContainer>
  );
}

export default Navbar;