import React from 'react';
import { Provider } from 'react-redux';
import { isEmpty } from 'lodash';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// LOCAL COMPONENTS
import AppContainer from './app_container';
import Chart from './charts/chart';
import Splash from './splash/splash';
import UploadContainer from './upload/upload_container';
// UTIL AND METHODS
import { getTracks } from '../actions/tracks_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/charts/top');
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


  return(
    <Provider store={store}>

      <Router history={hashHistory}>
        <Route
          path='/' component={AppContainer}
          onEnter={n => fetchTracks(n)}
        >
        <IndexRoute
          component={Splash}
          onEnter={(n, r) => _redirectIfLoggedIn(n, r)}/>
        <Route
          path='charts/top'
          component={Chart}/>

          <Route path='upload' component={UploadContainer}/>
        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
