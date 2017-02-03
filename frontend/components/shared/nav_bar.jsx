import React from 'react';
import SessionContainer from '../session/session_container';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false, action: ''};
  }

  toggleModal(action){
    this.setState({ open: !this.state.open, action });
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
              <ul className="nav navbar-nav navbar-right">
                  <li onClick={() => this.logout("login")}>
                    <a className='login'>
                      Logout
                    </a>
                  </li>
                  <li onClick={() => this.toggleModal("login")}>
                    <a className='login'>
                      Login
                    </a>
                  </li>
                <li onClick={() => this.toggleModal("create")}>
                  <a className='login'>
                      Create account
                  </a>
                </li>
              </ul>
              <SessionContainer settings={this.state}
                                closeModal={() => this.toggleModal()}/>
          </div>
      </nav>

    );
  }
}
