import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/cats">Cats</NavLink>
    </Nav>
  );
};

export default Header;
