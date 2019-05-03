import React from 'react';
import styled from 'styled-components';
import Page, { PageHeader } from '../components/Page';
import HomePageAnimation from '../animations/HomePageAnimation';


const Container = styled.div`
  iframe {
    width: 100%;
    height: 100vh;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  }
`

const Playground = () => {
  return (
    <HomePageAnimation>
      <Page>
        <Container>
          <iframe 
            src="https://codesandbox.io/embed/new?codemirror=1&highlights=11,12,13,14" 
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
          </iframe>
        </Container>
      </Page>
    </HomePageAnimation>
  );
}

export default Playground;
