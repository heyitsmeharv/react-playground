import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import { NavButton } from '../components/Button';
import HomePageAnimation from '../animations/HomePageAnimation';
import { FiArrowRight } from 'react-icons/fi';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
  line-height: 12.2;
`

const HomePage = () => {
  return (
    <HomePageAnimation>
      <Page>
        <h2>Home Page</h2>
        <Paragraph>This is a personal project to demonstrate my understanding of React and the stack of technologies that can be used along side.</Paragraph>
        <NavButton home="true" to="/playground">Playground <FiArrowRight /></NavButton>
      </Page>
    </HomePageAnimation>
  );
}

export default HomePage;
