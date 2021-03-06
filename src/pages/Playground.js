import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import SlideInLeft from '../animations/SlideInLeft';
import SlideOutTop from '../animations/SlideOutTop';

const PlaygroundPageAnimation = styled(Page)`
&.page-enter {
  animation: ${SlideInLeft} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutTop} 0.5s forwards;
}
`;

// TODO: FIX THE OVERFLOW
const Container = styled.div`
  iframe {
    width: 100%;
    height: 100vh;
  }
`

const Playground = () => {
  return (
    <PlaygroundPageAnimation>
      <Container>
        <iframe 
          src="https://codesandbox.io/embed/new?codemirror=1&highlights=11,12,13,14" 
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
        </iframe>
      </Container>
    </PlaygroundPageAnimation>
  );
}

export default Playground;
