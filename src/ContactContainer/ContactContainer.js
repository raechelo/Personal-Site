import React, { Component } from 'react';
import ContactCard from '../ContactCard/ContactCard'

class ContactContainer extends Component {
  constructor(props) {
    super(props)
      this.state = {

      }
  }
  render() {
  
  let data = Object.values(this.props.contactData)
  
    return (
      <body className="ContactContainer">
      { data.map(c => <ContactCard 
      img={c.img} 
      name={c.name} 
      link={c.link}
      phrase={c.phrase} />) }
      </body>
    )
  }
}

export default ContactContainer;