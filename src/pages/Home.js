import React from 'react';
import styled from 'styled-components';
import Page, { PageTitle, PageSubTitle } from '../components/Page';
import SlideInTop from '../animations/SlideInTop';
import SlideOutTop from '../animations/SlideOutTop';

const HomePageAnimation = styled(Page)`
&.page-enter {
  animation: ${SlideInTop} 0.5s forwards;
}
&.page-exit {
  animation: ${SlideOutTop} 0.5s forwards;
}
`;

const Home = () => {
  return (
    <HomePageAnimation home="true">
      <PageTitle home="true">React Playground</PageTitle>
      <PageSubTitle home="true">My reference guide to all things React and technologies alongside</PageSubTitle>
    </HomePageAnimation>
  );
}

export default Home;
