import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }

  componentWillReceiveProps() {
    if (this.props.loggedIn) {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    const action = this.props.settings.action;
    action === "create" ? this.props.signup(user) : this.props.login(user);
  }

  update(e, property){
    this.setState({[property]: e.target.value});
  }

  displayErrors(){
    if(this.props.errors.length > 0){
      return (
        <ul className='signin-errors'>
          {this.props.errors.map((error,i) => <li key={i}>{error}</li>)}
        </ul>
      );
    }
  }

  guestLogin(){
    const user = {
      email: 'guest@local.com',
      password: 'cashmeoutsidehowbowdah'
    };
    this.props.login(user);
  }

  render(){
    return (
      <Modal
        isOpen={this.props.settings.open}
        onRequestClose={() => this.props.closeModal()}
        contentLabel="Modal"
        className={`react-modal center-block animated bounceInDown`}
        overlayClassName='react-modal-overlay'
      >
        <div className='container modal-container'>
          <button onClick={() => this.guestLogin()}
            className="facebook btn-block btn-lg">
            Continue as guest
          </button>

          <div className='separator'>
            <div></div>
            <span>or</span>
            <div></div>
          </div>

          <input type='text' onChange={e => this.update(e, 'email')}
            placeholder='Your e-mail'>
          </input>

          <input type='password' onChange={e => this.update(e, 'password')}
                 placeholder='Your password'>
          </input>

          <button onClick={e => this.handleSubmit(e)}
                  className='btn btn-warning btn-block btn-lg'>
            Continue
          </button>

          <a href="/api/v1/session/contrib/password_reset">
            Forgot my password
          </a>
        </div>
      </Modal>
    );
  }
}

export default withRouter(SessionForm);
