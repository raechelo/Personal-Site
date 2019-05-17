import React, { Component } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Route, NavLink } from 'react-router-dom';

class ProjectContainer extends Component {
  constructor(props) {
    super(props)
      this.state = {

      }
  }
  render() {
  
  
    return (
      <section className="ProjectContainer">
        <ProjectCard projectData={this.props.projectData} />
      </section>
    )
  }
}

export default ProjectContainer;