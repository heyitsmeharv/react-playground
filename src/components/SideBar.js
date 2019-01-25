import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours'
import { NavButton } from './Button';

const SideBarStyle = styled.div`
  background: ${colour.pink};
  max-width: 15%;
  height: 100%;
  /* z-index: 1; */
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
    <SideBarStyle>
      <SideBarList>
        <SideBarListItem><NavButton menu="true" to="/playground/react">React</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/react-router">Routing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/styled-components">Styled Components</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/testing">Testing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/api-requests">API Requests</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/webpack">Webpack</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/animations">Animations</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/grid-layout">Grid Layout</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/icons">Icons</NavButton></SideBarListItem>
      </SideBarList>
    </SideBarStyle>
  );
}

export default SideBar;
