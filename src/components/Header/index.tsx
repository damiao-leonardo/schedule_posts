import React from 'react';

import logo from '../../assets/logo.svg';
import icon_logo from '../../assets/icon_logo.svg';
import avatar from '../../assets/avatar.svg';
import { Container } from './style';

const Header: React.FC = () => {
    return (
       <Container>
                  <a className="sideDrawer" href="/"><img src={icon_logo} alt="iconLogo" /></a>
                  <a className="Logo" href="/"><img src={logo} alt="Logo" /></a>
                  <nav>
                      <img src={avatar} alt="Avatar" />
                      <strong>Damião Leonardo</strong>
                  </nav>
       </Container>
    );
};

export default Header;