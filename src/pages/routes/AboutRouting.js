import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';
import { SideBarWrapper } from '../../components/Wrapper';
import Page from '../../components/Page';
import PlaygroundPageAnimationTwo from '../../animations/PlaygroundPageAnimationTwo';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
`

const AboutRouting = () => {
  return (
    <PlaygroundPageAnimationTwo>
      <SideBarWrapper>
        <SideBar/>
          <Page>
            <h2>Routing</h2>
            <Paragraph>React Router!!!</Paragraph>
          </Page>
      </SideBarWrapper>
    </PlaygroundPageAnimationTwo>
  );
}

export default AboutRouting;
