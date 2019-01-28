import styled from 'styled-components';
import colour from '../resources/styles/colours';

const SnippetBox = styled.section`
  font-family: 'Consolas';
  background: ${colour.dark}
  width: 22%;
  height: 22%;
  overflow-y: auto;
  margin: 12px;
  h2 {
    color: ${colour.white};
    font-size: 1.2rem;
  }
`;

export default SnippetBox;