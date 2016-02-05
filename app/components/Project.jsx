import React from 'react';
import {Link} from 'react-router';

export default class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active : false
    };
  }
  updateStateActiveBoolean (activeState){
     this.setState({ active : !activeState });
  }
  render() {
    var divActiveProjectBannerClassString = 'activeProjectBanner';
    var spanReadMoreClassString = 'readMoreBox';
    var spanXClassString = 'plus';
    var divProjectSummaryClassString = 'projectSummary';
    var clickSpanXHandler = this.updateStateActiveBoolean.bind(this, this.state.active);

    if(this.state.active){
      divActiveProjectBannerClassString += ' activeProjectBannerTransition';
      spanReadMoreClassString += ' transitionReadMore';
      spanXClassString +=  ' rotatedX';
      divProjectSummaryClassString += ' transitionProjectSummary';
    } 

    return (
        <div className={divActiveProjectBannerClassString}>
            <div className='projectBanner bannerContents'>
              <span className='projectTitle'>{this.props.projectName}</span>
              <Link to={'/projects/' + this.props.projectName}>
                <span className={spanReadMoreClassString}>Read More</span>
              </Link>
              <span className={spanXClassString} onClick={clickSpanXHandler}><img src={'./assets/plus.png'}/></span>
            </div>
            <div className={divProjectSummaryClassString}><span>{this.props.projectDescription}</span></div>
        </div>
      );
  }
};