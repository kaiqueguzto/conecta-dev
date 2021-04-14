import { HeaderContainer } from './styles';
import { Button } from '../../../../components/Button';
import Logo  from '../../../../assets/logo.png';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <HeaderContainer>

      <img class="logo" src={Logo} />

      <div className="toolbar">
          <Button>NOVO POST</Button>
          <IoMdNotificationsOutline className="notification" size={30} color="#848484" />
          <FaUserCircle size={38} color="#BDBDBD" />
      </div>

    </HeaderContainer>
  );
}

export default Header;