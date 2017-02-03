import React from 'react';
import SearchBox from './search_box';
import UserDropDown from './user_drop_down';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="nav-bar-contrast-holder">
        <div className='nav-bar-contrast'></div>
        <nav className='nav-bar'>
          <div className='nav-container'>
            <ul>
              <li><Link to='home'>
                <img className='logo'
                   src='https://res.cloudinary.com/flikr/image/upload/v1478498324/logo3_vehkaq.svg'></img>
              </Link></li>
              <li><Link to='home'>Explore</Link></li>
              <li><Link to={`home/profile/${this.props.currentUser.id}`}>
                You
              </Link></li>
          </ul>
          <div className='nav-right'>
            <UserDropDown logout={this.props.logout}
               user={this.props.currentUser}/>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
