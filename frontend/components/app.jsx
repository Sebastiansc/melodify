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
    let component;
    if (this.shouldSeeSplash()) {
      $('body').removeClass('nav-body');
      component = <Splash/>;
      // return <Splash/>;
    } else {
      $('body').addClass('nav-body');
      component = <NavBar user={this.props.user} router={this.props.router}/>;
    }
    return(
      <div className='container body-wrapper'>
        {component}
        {this.props.children}
        <PlayerContainer/>
      </div>
    );
  }
}
