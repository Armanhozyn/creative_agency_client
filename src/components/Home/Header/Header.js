import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar.js/NavBar';

const Header = () => {
    return (
        <div style={{background: '#FBD062'}}>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
