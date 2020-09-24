import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Nav =() =>{
    return (
        <nav className='navbar navbar-dark bg-dark mb-5'>
            <span className='navbar-brand mb-0 h1 mx-auto'></span>
            <Navbar.Brand href="#home">
      <img
        src="https://images.assettype.com/newslaundry/2020-01/d91cad07-9650-47e9-8bdc-9a6247354d95/Header_logo_NL__2_New.png"
        width="240"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
</nav>
    )
}

export default Nav;