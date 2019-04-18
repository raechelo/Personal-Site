import React, { Component } from 'react';
import data from '../data'
import Header from '../Header/header'
import ContactContainer from '../ContactContainer/ContactContainer';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactData: [],
      projectData: []
    }
  }

  componentDidMount = () => {
    // fetch('https://gist.github.com/raechelo/296ac8bb10a6840745f6c89d5ebcf6f9')
    // .then(res => res.json())
    // .then(contactData =>console.log(contactData) ) 
    // .catch(err => { throw new Error(err) } )
    this.setState( {contactData: Object.values(data.contactData), projectData: Object.values(data.projectData)} )
    console.log(data)
  }

  render() {
    return (
      <main className="App">
        <div className="film">
          <Header />
          <ProjectContainer projectData={this.state.projectData} />
          <ContactContainer contactData={this.state.contactData}/>
        </div>
      </main>
    );
  }
}

export default App;
