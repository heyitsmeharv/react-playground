import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours.js';
import image from '../resources/images/react-background-space.jpg';
import image2 from '../resources/images/react-background-fade.jpg';
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
  // background-image: url(${image});
  background: black url(${image}) no-repeat 0px 45px;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`
const BackgroundTwo = styled.div`
  background-image: url(${image2});
  background-size: cover;
  height: 100vh;
`

const TextBlockContainer = styled.div`
  width: 100rem;
  height: 100rem;
`

const Text = styled.p`
  color: ${colour.white}
`

const Home = () => {
  return (
    <HomePageAnimation home="true">
      <BackgroundOne>
        <PageTitle home="true">React Playground</PageTitle>
        <PageSubTitle home="true">My reference guide to all things React and technologies alongside</PageSubTitle>
      </BackgroundOne>
      <BackgroundTwo>
      <TextBlockContainer>
        <Text>Text</Text>
      </TextBlockContainer>
      </BackgroundTwo>
    </HomePageAnimation>
  );
}

export default Home;
