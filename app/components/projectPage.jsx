import React from 'react';
import {Link} from 'react-router';

import Data  from './data.jsx';
const projects = Data().projects;

export default class ProjectPage extends React.Component {
    constructor(props){
      super(props)
    }
    componentWillMount(){
      let obj = this.getProjectObj(this.props.params.id);
      this.setState(obj);
    }
    componentWillReceiveProps(nextProps) {
      let obj = this.getProjectObj(nextProps.params.id);
      this.setState(obj);
    }
    render (){
      return (
          <div className='projectPage'>
            <div className='header'>
              <div className='name'>
                <Link to={'/'}>
                  <div>Joseph</div>
                  <div>Nayigiziki</div>
                </Link>
              </div>
              <div className='projectName'>
                {this.state.projectName}
              </div>
            </div>
            <div className='projectPicture'></div>
            <div className='projectSpecs'>
              <div className='leftColumn'>
                <div className='projectSpec'>
                  <div className='title'>My Role</div>
                  <div className='description'>{this.state.myRole}</div>
                </div>
                <div className='projectSpec'>
                  <div className='title'>Description</div>
                  <div className='description'>{this.state.projectDescription}</div>
                </div>
                <div className='projectSpec'>
                  <div className='title'>Collaborators</div>
                  <div className='description'>{this.state.collaborators.map((collaborator,index) =>
                     <div key={index}>{collaborator.role} - {collaborator.name}</div>
                    )}</div>
                </div>
              </div>
              <div className='rightColumn'>
                <div className='projectSpec'>
                  <div className='title'>Project URL</div>
                  <a href={this.state.projectUrl} className='description'><div>Project URL - {this.state.projectName}</div></a>
                </div>
                <div className='projectSpec'>
                  <div className='title'>Github URL</div>
                  <a href={this.state.githubURL} className='description'><div>Project URL - {this.state.githubURL}</div></a>
                </div>
                <div className='projectSpec'>
                  <div className='title'>Year</div>
                  <div className='description'>{this.state.year}</div>
                </div>
              </div>
            </div>
            <div className='projectNavigation'>
              <div className='prevProject'>
                <Link to={'/projects/' + this.state.prev}><span>{this.state.prev}</span></Link>
              </div>
              <div className='nextProject'> 
                <Link to={'/projects/' + this.state.next}><span>{this.state.next}</span></Link>
              </div>
            </div>
        </div>
        );
    }
    getProjectObj(projectName){
      console.log(projectName)
      let projectObj;
      for(let i = 0; i < projects.length; i++){
        if(projects[i].projectName === projectName){
            projectObj = projects[i];
            projectObj = JSON.parse(JSON.stringify(projectObj))
            break;
        }
      }

      console.log(projects[projectObj.next])
      console.log(projects[projectObj.prev])
      projectObj.next = projects[projectObj.next].projectName;
      projectObj.prev = projects[projectObj.prev].projectName;
      return projectObj;
    }
};