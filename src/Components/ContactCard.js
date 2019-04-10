import React from 'react';


const ContactCard = (props) => {
  return (
    <article>
      <img src={props.img}/>
      <a target="blank" href={props.link} >{props.name}</a>
    </article>
  )
}

export default ContactCard;