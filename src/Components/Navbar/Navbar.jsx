import React from 'react';
import './navbar.css';
function Navbar(props) {
    return (
        <div className='container'>
          <div className='left'>
        <h2>Flex Business Pro</h2> 
        <p>Clean and Modern Business Theme</p>   
        </div>  
        <div className='right'>
            <a href='#'>Home</a>
            <a href='#'>About us</a>
            <a href='#'>Styleguide</a>
            <a href='#'>Blog</a>
            <a href='#'>Contact us</a>
        </div>
        </div>
    );
}

export default Navbar;