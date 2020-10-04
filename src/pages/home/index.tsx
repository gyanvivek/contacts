import React from 'react';
import Header from '../../common/Header';
import ContactItem from './ContactItem';
import { useDispatch } from 'react-redux';
import { types } from '../../store/actions/auth';
import './styles.css';

const data = [
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '1',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '2',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '3',
  },
  {
    name: 'Gyan Vivek',
    email: 'gyanvivek@gmail.com',
    phoneNumber: '8356851291',
    id: '4',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Header
        image_url="../../abc"
        name="gyan vievelk"
        email="gyan vivek@gmail.com"
        onLogout={() => dispatch({ type: types.AUTH_LOGOUT_SUCCESS })}
      />
      <main className="home">
        <h3 className="home-title">Contacts ( {` ${data.length} `} )</h3>
        <div className="contact-table-header">
          <span className="contact-table-column">NAME</span>
          <span className="contact-table-column">MAIL</span>
          <span className="contact-table-column">PHONE NUMBER</span>
        </div>
        <div>
          {data.map(item => {
            return <ContactItem key={item.id} {...item} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
