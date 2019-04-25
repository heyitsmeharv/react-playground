import React from 'react';
import styled from 'styled-components';
import Page, { PageHeader } from '../components/Page';
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
        <PageHeader home="true">Home Page</PageHeader>
        {/* <Paragraph>This is a personal project to demonstrate my understanding of React and the stack of technologies that can be used along side.</Paragraph> */}
          <Paragraph>My Playground for testing out new and cool React tech and also helpful references.</Paragraph>
        <NavButton home="true" to="/playground/react">Playground <FiArrowRight /></NavButton>
      </Page>
    </HomePageAnimation>
  );
}

export default HomePage;
