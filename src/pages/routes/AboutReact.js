import React from 'react';
import styled from 'styled-components';
import colour from '../../resources/styles/colours';
import SideBar from '../../components/SideBar';
import { SideBarWrapper } from '../../components/Wrapper';
import Page from '../../components/Page';
import PlaygroundPageAnimationTwo from '../../animations/PlaygroundPageAnimationTwo';
import SnippetBox from '../../components/SnippetBox';

const Paragraph = styled.div`
  padding: 12px;
  font-size: 1.2rem;
  color: ${colour.yellow}
`

const AboutReact = () => {
  return (
    <PlaygroundPageAnimationTwo>
      <SideBarWrapper>
        <SideBar/>
        {/* </SideBarWrapper> */}
          <Page>
            <h2>React</h2>
            <SnippetBox>
              <Paragraph>Hello</Paragraph>
            </SnippetBox>
          </Page>
      </SideBarWrapper>
    </PlaygroundPageAnimationTwo>
  );
}

export default AboutReact;
