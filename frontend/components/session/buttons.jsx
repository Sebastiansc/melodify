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
    this.props.router.push('/');
  }

  render(){
    if (!this.props.loggedIn) {
      return(
        <ul className="session-buttons">
          <li onClick={() => this.toggleModal("login")}
            className='login'>
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
        <ul className="session-buttons">
          <li onClick={() => this.logout()}
            className='login signup'>
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
