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
  //
  // getImage(image) {
  //   var binary = '';
  //   var bytes = new Uint8Array(image.data);
  //   var len = bytes.byteLength;
  //   for (var i = 0; i < len; i++) {
  //       binary += String.fromCharCode( bytes[ i ] );
  //   }
  //   return 'data:image/jpeg;base64,' + window.btoa( binary );
  // }

  getImage(image) {
    const e = image.data;
    for (var t = e.length, n = new Array(t), i = 0; t > i; i++) {
      n[i] = String.fromCharCode(e[i]);
    }
    return "data:" + image.format + ";base64," + window.btoa(n.join(""));
  }

  openUploadModal() {
    cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {

        jsmediatags.read(track[0].secure_url, {
          onSuccess: function(tag) {
            console.log(tag);
          },
          onError: function(error) {
            console.log(':(', error.type, error.info);
          }
        });

        // id3(track[0].secure_url, (errs, tags) => {
        //   this.setState({
        //     title: tags.title,
        //     audio_url: track[0].secure_url,
        //     artist: tags.artist,
        //     uploaded: true,
        //     cover_photo: tags.v2.image
        //   });
        // });

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
