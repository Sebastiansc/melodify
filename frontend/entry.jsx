import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';
// import Grade from 'grade-js';

document.addEventListener("DOMContentLoaded", () => {

  // window.addEventListener('load', function(){
  //   Grade(document.querySelectorAll('.gradient-wrap'));
  // });

  let store;
  if (window.currentUser) {
    store = configureStore(
      {
        session: {
        currentUser: {
          username: window.currentUser.username,
          id: window.currentUser.id,
          image_url: window.currentUser.image_url
        }
      }
    });
  } else {
    store = configureStore();
  }
  window.store = store;
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
