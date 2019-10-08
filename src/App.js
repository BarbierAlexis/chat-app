import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <Contact name = 'Mike Howell' avatar = 'https://randomuser.me/api/portraits/men/23.jpg' status = {true}/>
        <hr></hr>
        <Contact name = 'Ted Kelly' avatar = 'https://randomuser.me/api/portraits/men/94.jpg' status = {false}/>
        <hr></hr>
        <Contact name = 'Amber Hayes' avatar = 'https://randomuser.me/api/portraits/women/22.jpg' status = {true}/>
      </div>
    </header>
  );
}

export default App;
