import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Deparment from './components/departments/department';

import './App.css';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        {/* Start App intro 
              And Route code  */}

        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/deparment" component={Deparment} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>

      </div>
    );
  }
}
export default App;
