import React from 'react';
import styled from 'styled-components';
import colour from '../../resources/styles/colours';
import Page from '../../components/Page';
import SideBar from '../../components/SideBar';
import { SideBarWrapper } from '../../components/Wrapper';
import PlaygroundPageAnimation from '../../animations/PlaygroundPageAnimation';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
  line-height: 4;
`

const Intro = () => {
  return (
    <PlaygroundPageAnimation>
      <SideBarWrapper>
        <SideBar/>
        <Page>
        <h2>Introduction</h2>
        <Paragraph>Click on a topic for an explanation and code snippets</Paragraph>
        </Page>
        </SideBarWrapper>
    </PlaygroundPageAnimation>
  );
}

export default Intro;
