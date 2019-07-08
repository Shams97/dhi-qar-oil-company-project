import React, { Component } from 'react';
import coWorker from './assets/co-work.jpeg';
import login from './components/LogIn/logIn'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '14px'}}>
          <div className="container">
                    <img  id="workers"src={coWorker} />
                          <div className="sub_container">
                              <p className="title">For the best file Modification</p>
                              <p className="sub_title">Local website for modify ﬁles for our employees  This service make ofﬁce work more easy </p>
                              <button className="submit__Button"  type='submit'>Log In</button>
                          </div> 
                          </div>
        </main>
        
      </div>
    );
  }
}
export default App;
