import React, { Component } from 'react';
import data from './data'
import Header from './Components/header'
import ContactContainer from './Components/ContactContainer';
import ProjectContainer from './Components/ProjectContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactData: []
    }
  }

  componentDidMount = () => {
    this.setState( {contactData: Object.values(data)} )
    console.log(data)
  }

  render() {
    return (
      <main className="App">
        <div className="film">
          <Header />
          <ProjectContainer />
          <ContactContainer contactData={this.state.contactData}/>
        </div>
      </main>
    );
  }
}

export default App;
