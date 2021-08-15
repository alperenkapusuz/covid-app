import React from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';

const Navi = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">COVID-19</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navi;
