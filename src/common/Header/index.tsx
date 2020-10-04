import React from 'react';
import Logout from '../../assets/logout.svg';
import './styles.css';

export type HeaderProps = {
  image_url?: string;
  email: string;
  name: string;
};

const Header = ({ name, email, image_url }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-detail">
        <img src={Logout} alt="" style={{ margin: 4 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <img className="logout" src={Logout} alt="" />
    </div>
  );
};

export default Header;
