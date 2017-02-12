import React from 'react';
import SessionButtonsContainer from '../session/buttons_container';
import SearchBarContainer from './search_bar_container';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.user.id) {
      return(
        <nav role="navigation" className="nav-bar">
          <div className='container navbar-wrapper'>
            <div className='row navbar-row'>
              <div
                className='navbar-logo
                col-lg-2
                col-md-2
                col-sm-2'
                >
                <Link to='/'>Melodify</Link>
              </div>
              <ul
                className='left-navbar-wrapper
                col-lg-1
                col-md-1
                col-sm-1'
                >
                <li><Link>Charts</Link></li>
              </ul>
              <SearchBarContainer
                formClass='navbar-search'
                inputClass='navbar-searchfield'
                buttonClass='navbar-searchbutton'
                className='col-lg-6
                col-md-6
                col-sm-6'
                />
              <SessionButtonsContainer
                className='navbar-session
                col-lg-2
                col-md-2
                col-sm-2'
                />
              <div
                className='upload-wrapper
                col-lg-1
                col-md-1
                col-sm-1'>
                <Link to='upload' className='navbar-upload'>Upload</Link>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return(
        <nav role="navigation" className="nav-bar">
          <div className='container navbar-wrapper'>
            <div className='row navbar-row'>
              <div
                className='navbar-logo
                col-lg-1
                col-md-1
                col-sm-1'
                >
                <Link to='/'>Melodify</Link>
              </div>
              <ul
                className='left-navbar-wrapper
                col-lg-2
                col-md-2
                col-sm-2'
                >
                <li><Link to='charts'>Charts</Link></li>
                <li><Link to='collection'>Collection</Link></li>
              </ul>
              <SearchBarContainer
                formClass='navbar-search'
                inputClass='navbar-searchfield'
                buttonClass='navbar-searchbutton'
                className='col-lg-5
                col-md-5
                col-sm-5'
                />
              <div
                className='upload-wrapper
                col-lg-1
                col-md-1
                col-sm-1'>
                <Link to='upload' className='navbar-upload'>Upload</Link>
              </div>
              <div
                className='profile-menu
                col-lg-2
                col-md-2
                col-sm-2'>
                <Link to='#' className='profile-menu-link'>
                  <span className='profile-menu-pic'></span>
                  <div className='profile-menu-name'>
                    <span>Sebastian Cruz</span>
                  </div>
                  <div className='profile-menu-dropdown'>
                    <ul className='dropdown-list'>
                      <li>Profile</li>
                      <li>Likes</li>
                      <li>Playlists</li>
                    </ul>
                  </div>
                </Link>
              </div>
              <SessionButtonsContainer
                className='
                col-lg-1
                col-md-1
                col-sm-1'
                />
            </div>
          </div>
        </nav>
      );
    }
  }
}
