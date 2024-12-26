import React from 'react';
import "./Header.css";
import logo from "./images/hookup.png"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
    
        <IconButton>
             <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>

        <img className='header__logo'
            src={logo} alt='Logo' />

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
       
    </div>
  )
}

export default Header