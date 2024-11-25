import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import CheckedSvg from 'src/assets/icons/checked.svg';
import Text from 'src/components/Text.tsx';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';
import BackgroundLayout from 'src/layout/BackgroundLayout/BackgroundLayout.tsx';

const ThankYou = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <BackgroundLayout>
      <div css={wrapper}>
        <CheckedSvg />
        <div
          css={css`
            margin-top: 32px;
            margin-bottom: 24px;
          `}>
          <Text type={'h1'}>Дякуємо Вам!</Text>
        </div>
        <Text type={'bigBody'}>
          Ваше замовлення успішно отримано та відправлено в роботу. Менеджер
          незабаром зв'яжеться з вами для уточнення деталей. Підтвердження
          замовлення надіслано на вашу електронну пошту.
        </Text>
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            position: relative;
          `}>
          <div css={circleWrapper}>
            <div css={activeCircle}>
              <Text type={'h3'} color={theme.colors.textWhite}>
                1
              </Text>
            </div>
            <Text type={'h5'}>Приготування</Text>
          </div>
          <div
            css={[
              horizontalBar,
              css`
                position: absolute;
                top: 25px;
                left: 110px;
              `,
            ]}
          />
          <div css={circleWrapper}>
            <div css={circle}>
              <Text type={'h3'} color={theme.colors.textPrimary}>
                2
              </Text>
            </div>
            <Text type={'h5'}>Доставка</Text>
          </div>
          <div
            css={[
              horizontalBar,
              css`
                position: absolute;
                top: 25px;
                right: 124px;
              `,
            ]}
          />
          <div css={circleWrapper}>
            <div css={circle}>
              <Text type={'h3'} color={theme.colors.textPrimary}>
                3
              </Text>
            </div>
            <Text type={'h5'} color={theme.colors.accent}>
              Насолоджуйтесь
            </Text>
          </div>
        </div>
        <button css={homeButton}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            На головну
          </Text>
          <ArrowSvg
            css={css`
              height: 18px;
              transform: rotate(180deg);
            `}
            color={theme.colors.textWhite}
          />
        </button>
      </div>
    </BackgroundLayout>
  );
};

const wrapper = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 536px;
  align-items: center;
  text-align: center;
`;

const circle = theme => css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.stroke};
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const activeCircle = theme => css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const circleWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const horizontalBar = theme => css`
  height: 1px;
  width: 100px;
  background-color: ${theme.colors.stroke};
`;

const homeButton = theme => css`
  padding: 16px 40px;
  background-color: ${theme.colors.accent};
  display: flex;
  border: none;
  border-radius: 8px;
  margin-top: 80px;
  cursor: pointer;
`;

export default ThankYou;