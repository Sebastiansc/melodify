import React from 'react';
import LikePopupContainer from './shared/like_popup_container';
import NavBar from './shared/nav_bar';
import PlayerContainer from './shared/player_container';
import PlaylistModalContainer from './playlists/playlist_modal_container';
import Splash from './splash/splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldSeeSplash() {
    return !this.props.user.id && this.props.router.location.pathname === '/';
  }

  render(){
    let display = '';
    if (this.shouldSeeSplash()){
       $('body').removeClass('nav-body');
       display = 'none';
    } else {
      $('body').addClass('nav-body');
    }
    return(
      <div className='container body-wrapper'>
        <NavBar
          user={this.props.user}
          router={this.props.router}
          display={display}
        />
        <LikePopupContainer />
        <PlaylistModalContainer />
        {this.props.children}
        <PlayerContainer/>
      </div>
    );
  }
}
