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
      uploaded: true
    };
  }

  getImage(image) {
    var arrayBuffer = image.data;
    var bytes = new Uint8Array(arrayBuffer);

    return "data:image/png;base64,"+btoa(unescape(encodeURIComponent(bytes)));
  }

  // getImage(msg) {
  //  var arrayBuffer = msg.data;
  //  var bytes = new Uint8Array(arrayBuffer);
  //  return "data:image/png;base64,"+this.encode(bytes);
  // }

  encode (input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
        chr1 = input[i++];
        // Not sure if the index
        chr2 = i < input.length ? input[i++] : Number.NaN;
        // checks are needed here
        chr3 = i < input.length ? input[i++] : Number.NaN;

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                  keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
  }

  openUploadModal() {
    cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {

        id3(track[0].secure_url, (errs, tags) => {
          this.setState({
            title: tags.title,
            audio_url: track[0].secure_url,
            artist: tags.artist,
            uploaded: true,
            cover_photo: this.getImage(tags.v2.image)
          });
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
