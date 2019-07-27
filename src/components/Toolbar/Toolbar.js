import React from 'react';
import path from '../../assets/path.png';
import logo from '../../assets/typo-logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { Link } from 'react-router-dom';

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

      <div className="toolbar_navigation-items">

        <ul>
          <li>  <Link to="/">HOME</Link></li>
          <li>  <Link to="/deparment">DEPARTMENT</Link></li>
          <li>  <Link to="/contact">CONTACT</Link></li>
          <li>  <Link to="/about">ABOUT</Link></li>

        </ul>
      </div>
    </nav>

  </header>
);

export default toolbar;
