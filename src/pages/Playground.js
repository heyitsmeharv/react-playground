import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import SlideInBottom from '../animations/SlideInBottom';
import SlideOutTop from '../animations/SlideOutTop';

const PlaygroundPageAnimation = styled(Page)`
  &.page-enter {
    animation: ${SlideInBottom} 0.5s forwards;
  }
  &.page-exit {
    animation: ${SlideOutTop} 0.5s forwards;
  }
`;

const Container = styled.div`
  iframe {
    width: 100%;
    height: 100vh;
  }
`

const Playground = () => {
  return (
    <PlaygroundPageAnimation playground>
      <Container>
        <iframe
          title="codesandbox"
          src="https://codesandbox.io/embed/new?codemirror=1&highlights=11,12,13,14" 
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
        </iframe>
      </Container>
    </PlaygroundPageAnimation>
  );
}

export default Playground;
