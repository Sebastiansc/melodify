import React from 'react';
import SessionButtons from '../session/buttons';
import { values } from 'lodash';

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
  }

  openUploadModal() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {
        
      }
    });
  }

  render(){
    if (this.props.user.id) {
      return(
        <main className='upload-content'>
          <h1>Upload your music and audio to Melodify</h1>
          <div className='upload-actions'>
            <button
               className='upload-file'
               onClick={() => this.openUploadModal()}>
               Choose a file to upload
             </button>
          </div>
        </main>
      );
    } else {
      return(
        <main className='upload-content'>
          <h1>Make music or create audio? Share it on Melodify</h1>
          <h2 className='upload-instructions'>
            Create a free Melodify account to get started
          </h2>
          <div className='upload-pitch'>
            <div className='upload-feature'>
              <figure className='waves upload-feature-image'></figure>
              <h2>Upload your tracks</h2>
              <p>Enjoy many hours for your uploads. Enough for multiple albums</p>
            </div>
            <div className='upload-feature'>
              <figure className='comment-bubble upload-feature-image'></figure>
              <h2>Connect with fans</h2>
              <p>Have your content reach new people. Connect with fans via comments and messages</p>
            </div>
          </div>
          <SessionButtons className='upload-session'/>
        </main>
      );
    }
  }
}
