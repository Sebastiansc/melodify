import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {

  window.photoUrl = "https://res.cloudinary.com/flikr/image/upload/v1486934639/avatars-000292048508-r656e6-t120x120_eotdip.jpg";

  $.fn.extend({
    animateCss: function (animationName, onEnd) {
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, () => {
            $(this).removeClass('animated ' + animationName);
            if (onEnd) onEnd();
        });
    }
  });


  let store;
  if (window.currentUser) {
    store = configureStore(
      {
        session: {
        currentUser: {
          username: window.currentUser.username,
          id: window.currentUser.id,
          url: window.currentUser.url,
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
