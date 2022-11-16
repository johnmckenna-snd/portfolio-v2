// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

import { colors } from '../../styles/colors';

const BurgerIconWrapper = styled.div`
  grid-area: ${(props) => props.gridArea || '1 / 1 / 1 / 1'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  height: ${(props) => props.height || '10em'};
  justify-self: right;
  z-index: 1;
`;

function BurgerIcon ({ gridArea, margin, isX, height, onClick }) {
  const transitionStyles = useSpring({
    to: {
      opacity: isX ? 0 : 1,
      yA1: isX ? 1 : 4,
      yA2: isX ? 9 : 4,
      yB1: isX ? 9 : 6,
      yB2: isX ? 1 : 6,
    },
    config: config.slow,

  });

  return (
    <BurgerIconWrapper
      gridArea={gridArea}
      margin={margin}
      height={height}
      onClick={onClick}
    >
      <svg viewBox="-1 0 11 11" width={height} height={height}>
        <animated.line x="1" y1={transitionStyles.yA1} x2="9" y2={transitionStyles.yA2} stroke={colors.greys.seven} strokeWidth=".5" />
        <animated.line x="1" y1={transitionStyles.yB1} x2="9" y2={transitionStyles.yB2} stroke={colors.greys.seven} strokeWidth=".5" />
      </svg>
    </BurgerIconWrapper>
  );
}

export default memo(BurgerIcon);
