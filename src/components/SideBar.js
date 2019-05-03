import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours'
import { NavButton } from './Button';
import PlaygroundPageAnimation from '../animations/PlaygroundPageAnimation';

const SideBarStyle = styled.div`
  background: ${colour.pink};
  height: 100vh;
  text-align: center;
`

const SideBarList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`

const SideBarListItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SideBar = () => {
  return (
    <PlaygroundPageAnimation>
    <SideBarStyle>
      <SideBarList>
        <SideBarListItem><NavButton menu="true" to="/snippets/react">React</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/react-router">Routing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/styled-components">Styled Components</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/testing">Testing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/api-requests">API Requests</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/webpack">Webpack</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/animations">Animations</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/grid-layout">Grid Layout</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/icons">Icons</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/react-loaders">Loaders</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/snippets/react-notifications">Notifications</NavButton></SideBarListItem>
      </SideBarList>
      </SideBarStyle>
    </PlaygroundPageAnimation>
  );
}

export default SideBar;
