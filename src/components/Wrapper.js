import styled from 'styled-components';
import SlideInTop from '../animations/SlideInTop';
import colour from '../resources/styles/colours'

export const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 auto;
  padding: 0 0px;
  font-family: "Staatliches", cursive;
`

export const AppWrap = styled(Wrapper)`
  animation: ${SlideInTop} 0.5s forwards;
`

// export default Wrapper;
