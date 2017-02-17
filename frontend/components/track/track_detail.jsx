import React from 'react';
import TrackBanner from './track_banner';
import CommentsContainer from '../comments/comments_container';

const TrackDetail = ({track}) => (
  <main className='track-detail'>
    <TrackBanner track={track}/>
    <section className='track-detail-actions'>
      <CommentsContainer />
    </section>
  </main>
);

export default TrackDetail;
