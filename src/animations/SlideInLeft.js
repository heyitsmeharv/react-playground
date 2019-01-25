import { keyframes } from "styled-components";

const SlideInLeft = keyframes`
from {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  visibility: visible;
}

to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;

export default SlideInLeft;