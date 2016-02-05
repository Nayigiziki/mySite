import React from 'react';
import Project from './Project.jsx';

export default class Projects extends React.Component {
  constructor(props){
    super(props)
    console.log(this)
  }
  render() {
    let mapped = this.props.projects.map((projectDetails, index, arr) => {
        return {
          id : projectDetails.id,
          index: index,
          projectName: projectDetails.projectName, 
          projectDescription: projectDetails.projectDescription
        }
      });

      return (
            <div>
              {mapped.map(project =>
                  <Project key={project.id} 
                           projectName={project.projectName} 
                           index={project.index}
                           projectDescription={project.projectDescription} />
               )}
              </div>
            ); 
  
  }
}