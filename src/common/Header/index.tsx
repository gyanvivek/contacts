import React from 'react';
import Logout from '../../assets/logout.svg';
import './styles.css';
import { GoogleLogout } from 'react-google-login';
import ContactSvg from '../../assets/contactimage.svg';

export type HeaderProps = {
  image_url?: string;
  email: string;
  name: string;
  onLogout?: () => void;
};

const Header = ({ name, email, image_url, onLogout }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-detail">
        <img src={ContactSvg} alt="" style={{ margin: 4 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="header-text-name">{name}</div>
          <div className="header-text-email">{email}</div>
        </div>
      </div>
      <GoogleLogout
        clientId={
          '466588689475-3vn3gfoo72al6d4j74s4mtonuu4aftuf.apps.googleusercontent.com'
        }
        render={renderProps => (
          <img
            onClick={() => renderProps.onClick}
            className="logout"
            src={Logout}
            alt=""
          />
        )}
        onLogoutSuccess={onLogout}
        onFailure={() => console.log('failure')}
      ></GoogleLogout>
    </div>
  );
};

export default Header;
