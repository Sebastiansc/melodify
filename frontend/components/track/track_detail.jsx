import React from 'react';
import TrackBanner from './track_banner';
import TrackInfo from './track_info';
import TrackDetailActions from './track_detail_actions';
import CommentFormContainer from '../comments/comment_form_container';

const TrackDetail = ({track, nowPlaying}) => (
  <main className='track-detail'>
    <TrackBanner track={track} nowPlaying={nowPlaying}/>
    <section className='track-detail-actions'>
      <div className='charts-page-container comment-container'>
        <div className='top-level-content'>
          <CommentFormContainer />
          <TrackDetailActions track={track}/>
        </div>
        <div className='track-detail-main-content'>
          <TrackInfo track={track} />
        </div>
      </div>
    </section>
  </main>
);

export default TrackDetail;
