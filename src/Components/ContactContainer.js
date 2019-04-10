import React from 'react';
// import contactData from '../data'
import ContactCard from './ContactCard'

const ContactContainer = (props) => {
  let data = Object.values(props.contactData)
  return(
    <section className="CardContainer">
      { data.map(c => 
        // console.log(contactData)
      <ContactCard name={c.name} img={c.img} link={c.link} />
      )}
    </section>
  )
}

export default ContactContainer;