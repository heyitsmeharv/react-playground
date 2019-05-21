import React from 'react';
import styled, {css} from 'styled-components';
import { NavButton, NavButtonNew } from './Button';
import Icon from '@mdi/react'
import { mdiHome, mdiContentCut, mdiCubeOutline } from '@mdi/js'
import colour from '../resources/styles/colours';

const TopNavBarStyle = styled.section`
  background-color: ${colour.react};
  display: flex;
}
`

const NewTopNavBarStyle = styled.section`
  display: flex;
  position: absolute;
  flex-direction: column;
}
`
const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    text-shadow: 1px 1px ${colour.react};
  }
`

const TopNavBar = () => {
  return (
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
    </NewTopNavBarStyle>
  );
}

export default TopNavBar;
