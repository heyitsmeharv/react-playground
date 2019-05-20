import styled, { css } from 'styled-components';
import colour from '../resources/styles/colours';
import { NavLink } from 'react-router-dom';

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

export default NavButton;