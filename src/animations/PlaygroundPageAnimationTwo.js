import styled from 'styled-components';
import colour from '../resources/styles/colours';
import Page from '../components/Page';
import SlideInBottom from './SlideInBottom';
import SlideOutTop from './SlideOutTop';

const PlaygroundPageAnimationTwo = styled(Page)`
background: ${colour.darkPink};
&.page-enter {
  animation: ${SlideInBottom} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutTop} 0.2s forwards;
}
`;

export default PlaygroundPageAnimationTwo;