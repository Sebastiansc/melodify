import React from 'react';
import NavBar from './shared/nav_bar';
import PlayerContainer from './shared/player_container';
import Splash from './splash/splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('body').addClass('nav-body');
  }

  shouldSeeSplash() {
    return !this.props.user.id && this.props.router.location.pathname === '/';
  }

  render(){
    if (this.shouldSeeSplash()) {
      return <Splash/>;
    } else {
      return(
        <div className='container body-wrapper'>
          <NavBar user={this.props.user} router={this.props.router}/>
          {this.props.children}
          <PlayerContainer/>
        </div>
      );
    }
  }
}
