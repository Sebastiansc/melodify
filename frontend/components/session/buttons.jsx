import React from 'react';
import SessionContainer from './session_container';

class SessionButtons extends React.Component {
  constructor(){
    super();
    this.state = {open: false, action: ''};
  }

  toggleModal(action){
    this.setState({ open: !this.state.open, action });
  }

  render(){
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
  }
}


export default SessionButtons;
