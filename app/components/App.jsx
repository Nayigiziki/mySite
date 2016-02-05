import React from 'react';
import uuid from 'node-uuid';
import assign from 'object-assign';
import Projects from './Projects.jsx';
import Data  from './data.jsx';
const projects = Data().projects;

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {projects};
    }

    render (){
      console.log(this.props.children)
      const projects = this.state.projects;
      return (
            <div id='pageContainer'>
              <div id='introduction'>
                <div>
                  <div id='name'>Joseph</div>
                  <div id='name'>Nayigiziki</div>
                  <div id='tagLine'><div>Engineer, tinkerer, creator</div></div>
                  <div id='downArrow'><div><img src={'./assets/downArrow.png'}/></div></div>
                </div>
              </div>
              <Projects projects={projects} />
              <div className='aboutJoe'>
                <div className='header'>
                  <div className='name'>
                    <div>Joseph</div>
                    <div>Nayigiziki</div>
                  </div>
                  <div className='roles'>
                    <div>Engineer</div>
                    <div>Tinkerer</div>
                    <div>Creator</div>
                  </div>
                </div>
                <div className='body'>
                  I am software engineer, who has a strong understanding of Javascript and who has built many mobile, real-time and desktop applications with technologies including Node, with Angular, React, Node, & Express. Reactive programming’s approach to asynchrony excites me.
                  <br></br>
                  <br></br>
                  I am currently working on developing a desktop application for track & forth.
                </div>
              </div>
              <div className='footer'>
                  <div><img src={'./assets/circle.png'}/></div>
                  <div><img src={'./assets/circle.png'}/></div>
                  <div><img src={'./assets/upArrowWhite.png'}/></div>
                  <div><img src={'./assets/circle.png'}/></div>
                  <div><img src={'./assets/circle.png'}/></div>
              </div>
          </div>
        );
      }
};







