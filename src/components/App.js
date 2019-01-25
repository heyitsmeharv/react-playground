import '../resources/styles/styles.css';
import '../resources/styles/reset.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import Wrapper, { SideBarWrapper } from './Wrapper';
import SideBar from './SideBar';
import HomePage from '../pages/HomePage';
import Introduction from '../pages/routes/Intro';
import AboutReact from '../pages/routes/AboutReact';
import AboutRouting from '../pages/routes/AboutRouting';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header/>
          {/* <SideBarWrapper>
            <SideBar/> */}
          <Route
          render={({ location }) => {
            return (
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={300}
                classNames="page"
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  {/* <Route component={SideBar}/> */}
                  <Route exact path="/playground" component={Introduction}/>
                  <Route exact path="/playground/react" component={AboutReact}/>
                  <Route exact path="/playground/react-router" component={AboutRouting}/>
                  <Route exact path="/playground/styled-components" component={Introduction}/>
                  <Route exact path="/playground/testing" component={Introduction}/>
                  <Route exact path="/playground/api-requests" component={Introduction}/>
                  <Route exact path="/playground/webpack" component={Introduction}/>
                  <Route exact path="/playground/animation" component={Introduction}/>
                  <Route exact path="/playground/grid-layout" component={Introduction}/>
                  <Route exact path="/playground/icons" component={Introduction}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
          }}
          />
          {/* </SideBarWrapper> */}
        </Wrapper>
      </Router>
    );
  }
}

export default App;