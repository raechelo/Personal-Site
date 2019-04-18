import React, { Component } from 'react';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    let cards = this.props.projectData.map(d => {
      return (
        <article>
        <h4>{d.name}</h4>
        <p>{d.summary}</p>
        {d.stack.join(' ')}
        <img src={d.imgLink} />
      </article>
      )
    })
    return (cards)
  }
}