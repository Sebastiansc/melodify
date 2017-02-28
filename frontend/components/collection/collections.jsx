import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Collections extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentWillReceiveProps = this.highlight;
  }

  highlight(props) {
    props = props || this.props;
    $('.collections-header a').removeClass('active');
    $(`.collections-header a[href^="#${props.location.pathname}"]`)
      .addClass('active');
  }


  render(){
    return(
    <div>
      <ul className='collections-header'>
        <li><Link to='/you/collection'>Overview</Link></li>
        <li><Link to='/you/likes'>Likes</Link></li>
        <li><Link to='/you/history'>History</Link></li>
      </ul>
      {this.props.children}
    </div>
    );
  }
}
