import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours.js';

const Page = styled.div`
  height: 100vh;
  width: 100%;
  left: 0;
  text-align: center;
  overflow-y: auto;

  ${props => props.playground && css`
    overflow-y: hidden;
  `}

  ${props => props.snippets && css`
    background: ${colour.white};
  `}
`;

export const PageTitle = styled.h2`
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem
  padding-top: 1rem;
  color: ${colour.white};
  ${props => props.black && css`
    color: ${colour.black}
  `}

`

export const PageSubTitle = styled.h3`
  font-size: 3rem;
  margin: 0px 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colour.white};
  ${props => props.black && css`
    color: ${colour.black}
  `}
`

export default Page;