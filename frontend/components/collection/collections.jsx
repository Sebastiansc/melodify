import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Collections extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $(`.collections-header a[href^="#${this.props.location.pathname}"]`)
      .addClass('active');
  }


  render(){
    return(
      <ul className='collections-header'>
        <li><Link to='you/collection'>Overview</Link></li>
        <li><Link to='you/likes'>Likes</Link></li>
        <li><Link to='you/history'>History</Link></li>
      </ul>
    );
  }
}
