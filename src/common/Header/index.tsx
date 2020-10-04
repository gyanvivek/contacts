import React from 'react';
import Logout from '../../assets/logout.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logout" src={Logout} alt="" />
    </div>
  );
};

export default Header;
