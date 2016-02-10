import React from 'react';
import Project from './Project.jsx';

export default class Projects extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    let mapped = this.props.projects.map((projectDetails, index, arr) => {
        return {
          id : projectDetails.id,
          index: index,
          projectName: projectDetails.projectName, 
          projectDescription: projectDetails.projectDescription,
          color : projectDetails.color
        }
      });
      return (
            <div id='projectsListing'>
              {mapped.map(project =>
                  <Project key={project.id} 
                           projectName={project.projectName} 
                           index={project.index}
                           projectDescription={project.projectDescription} 
                           color={project.color}/>
               )}
              </div>
            ); 
  
  }
}