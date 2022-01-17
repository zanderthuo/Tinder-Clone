import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import '../styles/Header.css'
import { IconButton } from '@material-ui/core';
import TinderLogo from '../assets/Tinder_logo.png'

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src={TinderLogo}
        alt=""
      />

      <IconButton>
        
      </IconButton>
    </div>
  )
}

export default Header
