import React from 'react';
import styled, {css} from 'styled-components';
import { NavButton, NavButtonNew } from './Button';
import Icon from '@mdi/react'
import { mdiHome, mdiContentCut, mdiCubeOutline } from '@mdi/js'
import colour from '../resources/styles/colours';

const TopNavBarStyle = styled.section`
  background-color: ${colour.react};
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;

  ${props => props.animationSlide && css`
    transform: translateX(0);
  `}

  ${props => props.animationSlide && css`
    transform: translateX(-100%);
  `}

}
`;

const TopNavBar = () => {
  return (
    <TopNavBarStyle>
      <NavButtonNew to="/" exact>
        <Icon 
          path={mdiHome}
          size={1}
          color="black"
        />
      </NavButtonNew>
      <NavButtonNew to="/snippets" exact>
        <Icon 
          path={mdiContentCut}
          size={1}
          color="black"
        />
      </NavButtonNew>
      <NavButtonNew to="/playground" exact>
        <Icon 
          path={mdiCubeOutline}
          size={1}
          color="black"
        />
      </NavButtonNew>
    </TopNavBarStyle>
  );
}

export default TopNavBar;
