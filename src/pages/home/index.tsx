import React from "react";
import Header from "../../common/Header";
import ContactItem from "./ContactItem";

const data = [
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291"
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291"
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291"
  },
  {
    name: "Gyan Vivek",
    email: "gyanvivek@gmail.com",
    phoneNumber: "8356851291"
  }
];

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div style={{marginTop:78}}>
        {data.map((item) => {
          return <ContactItem {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
