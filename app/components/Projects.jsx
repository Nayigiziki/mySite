import React from 'react';
import Project from './Project.jsx';
let colors = ['#092A30', '#003B4C', '#50748A', '#003A70', '#131F6B', '#003056', '#004987', '#002D73', '#0B1F2C', '#051D49', '#092A30', '#003B4C', '#50748A', '#003A70', '#131F6B', '#003056', '#004987', '#002D73', '#0B1F2C', '#051D49'];

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
          color : colors[index]
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