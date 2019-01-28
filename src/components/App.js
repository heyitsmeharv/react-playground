import '../resources/styles/styles.css';
import '../resources/styles/reset.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import Wrapper, { FlexWrapper } from './Wrapper';
import SideBar from './SideBar';
import HomePage from '../pages/HomePage';
import AboutReact from '../pages/routes/AboutReact';
import AboutRouting from '../pages/routes/AboutRouting';
import AboutSpinners from '../pages/routes/AboutSpinners';
import AboutNotifications from '../pages/routes/AboutNotifications';


class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <FlexWrapper>
          <Route path="/playground" component={SideBar}/>
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
                      <Route exact path="/playground/react" component={AboutReact} />
                      <Route exact path="/playground/react-router" component={AboutRouting} />
                      <Route exact path="/playground/styled-components" component={AboutReact} />
                      <Route exact path="/playground/testing" component={AboutReact} />
                      <Route exact path="/playground/api-requests" component={AboutReact} />
                      <Route exact path="/playground/webpack" component={AboutReact} />
                      <Route exact path="/playground/animation" component={AboutReact} />
                      <Route exact path="/playground/grid-layout" component={AboutReact} />
                      <Route exact path="/playground/icons" component={AboutReact} />
                      <Route exact path="/playground/react-loaders" component={AboutSpinners} />
                      <Route exact path="/playground/react-notifications" component={AboutNotifications} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
          </FlexWrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;