import styled from 'styled-components';
import Page from '../components/Page';
import SlideInLeft from './SlideInLeft';
import SlideOutLeft from './SlideOutLeft';

const HomePageAnimation = styled(Page)`
&.page-enter {
  animation: ${SlideInLeft} 0.2s forwards;
}
&.page-exit {
  animation: ${SlideOutLeft} 0.2s forwards;
}
`;

export default HomePageAnimation;