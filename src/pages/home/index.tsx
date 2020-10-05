import React from 'react';
import Header from '../../common/Header';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../store/actions/contacts';
import { types as authtypes } from '../../store/actions/auth';

import authSelector from '../../store/selectors/auth';
import contactSelector from '../../store/selectors/contact';
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
  const contact = useSelector(contactSelector.contacts);
  const profileData = useSelector(authSelector.userData);
  return (
    <div className="container">
      <Header
        image_url={profileData.imageUrl}
        name={profileData.name}
        email={profileData.email}
        onLogout={() => dispatch({ type: authtypes.AUTH_LOGOUT_SUCCESS })}
      />
      <main className="home">
        <h3 className="home-title">Contacts ( {` ${contact.length} `} )</h3>
        <div className="contact-table-header">
          <span className="contact-table-column">NAME</span>
          <span className="contact-table-column">MAIL</span>
          <span className="contact-table-column">PHONE NUMBER</span>
        </div>
        <div>
          {contact.map((item: any) => {
            return (
              <ContactItem
                key={item.id}
                onDelete={(id: string) => {
                  console.log('delete' + id);
                  dispatch({
                    type: types.DELETE_CONTACT_SUCCESS,
                    data: { id },
                  });
                }}
                {...item}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
