import React from 'react';
import styled from 'styled-components';
import { NavButton } from './Button';
import colour from '../resources/styles/colours';

const TopNavBarStyle = styled.section`
  padding: 2%;
  background: ${colour.pink};
`;

const TopNavBar = () => {
  return (
    <TopNavBarStyle>
      <NavButton to="/" exact>Home</NavButton>
      <NavButton to="/playground" exact>Playground</NavButton>
      <NavButton to="/snippets" exact>Snippets</NavButton>
    </TopNavBarStyle>
  );
}

export default TopNavBar;
