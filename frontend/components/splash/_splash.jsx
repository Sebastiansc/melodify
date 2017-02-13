import React from 'react';
import Banner from './banner';
import SearchBarContainer from '../shared/search_bar_container';
import PlayerContainer from '../shared/player_container';
import TrendingContainer from './trending_container';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  shouldRedirect() {
    return this.props.loggedIn && this.props.router.location.pathname === '/';
  }

  componentDidUpdate() {
    if (this.shouldRedirect()) {
      this.props.router.replace('charts/top');
    }
  }

  render() {
    return(
      <div className='splash'>
        <Banner/>
        <div className='splash-info'>
          <SearchBarContainer formClass='splash-search'/>
        <span className='or-separator'>or</span>
        <Link to='upload' className='upload-button'>Upload your own</Link>
        <div className='splash-trending'>
            <h2>Hear what's trending today</h2>
            <TrendingContainer/>
            <div className='top-50'>
              <button className='splash-explore'>
                Explore our top 50
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
