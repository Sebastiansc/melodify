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

  // getImage(image) {
  //   var binary = '';
  //   var bytes = new Uint8Array(image.data);
  //   debugger;
  //   var len = bytes.byteLength;
  //   for (var i = 0; i < len; i++) {
  //       binary += String.fromCharCode( bytes[ i ] );
  //   }
  //   return 'data:' + image.mime + ';base64,' + window.btoa( binary );
  // }

  getImage(image) {
    var arrayBufferView = new Uint8Array(image.data);
    image.mime = image.mime || 'image/jpeg';
    var blob = new Blob([arrayBufferView], {type: image.mime});
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    return imageUrl;
  }

  // getBlobFromDataURI(e) {
  //   e = this.getImage(e);
  //   var t, n, i, r, o = [], s = e.split(",");
  //   for (
  //     t = s[0].indexOf("base64") > -1 ? window.atob(s[1]) : decodeURI(s[1]),
  //     n = /^.*?:(.*?);/.exec(e)[1],
  //     i = 0,
  //     r = t.length; r > i; i++) o[i] = t.charCodeAt(i);
  //   return new window.Blob([new Uint8Array(o)],{
  //       type: n
  //   });
  // }

  openUploadModal() {
    cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      $('.upload-overlay').removeClass('upload-loading');
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
        <div className='upload-overlay'></div>
        {component}
      </main>
    );
  }
}
