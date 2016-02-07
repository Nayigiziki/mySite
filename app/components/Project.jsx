import React from 'react';
import {Link} from 'react-router';
import ColorGenerator from 'color-generator';
 
// see https://github.com/harthur/color for docs on conversions 

export default class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active : false,
      style : {
        backgroundColor : this.props.color
      },
      index: {
        index: this.props.index
      }
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
    var linkClassString = 'linkFromIndexToProjectPage';
    if(this.state.active){
      divActiveProjectBannerClassString += ' activeProjectBannerTransition';
      spanReadMoreClassString += ' transitionReadMore';
      spanXClassString +=  ' rotatedX';
      divProjectSummaryClassString += ' transitionProjectSummary';
      linkClassString = 'linkFromIndexToProjectPageActive';
    } 

    return (
        <div className={divActiveProjectBannerClassString} style={this.state.style}>
            <div className='projectBanner bannerContents'>
              <span className='projectTitle'>{this.props.projectName}</span>
              <Link className={linkClassString} to={'/projects/' + this.props.projectName} state={this.state.index}>
                <span className={spanReadMoreClassString}>Read More</span>
              </Link>
              <span className={spanXClassString} onClick={clickSpanXHandler}><img src={'./assets/plus.png'}/></span>
            </div>
            <div className={divProjectSummaryClassString}><span>{this.props.projectDescription}</span></div>
        </div>
      );
  }
};

