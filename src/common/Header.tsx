import React from "react";
import Left from '../assets/headerleft.svg';
import Right from '../assets/headerright.svg';

const Header = () => {
  return (<div className="header">
        <img  src={Left} alt="" className="header-left"/>
        <img  src={Right} alt="" className="header-right"/>
  </div>);
};

export default Header;
