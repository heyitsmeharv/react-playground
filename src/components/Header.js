import React from 'react';
import styled from 'styled-components';
import { NavButton } from './Button';
import colour from '../resources/styles/colours';

const HeaderStyle = styled.section`
  padding: 2%;
  background: ${colour.pink};
`;

const Header = () => {
  return (
    <HeaderStyle>
      <NavButton to="/" exact>Home</NavButton>
      <NavButton to="/playground" exact>Playground</NavButton>
      <NavButton to="/snippets/react" exact>Snippets</NavButton>
    </HeaderStyle>
  );
}

export default Header;
