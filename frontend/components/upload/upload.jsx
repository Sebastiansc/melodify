import React from 'react';
import StartUpload from './start_upload';
import UploadData from './upload_data';
import { values } from 'lodash';
import id3 from 'id3js';

function secureUrl(url) {
  return `${url.slice(0, 4)}s${url.slice(4)}`;
}

function normalizeUrl(url) {
  return secureUrl(url).split("/c_limit,h_60,w_90").join('');
}

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cover_photo: '',
      audio_url: '',
      artist: '',
      uploaded: false
    };
  }

  getImage(track, tags) {
    const reader = new FileReader();
    reader.onload = () => {
      // do stuff with `data URI` of `image.data`
      debugger;
      this.setState({
        title: tags.title,
        audio_url: track[0].secure_url,
        artist: tags.artist,
        uploaded: true,
        cover_photo: reader.result
      });
    };
    const image = tags.v2.image;
    reader.readAsDataURL(new Blob([image.data], {type:image.mime}));
  }


  openUploadModal() {
    cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {

        id3(track[0].secure_url, (errs, tags) => {
          this.getImage(track, tags);
        });

      }
    });
  }

  render(){
    let component;
    let klass;
    if (this.state.uploaded) {
      component = <UploadData
                    data={this.state}
                    createSong={this.props.createSong}/>;
      klass = 'animated slideInDown';
    } else {
      component = <StartUpload
                    openUploadModal={() => this.openUploadModal()}
                    user={this.props.user}/>;
    }
    return(
      <main className={`upload-content ${klass}`}>
        {component}
      </main>
    );
  }
}
