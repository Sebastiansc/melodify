import React from 'react';
import SessionButtons from '../session/buttons';


const StartUpload = ({user, openUploadModal}) => {
  if (user.id) {
    return(
      <div className=''>
        <h1>Upload your music and audio to Melodify</h1>
        <div className='upload-actions'>
          <button
             className='upload-file'
             onClick={() => openUploadModal()}>
             Choose a file to upload
           </button>
        </div>
      </div>
    );
  } else {
    return(
      <div className=''>
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
      </div>
    );
  }
};

export default StartUpload;
