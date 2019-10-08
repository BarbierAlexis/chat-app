import React from 'react';
import './Contact.css';



function Contact(props) {
  return (
    <div className = 'Contact'>
      <img className ="avatar" src={props.avatar}/>
      <div className = 'Card'>
        <p className ='name'>{props.name}</p>
        <div className ='status'>{props.status? <div className ="card-display"><p className ="status-online"></p><p className ="status-text">Online </p></div> : <div className ="card-display"><p className ="status-offline"></p><p className ="status-text">Offline </p></div>}
        </div>
      </div>
    </div>
  )
}




export default Contact;