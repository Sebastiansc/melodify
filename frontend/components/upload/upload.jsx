import React from 'react';
import StartUpload from './start_upload';
import { values } from 'lodash';

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  openUploadModal() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, track) => {
      if(!values(errors).length) {
        debugger;
      }
    });
  }

  render(){
    return(
      <StartUpload
        openUploadModal={() => this.openUploadModal()}
        user={this.props.user}/>
    );
  }
}
