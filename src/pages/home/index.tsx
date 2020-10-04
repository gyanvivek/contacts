import React from "react";
import Header from "../../common/Header";
import ContactItem from "./ContactItem";

const data = [
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291",
    id: "1",
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291",
    id: "2",
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291",
    id: "3",
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291",
    id: "4",
  }
];

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div style={{ marginTop: 78 }}>
        {data.map((item) => {
          return <ContactItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
