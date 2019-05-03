import styled, { css } from 'styled-components'
import colour from '../resources/styles/colours'

const Page = styled.div`
  height: 100vh;
  width: 100%
  left: 0;
  text-align: center;
  overflow-y: auto;
`;

export const PageHeader = styled.div`
  font-size: 2rem;
  margin-top: 2%;
  margin-bottom: 1%;
  margin-right: 10%;

  ${props => props.home && css`
    margin-right: 0%;
  `}
`;


export default Page;