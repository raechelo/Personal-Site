import React from 'react';


const ContactCard = (props) => {
  return (
    <article className="ContactCard">
      <img src={props.img}/>
      <a target="blank" href={props.link} >{props.name}</a>
    </article>
  )
}

export default ContactCard;