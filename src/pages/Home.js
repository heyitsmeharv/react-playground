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
  background: black url(${image}) no-repeat 0px 0px;
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
  width: 60rem;
  height: 30rem;
  margin-left: 2rem;
  border: solid 1px transparent;

  ol {
    font-size: 5rem;
    color: ${colour.react};
    margin-left: 5rem;
    margin-top: 2rem;
    float: left;
    list-style: disc;

    li {
      // float: left;
      font-size: 4rem;
    }
  }
`

const TextBlockTitle = styled.h1`
  color: ${colour.white};
  margin-right: 30rem;
  margin-top: 2rem;
  font-size: 5rem;
`

const Home = () => {
  return (
    <HomePageAnimation home="true">
      <BackgroundOne>
        <PageTitle home="true">My Playground</PageTitle>
        <PageSubTitle home="true">My reference guide to all things React and technologies alongside</PageSubTitle>
      </BackgroundOne>
      <BackgroundTwo>
      <TextBlockContainer>
        <TextBlockTitle>Tech Covered:</TextBlockTitle>
        <ol>
          <li>React Life-Cycle</li>
          <li>Props and State</li>
          <li>Styled Components</li>
          <li>React Router</li>
          <li>Animation</li>
          <li>Webpack</li>
        </ol>
      </TextBlockContainer>
      </BackgroundTwo>
    </HomePageAnimation>
  );
}

export default Home;
