import React from 'react';

export default class UploadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Info</h1>
        <div className='track-cover-wrapper'>
          <span className='track-cover'></span>
          <button className='track-image-upload'></button>
        </div>

        <section>
          <label>Title</label>
          <div className='track-upload-text-field'>
            <input type='text' placeholder='Name your track'></input>
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

        <div className='active-upload-wrapper'>
          <p className='legend'>Required Fields</p>
          <button className='upload-save'>Save</button>
        </div>
      </div>
    );
  }
}
