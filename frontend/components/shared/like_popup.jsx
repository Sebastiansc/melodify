import React from 'react';
import { Link } from 'react-router';

export default class LikePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {klass: ''};
  }

  componentWillReceiveProps(props) {
    if (props.track.id) {
      clearTimeout(this.counter);
      this.counter = setTimeout(() => {
        this.setState({ klass: ''});
      }, 15000);
      this.setState({ klass: 'like-popup-up'});
    } else {
      this.setState({ klass: 'like-popup-bye'});
    }
  }

  close() {
    clearTimeout(this.counter);
    this.setState({ klass: 'like-popup-bye'});
  }

  render() {
    if (!this.props.track.id) return null;
    return(
      <div className={`like-popup ${this.state.klass}`}
           style={{opacity: this.state.opacity}}>
        <div
          className='like-popup-cover'
          style={{backgroundImage: `url('${this.props.track.cover_photo}')`}}>
        </div>
        <div className='like-popup-text-info'>
          <span className='like-popup-artist'>
            {this.props.track.title}
          </span>
          <span>was saved to <Link to='you/likes'>your Collection</Link></span>
        </div>
        <button className='like-popup-close' onClick={() => this.close()}>
          <span>x</span>
        </button>
      </div>
    );
  }
}
