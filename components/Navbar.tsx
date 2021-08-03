import React from 'react';

import { NavContainer } from './styled/Nav.styled';

const Navbar: React.FC = () => {
  return (
    <NavContainer as="nav">
      <div>My brand title or website title ?</div>
      <div>Nav links TODO</div>
    </NavContainer>
  );
};

export default Navbar;
