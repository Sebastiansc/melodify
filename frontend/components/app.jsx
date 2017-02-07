import React from 'react';
import NavBarContainer from './shared/nav_bar_container';
import PlayerContainer from './shared/player_container';

const App = ({ children }) => {
  return (
    <div className='body-wrapper'>
      <NavBarContainer/>
      {children}
      <PlayerContainer/>
    </div>
  );
};

export default App;
