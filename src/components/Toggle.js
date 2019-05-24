import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const Toggle = styled.label`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + .slider {
    background-color: #a078a5;
  }
  :focus + .slider {
    box-shadow: 0 0 1px #a078a5;
  }
  :checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  :before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Switch = () => {  
  const [active, setToggleState] = useState(false);
  const toggle = () => { setToggleState(active === false ? true : false) };
  return (
    <Toggle className="switch">
      <Input type="checkbox" active={active} onClick={toggle} />
      <Slider className="slider" />
    </Toggle>
  );
}

export default Switch;
