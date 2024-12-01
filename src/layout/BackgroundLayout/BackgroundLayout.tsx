import React from 'react';
import Rectangle from 'src/assets/icons/Rectangle.svg';
import {css, useTheme} from '@emotion/react';
import BurritosSvg from 'src/assets/icons/burritos.svg';
import NigiriSvg from 'src/assets/icons/nigiri.svg';
import NoodlesSvg from 'src/assets/icons/noodles.svg';
import FriedPotatoesSvg from 'src/assets/icons/fried-potatoes.svg';
import PizzaSvg from 'src/assets/icons/pizza.svg';
import RightRectangle from 'src/assets/icons/RectangleRight.svg';
import SushiSvg from 'src/assets/icons/sushi.svg';
import {WhiteTheme} from 'src/styles/theme.ts';
import RectangleMobileSvg from 'src/assets/icons/rectanglemobile.svg';

const BackgroundLayout = ({children}: {children: React.ReactNode}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <Rectangle
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.accent}
      />
      <RectangleMobileSvg
        css={css`
          display: none;
          @media (min-width: ${theme.media.mobile}) {
            position: absolute;
            bottom: 0;
            left: 0;
          }
        `}
        color={theme.colors.accent}
      />
      <BurritosSvg
        css={css`
          position: absolute;
          top: 467px;
          left: 268px;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.stroke}
      />
      <NigiriSvg
        css={css`
          position: absolute;
          right: 200px;
          top: 176px;
          @media (min-width: ${theme.media.mobile}) {
            top: 125px;
            right: 13px;
            width: 60px;
            height: 60px;
          }
        `}
        color={theme.colors.stroke}
      />
      <NoodlesSvg
        css={css`
          position: absolute;
          top: 216px;
          left: 515px;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.stroke}
      />
      <FriedPotatoesSvg
        css={css`
          position: absolute;
          top: 367px;
          right: 484px;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.stroke}
      />
      <PizzaSvg
        css={css`
          position: absolute;
          bottom: 246px;
          right: 336px;
          @media (min-width: ${theme.media.mobile}) {
            top: 101px;
            left: 40px;
            width: 60px;
            height: 60px;
          }
        `}
        color={theme.colors.stroke}
      />
      <RightRectangle
        css={css`
          position: absolute;
          right: 0;
          bottom: 0;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.accent}
      />
      <SushiSvg
        css={css`
          position: absolute;
          bottom: 137px;
          left: 343px;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.stroke}
      />
      <div>{children}</div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  height: 100vh;
  margin-top: -92px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BackgroundLayout;
