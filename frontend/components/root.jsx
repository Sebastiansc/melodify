import React from 'react';
import { Provider } from 'react-redux';
import { isEmpty } from 'lodash';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// LOCAL COMPONENTS
import AppContainer from './app_container';
import Chart from './charts/chart';
import Splash from './splash/splash';
import TrackDetailContainer from './track/track_detail_container';
import UploadContainer from './upload/upload_container';
// UTIL AND METHODS
import { getTracks } from '../actions/tracks_actions';
import { getSong } from '../actions/song_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/charts/top');
  };

  const splashEnter = (nextState, replace) => {
    fetchTracks(nextState);
    _redirectIfLoggedIn(nextState, replace);
  };

  const _ensureLogin = (nextState, replace) => {
    const state = store.getState();
    if(!state.session.currentUser.id){
      replace('/');
      return;
    } else if (isEmpty(store.getState().photos)){

    }
  };

  const fetchTracks = nextState => {
    store.dispatch(getTracks());
  };

  const fetchNewTracks = nextState => {
    if (isEmpty(nextState.location.query)) return;
    fetchTracks();
  };

  const fetchSong = nextState => {
    store.dispatch(getSong(nextState.params.songId));
  };

  return(
    <Provider store={store}>

      <Router history={hashHistory}>
        <Route
          path='/' component={AppContainer}
        >
          <IndexRoute
            component={Splash}
            onEnter={(n, r) => splashEnter(n, r)}/>
          <Route
            path='charts/top'
            component={Chart}
            onEnter={fetchTracks}
            onChange={fetchNewTracks}/>

            <Route path='upload' component={UploadContainer}/>
            <Route
              path=':userUrl/:songId'
              component={TrackDetailContainer}
              onEnter={fetchSong}/>
          </Route>
      </Router>

    </Provider>
  );
};

export default Root;
