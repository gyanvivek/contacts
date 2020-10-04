import React from 'react';
import Header from '../../common/Header';
import ContactItem from './ContactItem';

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
  return (
    <div className="container">
      <Header />
      <main className="home">
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
