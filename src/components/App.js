import '../resources/styles/styles.css';
import '../resources/styles/reset.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import Wrapper, { FlexWrapper } from './Wrapper';
import SideBar from './SideBar';
import HomePage from '../pages/HomePage';
import Playground from '../pages/Playground';
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
          <Wrapper>
          <Route path="/snippets" component={SideBar}/>
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={300}
                    classNames="page"
                    key={location.key}
                    unmountOnExit
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/playground" component={Playground} />
                      <Route exact path="/snippets/react" component={AboutReact} />
                      {/* <Route exact path="/snippets/react-router" component={AboutRouting} />
                      <Route exact path="/snippets/styled-components" component={AboutReact} />
                      <Route exact path="/snippets/testing" component={AboutReact} />
                      <Route exact path="/snippets/api-requests" component={AboutReact} />
                      <Route exact path="/snippets/webpack" component={AboutReact} />
                      <Route exact path="/snippets/animation" component={AboutReact} />
                      <Route exact path="/snippets/grid-layout" component={AboutReact} />
                      <Route exact path="/snippets/icons" component={AboutReact} /> */}
                      <Route exact path="/snippets/react-loaders" component={AboutSpinners} />
                      <Route exact path="/snippets/react-notifications" component={AboutNotifications} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
          </Wrapper>
        </Wrapper>
      </Router>
    );
  }
}

export default App;