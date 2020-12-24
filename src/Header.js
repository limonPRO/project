import React from 'react';
import "./Header.css"; 
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
             
             <div className="header__left">
                <MenuIcon/>
             </div>
             <div className="header__right">
                sign up
             </div>
        </div>
    )
}

export default Header
