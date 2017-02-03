import React from 'react';
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
    this.props.processForm(user);
  }

  update(e, property){
    this.setState({[property]: e.target.value});
  }

  changeFormLink(){
    if(window.location.hash === '#/signin') {
      return (
        <div className="signin-bottom-row">
          <span>Dont have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/signup'>Sign up</Link>
          </span>
        </div>
      );
    } else {
      return(
        <div className="signin-bottom-row">
          <span>Alredy have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/signin'>Sign in</Link>
          </span>
        </div>
      );
    }
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

  render(){
    return (
      <div></div>
    );
  }
}

export default withRouter(SessionForm);
