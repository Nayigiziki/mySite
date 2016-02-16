import React from 'react';
import {Link} from 'react-router';
import Jump from 'jump.js';
import Data  from './data.jsx';
 
const jump = new Jump();
const projects = Data().projects;
const colors = ['#092A30', '#003B4C', '#50748A', '#003A70', '#131F6B', '#003056', '#004987', '#002D73', '#0B1F2C', '#051D49', '#092A30', '#003B4C', '#50748A', '#003A70', '#131F6B', '#003056', '#004987', '#002D73', '#0B1F2C', '#051D49'];

export default class ProjectPage extends React.Component {
    constructor(props){
      super(props)
    }
    componentWillMount(){
      let obj = this.getProjectObj(this.props.params.id);
      let state = this.props.location.state;
      this.updateStyle(obj);
      this.setState(obj);
    }
    componentWillReceiveProps(nextProps) {
      let obj = this.getProjectObj(nextProps.params.id);
      this.updateStyle(obj);
      this.setState(obj);
    }
    render (){
      const mediaTag = this.renderMediaTag();
      return (
          <div className='projectPage'>
            <div style={this.state.style.current} className='header'>
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
            <div className='projectPicture'>
              {mediaTag}
            </div>
            
            <div className='projectSpecs'>
              
              <div className='row'>
                <div className='projectSpecDescription'>
                  <div className='title'>Description</div>
                  <div className='description'>{this.state.description}</div>
                </div>
              </div>

              <div className='rowMiddle'>
                  <div>
                    <div className='title'>My Role</div>
                    <div className='description'>{this.state.myRole}</div>
                  </div>
                  <div>
                    <div className='title'>Collaborators</div>
                    <div className='description'>{this.state.collaborators.map((collaborator,index) =>
                       <div key={index}>{collaborator.role} - {collaborator.name}</div>
                      )}</div>
                  </div>
                  <div>
                    <div className='title'>Year</div>
                    <div className='description'>{this.state.year}</div>
                  </div>
              </div>
              
              <div className='row'>
                <div className='projectSpec'>
                  <div className='title'>Github URL</div>
                  <a href={this.state.githubURL} className='description'><div>{this.state.githubURL}</div></a>
                </div>
                <div className='projectSpec'>
                  <div className='title'>Project URL</div>
                  <a href={this.state.projectUrl} className='description'><div>{this.state.projectUrl}</div></a>
                </div>
              </div>


            </div>


            <div className='projectNavigation'>
              <div style={this.state.style.prev} className='prevProject'>
                <Link to={'/projects/' + this.state.prev}><span>{this.state.prev}</span></Link>
              </div>
              <div style={this.state.style.next} className='nextProject'> 
                <Link to={'/projects/' + this.state.next}><span>{this.state.next}</span></Link>
              </div>
            </div>
        </div>
        );
    }
    updateStyle (obj) {
      let index = obj.index;
      let prevColor = index === 0 ? colors[colors.length - 1] : colors[index - 1];
      let nextColor =  index === colors.length - 1 ? colors[0] : colors[index + 1];
      let currColor = colors[index];
      obj['style'] = {
        prev : {
          backgroundColor : prevColor,
        },
        next : {
          backgroundColor : nextColor
        },
        current : {
          backgroundColor : currColor
        }
      }
    }
    getProjectObj(projectName){
      let projectObj;

      for(let i = 0; i < projects.length; i++){
        if(projects[i].projectName === projectName){
            projectObj = JSON.parse(JSON.stringify(projects[i]))
            projectObj['index'] = i;
            break;
        }
      } 
      return projectObj;
    }
    renderMediaTag(){
      if(this.state.media.type === 'youtube'){
        return(<iframe src={this.state.media.resource} frameBorder="0" allowFullScreen></iframe>);
      }

      if(this.state.media.type === 'gif' || this.state.media.type === 'image' ){
        return (<img className='projectMedia' src={this.state.media.resource} />);
      }

      return <div>Joe Logo</div>
    }
};