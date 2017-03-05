import React from 'react';
import SoundItemContainer from '../sound_item/sound_item_container';

export default class HistoryItem extends React.Component {
  play(e) {
    this.player.getWrappedInstance().togglePlay(e);
  }

  render() {
    return(
      <div className='charts-like-track' onClick={e => this.play(e)}>
        <SoundItemContainer
          klass="like-history-item chart-item"
          track={this.props.track}
          ref={player => this.player = player}
          play={this.props.play}/>
      </div>
    );
    }
}
