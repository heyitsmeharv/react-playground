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

export const PageTitle = styled.h2`

  ${props => props.home && css`
      font-size: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10rem
      margin-top: 10rem;
    }
  `}
`

export const PageSubTitle = styled.h3`

  ${props => props.home && css`
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export default Page;