import React from 'react';

export default class UploadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      tags: '',
      description: '',
      title: '',
      artist: '',
    };
  }

  render() {
    return(
      <div className=''>
        <div className='upload-data-header'>
          <span>Track Details</span>
        </div>
        <div className='track-cover-wrapper'>
          <span className='track-cover'></span>
          <button className='track-image-upload'></button>
        </div>

        <section className='upload-data-fields'>
          <label>Title <span className='asterisk'>*</span></label>
          <div className='track-upload-text-field'>
            <input type='text' placeholder='Name your track'></input>
          </div>

          <label>Artist</label>
          <div className='track-upload-artist-field'>
            <input type='text' placeholder="Who's your track by"></input>
          </div>

          <label>Genre</label>
          <div className='track-upload-genre-field'>

          </div>

          <label>Additional tags</label>
          <div className='track-upload-tag-field'>
            <input
              type='text'
              placeholder='Add tags to better describe your track'>
            </input>
          </div>

          <label>Description</label>
          <div className='track-upload-description-field'>
            <textarea placeholder='Describe your track'></textarea>
          </div>
        </section>
        <div className='clearfix'></div>

        <div className='active-upload-wrapper'>
          <p className='legend'>
            <span className='asterisk'>*</span> Required Fields
          </p>
          <button className='upload-save'>Save</button>
        </div>
      </div>
    );
  }
}
