import React from 'react';
import styled from 'styled-components';
import { NavButton } from './Button';
import colour from '../resources/styles/colours';

const TopNavBarStyle = styled.section`
  // background: ${colour.pink};
  background-color: #1abc9c;
  display: flex;
`;

const TopNavBar = () => {
  return (
    <TopNavBarStyle>
      <NavButton to="/" exact>Home</NavButton>
      <NavButton to="/snippets" exact>Snippets</NavButton>
      <NavButton to="/playground" exact>Playground</NavButton>
    </TopNavBarStyle>
  );
}

export default TopNavBar;
