import React from 'react';
import { withRouter } from 'react-router';

class UserDropDown extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    if(!this.props.user.id) this.props.router.push('/');
  }

  render(){
    return(
      <div className='user-drop-down'>
        <button className='logout' onClick={() => this.props.logout()} >
          Logout
        </button>
      </div>
    );
  }
}

export default withRouter(UserDropDown);
