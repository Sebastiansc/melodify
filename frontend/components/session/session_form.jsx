import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }

  componentDidUpdate(){
    if (this.props.loggedIn) this.props.router.push('/home');
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

  checkLoginState(){
    FB.getLoginStatus(response => {
      if (response.status !== "connected") {
        this.statusChangeCallback(response);
      }
    });
  }

  getUserData(userData){
    FB.api('/me', {fields: 'email, name, id'}, function(response) {
      const img = "http://graph.facebook.com/"+response.id+"/picture";
      userData.email = response.email;
      userData.username = response.name;
      userData.avatar = img;
    });
  }

  statusChangeCallback(r) {
    FB.login(response => {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        const url = 'api/v1/session/rest-auth/facebook/';
        const data = {
          access_token: response.authResponse.accessToken,
          code: response.authResponse.signedRequest
        };
        this.props.socialLogin(data, url);
        
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
      }
    }, {scope: 'public_profile, email' });
  }

  render(){
    return (
      <Modal
        isOpen={this.props.settings.open}
        onRequestClose={() => this.props.closeModal()}
        contentLabel="Modal"
        className="react-modal center-block"
        overlayClassName='react-modal-overlay'
      >
        <div className='container modal-container'>
          <button scope="email" onClick={() =>
              this.checkLoginState()}
              className="facebook btn-block btn-lg">
              Continue with Facebook
            </button>
            <div className='separator'>
              <div></div>
              <span>or</span>
              <div></div>
            </div>
            <input type='text' onChange={e => this.update(e, 'username')}
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
