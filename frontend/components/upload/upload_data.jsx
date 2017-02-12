import React from 'react';
import { values } from 'lodash';

export default class UploadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'None',
      tags: '',
      description: '',
      title: this.props.data.title,
      artist: '',
      cover_photo: '',
      genresClass: ''
    };
  }

  componentWillMount() {
    this.unselector = $('body').on('click', () => (
      this.setState({genresClass: ''}))
    );
  }

  componentWillUnmount() {
    $('body').off(this.unselector);
  }

  openGenres() {
    this.setState({genresClass: 'genres-selecting'});
  }

  uncodedText(text) {
    while (text.includes('amp')) {
      text = text.replace('amp;', '');
    }
    return text;
  }

  selectGenre(e) {
    if (e.target.tagName === 'LI') {
      this.setState({
        genre: this.uncodedText(e.target.innerHTML),
        genresClass: ''});
    }
  }

  update(field, e) {
    this.setState({[field]: e.currentTarget.value });
  }

  formatUrl(url) {
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_120/${tailUrl}`;
  }

  submit() {
    const song = {
      artist: this.state.artist,
      description: this.state.description,
      title: this.state.title,
      cover_photo: this.state.cover_photo,
      audio_url: this.props.data.audio_url,
      genre: this.state.genre,
      thumbnail: this.formatUrl(this.state.cover_photo)
    };
    debugger;
    this.props.createSong(song);
  }

  openImageWidget() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, image) => {
      if(!values(errors).length) {
        this.setState({cover_photo: image[0].secure_url});
      }
    });
  }


  render() {
    window.that = this;
    return(
      <div className=''>
        <div className='upload-data-header'>
          <span>Track Details</span>
        </div>
        <div
          className='track-cover-wrapper'
          style={{backgroundImage: `url('${this.state.cover_photo}')`}}>
          <span className='track-cover'></span>
          <button
            className='track-image-upload'
            onClick={() => this.openImageWidget()}>
            <span>Update image</span>
          </button>
        </div>

        <section className='upload-data-fields'>
          <label>Title <span className='asterisk'>*</span></label>
          <div className='track-upload-text-field'>
            <input
              type='text'
              placeholder='Name your track'
              onChange={e => this.update('title', e)}
              value={this.state.title}>
            </input>
          </div>

          <label>Artist</label>
          <div className='track-upload-artist-field'>
            <input
              type='text'
              placeholder="Who's your track by"
              onChange={e => this.update('artist', e)}>
            </input>
          </div>

          <label>Genre</label>
          <div className='track-upload-genre-field'>
            <button className='genre' onClick={() => this.openGenres()}>
              {this.state.genre}
            </button>
            <ul className={`genres ${this.state.genresClass}`}
                onClick={e => this.selectGenre(e)}
                onChange={e => this.update('genre', e)}>
              <li>None</li>
              <li>Classical</li>
              <li>Country</li>
              <li>Dance & EDM</li>
              <li>Disco</li>
              <li>Electronic</li>
              <li>Folk</li>
              <li>Hip-Hop & Rap</li>
              <li>Indie</li>
              <li>Latin</li>
              <li>Pop</li>
              <li>R&B & Soul</li>
              <li>Reggae</li>
              <li>Reggaeton</li>
              <li>Reggaeton</li>
              <li>Rock</li>
            </ul>
          </div>

          <label>Additional tags</label>
          <div className='track-upload-tag-field'>
            <input
              type='text'
              placeholder='Add tags to better describe your track'
              onChange={e => this.update('tags', e)}>
            </input>
          </div>

          <label>Description</label>
          <div className='track-upload-description-field'>
            <textarea
              placeholder='Describe your track'
              onChange={e => this.update('description', e)}>
            </textarea>
          </div>
        </section>
        <div className='clearfix'></div>

        <div className='active-upload-wrapper'>
          <p className='legend'>
            <span className='asterisk'>*</span> Required Fields
          </p>
          <button className='upload-save' onClick={() => this.submit()}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
