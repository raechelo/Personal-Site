import React, { Component } from 'react';
import data from '../data'
import Header from '../Header/header';
import { Route } from 'react-router-dom';
import ContactContainer from '../ContactContainer/ContactContainer';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import About from '../About/About';
import SkillsContainer from '../SkillsContainer/SkillsContainer';

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
  }

  render() {
    return (
      <main className="App">
      <Route path ='/' component={App} />
      <Route path ='/about' component={About} />
      <Route path ='/skills' component={SkillsContainer} />
      <Route path ='/projects' component={ProjectContainer} />
      <Route path ='/contact' component={ContactContainer} />
          <Header />
          {/* <ContactContainer contactData={this.state.contactData}/> */}
      </main>
    );
  }
}

export default App;
