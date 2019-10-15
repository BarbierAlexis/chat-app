import React from 'react';
import './Contact.css';


class Contact extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      online: props.status,
    };
  }
  render(){
    return (
    <div className = 'Contact'>
      <img className ="avatar" alt='avatar' src={this.props.avatar}/>
      <div className = 'Card'>
        <p className ='name'>{this.props.name}</p>
        <div className ='status'>{this.state.online? 
          <div className ="card-display">
            <p 
            className ="status-online"
            onClick={event => {
              const newOnline = !this.state.online;
              this.setState({online: newOnline });
              console.log(this.state.online )
            }}></p>
            <p className ="status-text">Online </p>
          </div> : 
          <div className ="card-display">
            <p className ="status-offline" onClick={event => {
              const newOnline = !this.state.online;
              this.setState({online: newOnline });
              console.log(this.state.online )
            }}></p>
            <p className ="status-text">Offline </p>
          </div>}
        </div>
      </div>
    </div>
    )
  }
}
  

export default Contact;