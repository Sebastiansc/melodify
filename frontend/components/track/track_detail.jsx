import React from 'react';
import TrackBanner from './track_banner';
import CommentsContainer from '../comments/comments_container';

const TrackDetail = ({track, nowPlaying}) => (
  <main className='track-detail'>
    <TrackBanner track={track} nowPlaying={nowPlaying}/>
    <section className='track-detail-actions'>
      <CommentsContainer />
    </section>
  </main>
);

export default TrackDetail;
