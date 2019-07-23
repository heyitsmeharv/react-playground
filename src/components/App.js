import '../resources/styles/styles.css';
import '../resources/styles/reset.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js'
import { AppWrap } from './Wrapper';
// import TopNavBar from './TopNavBar';
import Navigation from '../pages/Navigation';
import { NavBarButton } from './Button';
import Toggle from './Toggle';
import HomePage from '../pages/Home';
import HowTo from '../pages/HowTo';
import Examples from '../pages/Examples.js';
import Playground from '../pages/Playground';
// import AboutReact from '../pages/routes/AboutReact';
// import AboutRouting from '../pages/routes/AboutRouting';
// import AboutSpinners from '../pages/routes/AboutSpinners';
// import AboutNotifications from '../pages/routes/AboutNotifications';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOpen: true
    };
  }

  handleOnNavBarVisibility = () => {
    const { navBarOpen } = this.state;
    this.setState({ navBarOpen: !navBarOpen });
  }


  render() {
    const { navBarOpen } = this.state;
    return (
      <Router>
        <AppWrap>
            <Route path="/" component={Navigation}/>
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
                        <Route exact path="/howto" component={HowTo} />
                        <Route exact path="/examples" component={Examples} />
                        <Route exact path="/playground" component={Playground} />
                        {/*<Route exact path="/snippets/react" component={AboutReact} />
                        <Route exact path="/snippets/react-loaders" component={AboutSpinners} />
                        <Route exact path="/snippets/react-notifications" component={AboutNotifications} /> */}
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
        </AppWrap>
      </Router>
    );
  }
}

export default App;