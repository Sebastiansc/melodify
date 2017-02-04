import React from 'react';

import { Provider } from 'react-redux';

import { isEmpty } from 'lodash';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/home');
  };

  const _ensureLogin = (nextState, replace) => {
    const state = store.getState();
    if(!state.session.currentUser.id){
      replace('/');
      return;
    } else if (isEmpty(store.getState().photos)){

    }
  };

  const fetchUser = nextState => {
    if(store.getState().user.id !== Number(nextState.params.userId)){
    }
  };


  return(
    <Provider store={store}>

      <Router history={hashHistory}>
        <Route path='/' component={Splash}/>
        <Route path='home' component={App}/>
      </Router>

    </Provider>
  );
};

export default Root;
