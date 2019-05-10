import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours.js';

const Page = styled.div`
  height: 100vh;
  width: 100%
  left: 0;
  text-align: center;
  overflow-y: auto;

  ${props => props.home && css`
    background: ${colour.react};
  `}
`;

export default Page;