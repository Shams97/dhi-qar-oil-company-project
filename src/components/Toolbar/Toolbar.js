import React from 'react';
import path from '../../assets/path.png';
import logo from '../../assets/typo-logo.png';
import coWorker from '../../assets/co-work.jpeg';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
          <img id="img1" src={path} />
          <nav className="toolbar__navigation">
              <div className="toolbar__toggle-button">
                  <DrawerToggleButton click={props.drawerClickHandler} />
              </div>
       <div className="toolbar__logo"><a href="#">
         <img src={logo} className="logo_img" /></a></div>
              <div className="spacer" />
          {/* <img id="img1" src={path} /> */}

              <div className="toolbar_navigation-items">
                  <ul>
                          <li><a href="#">HOME</a> </li>
                              <li> <a href="#">DPARTMENT</a></li>
                              <li><a href="#">CONTACT</a></li>
                              <li>
                                <a href="#">ABOUT</a>
                              </li>
                            </ul>
              
              </div>
          </nav>

  </header>
);

export default toolbar;
