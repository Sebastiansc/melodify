import React from 'react';
import SessionButtonsContainer from '../session/buttons_container';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <nav role="navigation"
           className="navbar navbar-default navbar-fixed-top">

          <div className="navbar-header">
              <button type="button" data-target="#navbarCollapse"
                      data-toggle="collapse" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand">Sauti</a>
          </div>

          <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Messages</a></li>
              </ul>
              <SessionButtonsContainer/>
          </div>
      </nav>

    );
  }
}