import React from 'react';
import TrackBanner from './track_banner';
import TrackInfo from './track_info';
import TrackDetailActions from './track_detail_actions';
import { Link } from 'react-router';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsContainer from '../comments/comments_container';

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

          <div className='about-left'>
            <div className='artist-cover'>
              <Link to='#'></Link>
            </div>
            <div className='td-artist-name'>
              <span>{track.author.username}</span>
            </div>
          </div>

          <div className='about-right'>
            <div
              className={
                `track-description ${track.description ? '' : 'undescribed'}`
              }>
              <span>
                {track.description || "No description given"}
              </span>
            </div>
            <CommentsContainer />
          </div>

          <div className='clearfix'></div>
        </div>

      </div>
    </section>
  </main>
);

export default TrackDetail;
