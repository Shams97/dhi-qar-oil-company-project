import React from 'react';
import './SideDrawer.css';
import  {Link} from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        {/* <li><a href="#">HOME</a> </li>
                              <li> <a href="#">DPARTMENT</a></li>
                              <li><a href="#">CONTACT</a></li>
                              <li>
                                <a href="#">ABOUT</a>
                              </li> */}


        <li>  <Link to="/">Home</Link></li>
        <li>  <Link to="/deparment">DEPARTMENT</Link></li>
        <li>  <Link to="/contact">CONTACT</Link></li>
        <li>  <Link to="/about">ABOUT</Link></li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
