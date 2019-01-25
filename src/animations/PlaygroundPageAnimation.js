import styled from 'styled-components';
import colour from '../resources/styles/colours';
import Page from '../components/Page';
import SlideInRight from './SlideInRight';
import SlideOutRight from './SlideOutRight';

const PlaygroundPageAnimation = styled(Page)`
background: ${colour.darkPink};
&.page-enter {
  animation: ${SlideInRight} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutRight} 0.2s forwards;
}
`;

export default PlaygroundPageAnimation;