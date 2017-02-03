import React from 'react';
import NavBarContainer from './shared/nav_bar_container';
import Footer from './shared/footer';

const App = ({ children }) => {
  return (
    <div>
      <NavBarContainer/>
      {children}
    </div>
  );
};

export default App;
