import React from 'react';
import { Provider } from 'react-redux';
import { isEmpty } from 'lodash';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// LOCAL COMPONENTS
import AppContainer from './app_container';
import Chart from './charts/chart';
import Collections from './collection/collections';
import Likes from './collection/likes';
import Overview from './collection/overview';
import Plays from './collection/plays';
import Splash from './splash/splash';
import TrackDetailContainer from './track/track_detail_container';
import UploadContainer from './upload/upload_container';
// UTIL AND METHODS
import { fetchComments } from '../actions/comment_actions';
import { getProgress } from '../actions/playing_actions';
import { getPlays } from '../actions/listen_history_actions';
import { getLikes } from '../actions/liked_tracks_actions';
import { getSong, clearSong } from '../actions/song_actions';
import { getTracks } from '../actions/tracks_actions';

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
    toTop();
  };

  const fetchNewTracks = nextState => {
    if (isEmpty(nextState.location.query)) return;
    fetchTracks();
  };

  const sync = nextState => {

    if (store.getState().playing.songUrl == nextState.params.songUrl) {
      store.dispatch(getProgress());
    }
  };

  const fetchSong = nextState => {
    sync(nextState);
    store.dispatch(getSong(
      nextState.params.ownerUrl,
      nextState.params.songUrl)
    );
    store.dispatch(fetchComments(
      nextState.params.ownerUrl,
      nextState.params.songUrl)
    );
    toTop();
  };

  const dropSongFromState = nextState => {
    store.dispatch(clearSong());
  };

  const toTop = () => {
    window.scroll(0, 0);
  };

  const fetchLikes = nextState => {
    store.dispatch(getLikes());
  };

  const fetchPlays = nextState => {
    store.dispatch(getPlays());
  };

  const getCollections = nextState => {
    fetchLikes();
    fetchPlays();
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path='/' component={AppContainer}
        >
          <IndexRoute
            component={Splash}
            onEnter={splashEnter}
          />

          <Route
            path='charts/top'
            component={Chart}
            onEnter={fetchTracks}
            onChange={fetchNewTracks}
          />

        <Route path='you' component={Collections}>
          <Route
            path='collection'
            component={Overview}
            onEnter={getCollections}
          />
          <Route
            path='likes'
            component={Likes}
            onEnter={fetchLikes}
          />
          <Route
            path='history'
            component={Plays}
            onEnter={fetchPlays}
          />
        </Route>

          <Route path='upload' component={UploadContainer}/>
          <Route
            path=':ownerUrl/:songUrl'
            component={TrackDetailContainer}
            onEnter={fetchSong}
            onLeave={dropSongFromState}
          />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
