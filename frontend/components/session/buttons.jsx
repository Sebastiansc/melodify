import React from 'react';
import SessionContainer from './session_container';
import { withRouter } from 'react-router';

class SessionButtons extends React.Component {
  constructor(){
    super();
    this.state = {open: false, action: ''};
  }

  toggleModal(action){
    this.setState({ open: !this.state.open, action });
  }

  logout(){
    this.props.logout();
    this.setState({open: false, action: ''});
  }

  render(){
    if (!this.props.loggedIn) {
      return(
        <ul className={`session-buttons ${this.props.className}`}>
          <li onClick={() => this.toggleModal("login")}
            className='enter login'>
            <a>
              Login
            </a>
          </li>
          <li onClick={() => this.toggleModal("create")}
            className='login signup'>
            <a>
              Create account
            </a>
          </li>
          <SessionContainer closeModal={() => this.toggleModal()}
            settings={this.state}/>
        </ul>
      );
    } else {
      return (
        <ul className={`session-buttons col-lg-1 col-md-1`}>
          <li onClick={() => this.logout()}
            className='login logout signup'>
            <a>
              Logout
            </a>
          </li>
        </ul>
      );
    }
  }
}


export default withRouter(SessionButtons);
