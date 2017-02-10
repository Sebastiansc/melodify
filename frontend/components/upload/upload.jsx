import React from 'react';
import StartUpload from './start_upload';
import UploadData from './upload_data';
import { values } from 'lodash';

function secureUrl(url) {
  return `${url.slice(0, 4)}s${url.slice(4)}`;
}

function normalizeUrl(url) {
  secureUrl(url).split("/c_limit,h_60,w_90").join('');
}

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cover_photo: '',
      audio_url: ''
    };
  }

  openUploadModal() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {
        this.setState({
          title: track[0].original_filename,
          cover_photo: normalizeUrl(track[0].thumbnail_url),
          audio_url: track[0].secure_url
        });
      }
    });
  }

  render(){
    return(
      <main className='upload-content'>
        <StartUpload
          openUploadModal={() => this.openUploadModal()}
          user={this.props.user}/>
        <UploadData data={this.state} createSong={this.props.createSong}/>
      </main>
    );
  }
}
