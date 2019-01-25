import React from 'react';
import styled from 'styled-components';
import colour from '../../resources/styles/colours';
import Page from '../../components/Page';
import PlaygroundPageAnimation from '../../animations/PlaygroundPageAnimation';
import SnippetBox from '../../components/SnippetBox';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
  color: ${colour.yellow}
`

const AboutReact = () => {
  return (
    <PlaygroundPageAnimation>
      <Page>
        <h2>React</h2>
        <SnippetBox>
          <Paragraph>Hello</Paragraph>
        </SnippetBox>
      </Page>
    </PlaygroundPageAnimation>
  );
}

export default AboutReact;
