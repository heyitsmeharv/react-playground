import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours.js';
import image from '../resources/images/react-background.jpg';
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

const BackgroundOne = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`
const BackgroundTwo = styled.div`
  background: ${colour.react}
  height: 100vh;
`

const Block = styled.div`
  width: 100%;
  height: 100px;
`

const Home = () => {
  return (
    <HomePageAnimation home="true">
      <BackgroundOne>
        <PageTitle home="true">React Playground</PageTitle>
        <PageSubTitle home="true">My reference guide to all things React and technologies alongside</PageSubTitle>
      </BackgroundOne>
      <BackgroundTwo>
        <Block/>
        <PageTitle home="true">React Playground</PageTitle>
        <PageSubTitle home="true">My reference guide to all things React and technologies alongside</PageSubTitle>
        <Block/>
        <Block/>
      </BackgroundTwo>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    </HomePageAnimation>
  );
}

export default Home;
