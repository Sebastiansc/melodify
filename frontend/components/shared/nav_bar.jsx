import React from 'react';
import SessionButtonsContainer from '../session/buttons_container';
import SearchBarContainer from './search_bar_container';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  isLoggedIn() {
    return Boolean(this.props.user.id);
  }

  componentDidMount() {
    if (!this.isLoggedIn()) return;
    $('body').click(() => {
      $('.profile-menu-dropdown').removeClass('menu-visible');
      $('.profile-menu-link').removeClass('profile-dropdown-dropped');
    });

    $('.profile-menu-link').click(e => {
      e.stopPropagation();
      $('.profile-menu-dropdown').toggleClass('menu-visible');
      $('.profile-menu-link').toggleClass('profile-dropdown-dropped');
    });
  }

  render(){
    if (!this.isLoggedIn()) {
      return(
        <nav
          role="navigation"
          className="nav-bar"
          style={{display: `${this.props.display}`}}>
          <div className='container navbar-wrapper'>
            <div className='row navbar-row'>
              <div
                className='navbar-logo
                col-lg-2
                col-md-2
                col-sm-1'
                >
                <Link to='/'>Melodify</Link>
              </div>
              <ul
                className='left-navbar-wrapper
                col-lg-1
                col-md-1
                col-sm-1'
                >
                <li><Link to='charts/top'>Charts</Link></li>
              </ul>
              <SearchBarContainer
                formClass='navbar-search'
                inputClass='navbar-searchfield'
                buttonClass='navbar-searchbutton'
                className='col-lg-6
                col-md-5
                col-sm-5'
                />
              <SessionButtonsContainer
                className='navbar-session
                col-lg-2
                col-md-3
                col-sm-4'
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
        <nav
          role="navigation"
          className="nav-bar"
          style={{display: `${this.props.display}`}}>
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
                <li><Link to='charts/top'>Charts</Link></li>
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
                <div
                  to='#'
                  className={`profile-menu-link`}>
                  <span className='profile-menu-pic'></span>
                  <div className='profile-menu-name'>
                    <span>{this.props.user.username}</span>
                  </div>
                  <div className={ `profile-menu-dropdown`}>
                    <ul className='dropdown-list'>
                      <Link className='profile-link'>Profile</Link>
                      <Link className='likes-link'>Likes</Link>
                      <Link className='playlists-link'>Playlists</Link>
                    </ul>
                  </div>
                </div>
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
