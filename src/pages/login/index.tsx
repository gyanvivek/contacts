import React from 'react';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Surface from '../../common/Surface';
import { LOGIN_TITLE } from '../../utils/constants';
import Logo from '../../assets/google.svg';
import { GoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import authSelector from '../../store/selectors/auth';
import { types } from '../../store/actions/auth';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const isloading = useSelector(authSelector.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="container">
      <div className="login-container">
        <Surface>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={Logo}
              alt=""
              className="login-logo"
              style={{ marginBottom: 16 }}
            />
            <span className="login-header" style={{ marginBottom: 32 }}>
              {LOGIN_TITLE}
            </span>
            <TextInput placeholer="Email" />
            <TextInput placeholer="Password" />
            <GoogleLogin
              clientId={
                '466588689475-3vn3gfoo72al6d4j74s4mtonuu4aftuf.apps.googleusercontent.com'
              }
              render={renderProps => (
                <Button
                  text="SignIn"
                  onClick={renderProps.onClick}
                  disabled={isloading}
                />
              )}
              disabled={isloading}
              buttonText="Login"
              onSuccess={data => {
                dispatch({ type: types.AUTH_SUCCESS, data: data });
                history.push('/home');
              }}
              onFailure={error => console.log(error)}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </Surface>
      </div>
    </div>
  );
};

export default Login;
