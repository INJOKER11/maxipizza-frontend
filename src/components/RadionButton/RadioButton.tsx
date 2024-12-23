/** @jsxImportSource @emotion/react */
import React from 'react';
const RadioButton = ({options}: {options: {name: string}[]}) => {
  return (
    <RadioGroup.Root
      css={css`
        display: flex;
      `}>
      {options.map(option => (
        <label css={labelStyles} key={option.name}>
          <RadioGroup.Item value={option.name} css={item}>
            <RadioGroup.Indicator css={indicator} />
          </RadioGroup.Item>
          <Text type={'bigBody'}>{option.name}</Text>
        </label>
      ))}
    </RadioGroup.Root>
  );
};
import * as RadioGroup from '@radix-ui/react-radio-group';
import Text from 'src/components/Text.tsx';

import {css} from '@emotion/react';

const item = theme => css`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${theme.colors.stroke};
  margin-right: 8px;

  &[data-state='checked'] {
    border: 1px solid ${theme.colors.accent};
  }
`;

const indicator = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
  }
`;

const labelStyles = css`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export default RadioButton;
