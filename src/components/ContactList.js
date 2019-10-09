import React from 'react';
import './ContactList.css';
import Contact from './Contact';

const persons = [
  {
    name:"Max Neal",
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    name:"Mia Marshall",
    status: false,
    avatar: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name:"Larry Smith",
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    name:"Irene Ray",
    status: true,
    avatar: "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    name:"Hazel Lambert",
    status: false,
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  },
];
  
const ContactList = () => (
  <div>
    {persons.map((item) => {
      return (
        <Contact name={item.name} avatar={item.avatar} status={item.status} />
      )
    })}
  </div>
);

export default ContactList;