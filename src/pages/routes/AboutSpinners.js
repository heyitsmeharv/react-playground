import React from 'react';
import styled from 'styled-components';
import colour from '../../resources/styles/colours';
import Page, { PageHeader } from '../../components/Page';
import PlaygroundPageAnimationTwo from '../../animations/PlaygroundPageAnimationTwo';
import {
  BallSpinner,
  BarsSpinner,
  CircleSpinner,
  CubeSpinner,
  DominoSpinner,
  FillSpinner,
  FireworkSpinner,
  FlagSpinner,
  GridSpinner,
  GuardSpinner,
  HeartSpinner,
  ImpulseSpinner,
  PulseSpinner,
  PushSpinner,
  SequenceSpinner,
  SphereSpinner,
  SpiralSpinner,
  StageSpinner,
  SwapSpinner,
  WaveSpinner,
  ClapSpinner,
  RotateSpinner,
  SwishSpinner,
  GooSpinner,
  CombSpinner,
  PongSpinner,
  RainbowSpinner,
  RingSpinner,
  HoopSpinner,
  FlapperSpinner,
  MagicSpinner,
  JellyfishSpinner,
  TraceSpinner,
} from 'react-spinners-kit';

const IconContainer = styled.div`
  width: 200px;
  height: 150px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colour.secondary};
  position: relative;
  cursor: pointer;
  border: 1px solid white;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutSpinners = () => {
  return (
    <PlaygroundPageAnimationTwo>
      <Page>
      <PageHeader>Loaders</PageHeader>
      <PageContainer>
        <Row>
          <IconContainer><BallSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><BarsSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><CircleSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><CubeSpinner size={60} FrontColor={colour.white} BackColor={colour.white} color={colour.white}/></IconContainer>
          <IconContainer><DominoSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><FillSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><FireworkSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><FlagSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><GridSpinner size={60} color={colour.white}/></IconContainer>
        </Row>
        <Row>
          <IconContainer><PulseSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><PushSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><SequenceSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><SphereSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><SpiralSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><StageSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><SwapSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><WaveSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><ClapSpinner size={60} color={colour.white}/></IconContainer>
        </Row>
        <Row>
          <IconContainer><SwishSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><GooSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><CombSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><PongSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><RainbowSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><RingSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><HoopSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><FlapperSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><MagicSpinner size={60} color={colour.white}/></IconContainer>
        </Row>
        <Row>
          <IconContainer><HeartSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><ImpulseSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><TraceSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><GuardSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><RotateSpinner size={60} color={colour.white}/></IconContainer>
          <IconContainer><JellyfishSpinner size={60} color={colour.white}/></IconContainer>
        </Row>
      </PageContainer>
      </Page>
    </PlaygroundPageAnimationTwo>
  );
}

export default AboutSpinners;
