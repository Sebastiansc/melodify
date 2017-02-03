import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser ) {
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

  Modal.setAppElement(document.body);
  window.path_history = [];
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
