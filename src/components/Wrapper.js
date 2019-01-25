import styled from 'styled-components';
import colour from '../resources/styles/colours'

const Wrapper = styled.div`
  position: relative;
  background: ${colour.white};
  /* width: 100%; */
  min-height: 100vh;
  height: 100vh;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0 auto;
  padding: 0 0px;
  font-family: "Acme", sans-serif;
`

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default Wrapper;
