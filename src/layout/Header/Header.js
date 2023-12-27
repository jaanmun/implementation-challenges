import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import leftArrow from '../../assets/left-arrow.png';

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <img src={leftArrow} alt="back button" />
      </Link>
    </header>
  );
};

export default Header;
