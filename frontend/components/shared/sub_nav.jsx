import React from 'react';
import { Link } from 'react-router';

const SubNav = () => (
  <nav className="sub-nav">
    <div>
      <ul>
        <li><Link to='home'>All Activity</Link></li>
        <li><Link to='home'>Explore</Link></li>
        <li><Link to='home/trending'>Trending</Link></li>
      </ul>
    </div>
  </nav>
);

export default SubNav;
