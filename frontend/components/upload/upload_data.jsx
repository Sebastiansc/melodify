import React from 'react';

export default class UploadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'None',
      tags: '',
      description: '',
      title: this.props.title,
      artist: '',
      genresClass: ''
    };
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

  componentWillMount() {
    this.unselector = $('body').on('click', () => (
      this.setState({genresClass: ''}))
    );
  }

  componentWillUnmount() {
    $('body').off(this.unselector);
  }

  render() {
    return(
      <div className=''>
        <div className='upload-data-header'>
          <span>Track Details</span>
        </div>
        <div className='track-cover-wrapper'>
          <span className='track-cover'></span>
          <button className='track-image-upload'>
            <span>Update image</span>
          </button>
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
            <button className='genre' onClick={() => this.openGenres()}>
              {this.state.genre}
            </button>
            <ul className={`genres ${this.state.genresClass}`}
                onClick={e => this.selectGenre(e)}>
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
