import React, { Component } from 'react';
import contactData from './data'
import Header from './Components/header'
import ContactContainer from './Components/ContactContainer';

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="film">
          <Header />
          <ContactContainer contactData={contactData}/>
        </div>
      </main>
    );
  }
}

export default App;
