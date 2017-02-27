import React from 'react';
// import CollectionItem from './collection_item';
import TrackContainer from '../shared/track_container';

// idx might not work as key. request random key from parent;
// size: amount of items to show

export default class Collection extends React.Component{
  constructor() {
    super();
    this.componentDidMount = this.componentWillReceiveProps = this.setExtras;
    this.state = { extras: [] };
  }

  setExtras(props) {
    props = props || this.props;
    let size = props.size - props.tracks.length;
    const extras = size < 0 ? 0 : size;
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push('');
    }
    this.setState({ extras: arr });
  }

  play(trackUrl) {
    this.props.nowPlaying(trackUrl, this.props.tracks);
  }

  render() {
    if (this.props.headerText === 'Likes') {
      window.that = this;
    } else {
      window.there = this;
    }

    return(
      <div className='collection-wrapper'>
        <div className='collection-header'>
          <span>{this.props.headerText}</span>
        </div>
        <ul className='trending'>
          {this.props.tracks.slice(0, this.props.size).map( (track, idx) => (
            <TrackContainer
              klass='trending-item collection-item'
              play={ trackUrl => this.play(trackUrl)}
              track={track}
              key={idx}/>
          ))}
          {this.state.extras.map( (_ ,idx) => (
            <li className='trending-item' key={idx}>
              <div className='empty-box'></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
