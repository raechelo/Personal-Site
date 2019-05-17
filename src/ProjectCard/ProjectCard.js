import React, { Component } from 'react';

export default class ProjectCard extends Component {

  render () {
    let cards = this.props.projectData.map(d => {
      return (
        <article className="ProjectCard">
        <h4 className="project-title">{d.name}</h4>
        <p className="project-summary">{d.summary}</p>
        <img src={d.imgLink} className="project-img" />
      </article>
      )
    })
    return (cards)
  }
}