import React from 'react';
import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours';
import { NavigationLink } from '../components/Button';


const NavContainer = styled.div`

`

const NavCheckBox = styled.input`
  display: none;
  :checked ~ div {
    transform: scale(80);
  }
  :checked ~ nav {
    opacity: 1;
    width: 100%;
  }
  :checked + label span {
    background: transparent;
  }
  :checked + label span::before {
    top: 0;
    transform: rotate(135deg);
  }
  :checked + label span::after {
    top: 0;
    transform: rotate(-135deg);
  }
`

const NavBackground = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  background-image: radial-gradient(rgb(166, 227, 233, 1), rgb(113, 201, 206, 1));
  z-index: 1000;
  transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
`

const Nav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

const NavLabel = styled.label`
  font-size: 2.5rem;
  height: 5rem;
  width: 5rem;
  background: ${colour.white};
  border-radius: 50%;
  position: fixed;
  top: 3rem;
  right: 3rem;
  background-image: radial-gradient(rgb(166, 227, 233, 0.8), rgb(113, 201, 206, 0.8));
  z-index: 2000;
  text-align: center;
  svg {
    padding: 22px;
    color: ${colour.white};
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    cursor: pointer;
    .icon::before {
      /* top: -1rem; */
    }
    .icon::after {
      /* top: 1rem; */
    }
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
  }
  ${props => props.animate && css`
    background-color: ${colour.primaryDarker};
    color: ${colour.white};
    ::after {
      background-color: ${colour.primaryDarker};
    }
  `}
  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
  :hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
    cursor: pointer;
  }
`

const NavIcon = styled.span`
  position: relative;
  margin-top: 2.5rem;
  &,
  ::before,
  ::after {
    width: 2rem;
    height: 2px;
    background-color: ${colour.black};
    display: inline-block;
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s;
  }

  ::before { top: -.8rem }
  ::after { top: .8rem }
`

const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`

const NavItem = styled.li`
  margin: 1rem;
`

const NavSpan = styled.span`
  margin-right: 1.5rem;
  display: inline-block;
`


const Navigation = () => {
  return (
    <NavContainer>
      <NavCheckBox type="checkbox" id="navi-toggle" />
      <NavLabel htmlFor="navi-toggle" animate="true">
        <NavIcon className="icon"/>
      </NavLabel>
      <NavBackground/>
      <Nav>
        <NavList>
          <NavItem><NavigationLink exact to="/"><NavSpan>01</NavSpan>Home</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/howto"><NavSpan>02</NavSpan>How To</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/examples"><NavSpan>03</NavSpan>Examples</NavigationLink></NavItem>
          <NavItem><NavigationLink exact to="/playground"><NavSpan>04</NavSpan>Playground</NavigationLink></NavItem>
        </NavList>
      </Nav>
    </NavContainer>
  )
}

export default Navigation;