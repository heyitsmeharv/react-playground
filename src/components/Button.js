import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours';
import { NavLink } from 'react-router-dom';
// import SlideInBottom from '../animations/SlideInBottom';

export const NavButton = styled(NavLink)`
  background: #01676b;
  color: white;
  border-radius: 3px;
  /* border: 2px solid ${colour.secondary}; */
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-decoration: none!important;
  align-items: center;

  :hover {
    background: black;
    color: #21aa93;
  }

  ${props => props.menu && css`
    background: ${colour.darkPink};
    color: white;
    border: 2px solid ${colour.accent};
    width: 100%;
    :hover {
      background: ${colour.white};
      color: ${colour.darkPink}
    }
  `}

  ${props => props.home && css`
    background: ${colour.darkPink};
    color: white;
    border: 2px solid ${colour.accent};
    width: 100%;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    font-size: 2rem;
    :hover {
      background: ${colour.white};
      color: ${colour.darkPink}
      border: 2px solid ${colour.darkPink};
    }
  `}
`

export const NavButtonNew = styled(NavLink)`
  margin: 0.8em 1em;
  text-decoration: none!important;
  color: white;
    :hover {
      color: white;
    }
`

export const NavBarButton = styled.a`
  font-size: 2.5rem;
  height: 3rem;
  width: 3rem;
  background: #ffffff;
  border-radius: 50%;
  position: fixed;
  top: 2rem;
  right: 4rem;
  background-image: radial-gradient(rgb(166,227,233,0.8),rgb(113,201,206,0.8));
  z-index: 2000;
  svg {
    padding: 11px;
    color: ${colour.white};
  }
  // :hover {
  //   transform: translateY(-3px);
  //   box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
  //   cursor: pointer;
  // }
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

export const NotificationButton = styled.button`
  background: ${colour.darkPink};
  color: white;
  border-radius: 3px;
  border: 2px solid ${colour.secondary};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-decoration: none!important;
  align-items: center;
  width: 200px;
  height: 200px;

  :hover {
    background: ${colour.white};
    color: ${colour.darkPink}
  }
`;

export const CollapseButton = styled.button`
  background: ${colour.darkPink};
  color: white;
  border-radius: 50%;
  border: 2px solid ${colour.secondary};
  text-decoration: none!important;
  align-items: center;

  :hover {
    background: ${colour.white};
    color: ${colour.darkPink}
  }
`;

export const NavigationButton = styled.a`
  font-size: 2.5rem;
  height: 7rem;
  width: 7rem;
  background: ${colour.white};
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  right: 6rem;
  background-image: radial-gradient(rgb(166, 227, 233, 0.8), rgb(113, 201, 206, 0.8));
  z-index: 2000;
  svg {
    padding: 22px;
    color: ${colour.white};
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    cursor: pointer;
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

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: ${colour.white};
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${colour.white} 50%);
  background-size: 230%;
  transition: all .4s;
  box-shadow: 0 1rem 3rem rgba(${colour.black}, .4);

  :hover,
  :active {
    cursor: pointer;
    background-position: 100%;
    color: ${colour.primaryDark};
    transform: translateX(1rem);
  }
`

export default NavButton;