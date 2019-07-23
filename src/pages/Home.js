import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours.js';
import ReactSpaceImg from '../resources/images/react-background-space.jpg';
import ConstructionGif from '../resources/images/construction.gif';
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

const SectionOne = styled.div`
  background: black url(${ReactSpaceImg}) no-repeat 0px 0px;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`
const SectionTwo = styled.div`
  background-color: ${colour.primaryLighter}
  height: 100vh;
`

const Home = () => {
  return (
    <HomePageAnimation>
      <SectionOne>
        <PageTitle>My Playground</PageTitle>
        <PageSubTitle>My reference guide to all things React and technologies alongside</PageSubTitle>
      </SectionOne>
      <SectionTwo>
        {/* <PageTitle black>Under construction</PageTitle> */}
        <img style={{ paddingTop: '10rem', width: '20rem', height: '10rem' }} src={ConstructionGif} alt="under construction..." />
      </SectionTwo>
    </HomePageAnimation>
  );
}

export default Home;