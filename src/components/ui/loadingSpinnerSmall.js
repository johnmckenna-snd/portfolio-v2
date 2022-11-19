// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const SpinnerWrapper = styled.div`
  margin: ${(props) => props.margin || '0 0 0 0'};
  grid-area: ${(props) => props.gridArea || ''};
  width: 262px;
  display: grid;
`;

const Spinner = styled.svg`
  animation: rotate 1.5s linear infinite;
  width: 50px;
  height: 50px;
  grid-area: ${(props) => props.gridArea || ''};
  justify-self: center;

  & .path {
    stroke: ${colors.colors.orange};
    stroke-linecap: round;
    animation: dash 3s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 1000;
      stroke-dashoffset: 1;
    }
    50% {
      stroke-dasharray: 500, 1500;
      stroke-dashoffset: -75;
    }
    100% {
      stroke-dasharray: 1, 1000;
      stroke-dashoffset: -200;
    }
  }
`;

function LoadingSpinnerSmall ({ gridArea, margin }) {
  return (
    <SpinnerWrapper gridArea={gridArea} margin={margin}>
      <Spinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </Spinner>
    </SpinnerWrapper>
  );
}

export default LoadingSpinnerSmall;
