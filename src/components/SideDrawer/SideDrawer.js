import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li><a href="#">HOME</a> </li>
                              <li> <a href="#">DPARTMENT</a></li>
                              <li><a href="#">CONTACT</a></li>
                              <li>
                                <a href="#">ABOUT</a>
                              </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
