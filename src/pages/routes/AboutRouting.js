import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import PlaygroundPageAnimationTwo from '../../animations/PlaygroundPageAnimationTwo';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
`

const AboutRouting = () => {
  return (
    <PlaygroundPageAnimationTwo>
      <Page>
        <h2>Routing</h2>
        <Paragraph>React Router!!!</Paragraph>
      </Page>
    </PlaygroundPageAnimationTwo>
  );
}

export default AboutRouting;
