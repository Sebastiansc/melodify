import React from 'react';
import SessionContainer from './session_container';

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {open: false, action: ''};
  }

  toggleModal(action){
    this.setState({ open: !this.state.open, action });
  }

  render(){
    return(
      <ul className="nav navbar-nav navbar-right">
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
        <SessionContainer closeModal={() => this.toggleModal()}
                          settings={this.state}/>
      </ul>
    );
  }
}


export default Buttons;
