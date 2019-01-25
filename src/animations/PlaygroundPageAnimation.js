import styled from 'styled-components';
import colour from '../resources/styles/colours';
import Page from '../components/Page';
import SlideInRight from './SlideInRight';
import SlideOutBottom from './SlideOutBottom';

const PlaygroundPageAnimation = styled(Page)`
background: ${colour.darkPink};
&.page-enter {
  animation: ${SlideInRight} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutBottom} 0.2s forwards;
}
`;

export default PlaygroundPageAnimation;