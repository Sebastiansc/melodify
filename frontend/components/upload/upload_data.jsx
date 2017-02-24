import React from 'react';
import { values } from 'lodash';

export default class UploadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'None',
      tags: '',
      description: '',
      url: '',
      title: this.props.data.title,
      artist: this.props.data.artist,
      cover_photo: this.props.data.cover_photo,
    };
  }

  componentDidMount() {
    this.unselector = $('body').click(() => {
      $('.genres').removeClass('genres-selecting');
    });

    $('.genre').click(e => {
      e.stopPropagation();
      this.openGenres();
    });

    $('.url-input').width(
      $('.custom-url-wrapper').width() - ($('.custom-url').width() + 36)
    );

    this.setState({ url: this.customUrl()});
  }

  customUrl() {
    return this.props.data.title
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/ +/g, ' ')
            .replace(/\s/g, '-');
  }

  componentWillUnmount() {
    $('body').off('click', this.unselector);
  }

  openGenres(e) {
    $('.genres').toggleClass('genres-selecting');
  }

  uncodedText(text) {
    // Remove non unicode characters
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
    this.props.createSong(song);
    this.props.restart();
  }

  openImageWidget() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
    (errors, image) => {
      if(!values(errors).length) {
        this.setState({cover_photo: image[0].secure_url});
      }
    });
  }

  focusUrlInput() {
    $('.url-input').focus();
    $('.url-input-toggle').addClass('hide');
  }


  render() {
    return(
      <div className=''>
        <div className='upload-data-details'>
          <span>Ready. Click save to post this track.</span>
        </div>
        <div className='upload-data-bar'></div>
        <div className='upload-data-header'>
          <span>Track Details</span>
        </div>
        <div
          className='track-cover-wrapper'
          style={{backgroundImage: `url(${this.state.cover_photo})`}}>
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

          <div className='custom-url-wrapper'>
            <span
              className='custom-url'>{`melodify.com/${this.props.user.url}/`}
            </span>
            <input
              className='url-input'
              id='url-input'
              onBlur={() => $('.url-input-toggle').removeClass('hide')}
              onFocus={() => $('.url-input-toggle').addClass('hide')}
              onChange={e => this.update('url', e)}
              value={this.state.url}>
            </input>
            <button
              className='url-input-toggle'
              onClick={() => this.focusUrlInput()}>
            </button>
          </div>

          <label>Artist</label>
          <div className='track-upload-artist-field'>
            <input
              type='text'
              placeholder="Who's your track by"
              onChange={e => this.update('artist', e)}
              value={this.state.artist}>
            </input>
          </div>

          <label>Genre</label>
          <div className='track-upload-genre-field'>
            <button className='genre'>
              {this.state.genre}
            </button>
            <ul className={`genres`}
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
