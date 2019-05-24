import React, { useState }  from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NavButton, NavButtonNew, NavBarButton } from './Button';
import Icon from '@mdi/react'
import { mdiHome, mdiContentCut, mdiCubeOutline, mdiMenu, mdiClose } from '@mdi/js'
import colour from '../resources/styles/colours';

const morph = keyframes`
  0% { width: 0px; }
  50% { width: 50%; }
  100% { width: 100%; }
`

const TopNavBarStyle = styled.section`
  background-color: ${colour.react};
  display: flex;
}
`

const NewTopNavBarStyle = styled.section`
  display: flex;
  position: absolute;
  flex-direction: row;
  background-color: red;
}
`
const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${morph} 1s linear infinite;

`

const Text = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    text-shadow: 1px 1px ${colour.react};
  }
`

const TopNavBar = () => {
  const [active, setMenu] = useState(false);
  const toggle = () => { setMenu(active === false ? true : false) };

  return (
    <NewTopNavBarStyle>
      <NavBarButton onClick={toggle} animate={true}>
        {active ? <Icon 
            path={mdiClose}
            size={1}
            color="black"
            /> : <Icon 
            path={mdiMenu}
            size={1}
            color="black"
          />} 
        </NavBarButton>
        {active &&
        <NewTopNavBarStyle>
        <NavButtonNew to="/" exact>
          <IconTextWrapper>
            <Icon 
              path={mdiHome}
              size={1}
              color={colour.react}
            />
            <Text>Home</Text>
          </IconTextWrapper>
        </NavButtonNew>
        <NavButtonNew to="/snippets" exact>
          <IconTextWrapper>
            <Icon 
              path={mdiContentCut}
              size={1}
              color={colour.react}
            />
            <Text>Snippets</Text>
          </IconTextWrapper>
        </NavButtonNew>
        <NavButtonNew to="/playground" exact>
          <IconTextWrapper>
            <Icon 
              path={mdiCubeOutline}
              size={1}
              color={colour.react}
            />
            <Text>Playground</Text>
          </IconTextWrapper>
        </NavButtonNew>
        </NewTopNavBarStyle>}
    </NewTopNavBarStyle>
  );
}

export default TopNavBar;
