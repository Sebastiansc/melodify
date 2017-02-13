import React from 'react';
import NavBar from './shared/nav_bar';
import PlayerContainer from './shared/player_container';
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
    if (this.shouldSeeSplash()) display = 'none';
    return(
      <div className='container body-wrapper'>
        <NavBar
          user={this.props.user}
          router={this.props.router}
          display={display}
        />
        {this.props.children}
        <PlayerContainer/>
      </div>
    );
  }
}
