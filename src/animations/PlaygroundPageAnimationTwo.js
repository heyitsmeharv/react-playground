import styled from 'styled-components';
import colour from '../resources/styles/colours';
import Page from '../components/Page';
import SlideInTop from './SlideInTop';
import SlideOutBottom from './SlideOutBottom';
import SlideInBottom from './SlideInBottom';

const PlaygroundPageAnimationTwo = styled(Page)`
background: ${colour.darkPink};
&.page-enter {
  animation: ${SlideInBottom} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutBottom} 0.2s forwards;
}
`;

export default PlaygroundPageAnimationTwo;