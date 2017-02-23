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

  componentWillMount() {
    $(document).on('cloudinarywidgetclosed', function(e, data) {
      $('.upload-overlay').addClass('upload-loading');
    });
    $(document).on('cloudinarywidgetsuccess', function(e, data) {
      $('.upload-overlay').addClass('upload-loading');
    });
  }

  getImage(image) {
    // ID3 image is represented as a blob in an array
    let binary = '';
    const bytes = new Uint8Array(image.data);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return "data:" + image.format + ";base64," + window.btoa(binary);
  }


  openUploadModal() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      $('.upload-overlay').removeClass('upload-loading');
      if(!values(errors).length) {
        // NOTE: Remember that it was necessary to remove some source code from
        // jsmediatags to get it to work.
        jsmediatags.read(track[0].secure_url, {
          onSuccess: (tag) => {
            this.setState({
              title: tag.tags.title,
              audio_url: track[0].secure_url,
              artist: tag.tags.artist,
              uploaded: true,
              cover_photo: this.getImage(tag.tags.picture)
            });
          },
          onError: function(error) {
            alert("Sorry, something went wrong with the file upload. Please" +
                  "refresh your browser");
          }
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
        <div className='upload-overlay'></div>
        {component}
      </main>
    );
  }
}
