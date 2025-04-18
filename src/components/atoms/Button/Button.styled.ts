import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import type { Theme } from '@/styles/types';

import { BUTTON_VARIANT } from './Button.types';

const buttonBodyStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 48px;
  padding: 12px 34px;
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;

const getButtonVariant = (variant: BUTTON_VARIANT, theme: Theme) => {
  switch (variant) {
    case BUTTON_VARIANT.SECONDARY:
      return css`
        background-color: ${theme.palette.grays.white};
        border-color: ${theme.palette.grays.gray};
        color: ${theme.palette.grays.black};
        &:hover {
          background-color: ${theme.palette.grays.white};
          border-color: ${theme.palette.purples.purple};
        }
        &:focus {
          background-color: ${theme.palette.grays.white};
          border-color: ${theme.palette.purples.purple};
          color: ${theme.palette.purples.purple};
        }
        &:active {
          background-color: ${theme.palette.grays.white};
          border-color: ${theme.palette.blues.blue};
          color: ${theme.palette.blues.blue};
        }
        &:disabled {
          background-color: ${theme.palette.grays.white};
          border-color: ${theme.palette.grays.gray};
          color: ${theme.palette.grays.dark};
          cursor: not-allowed;
        }
      `;
    default:
      return css`
        background-color: ${theme.palette.purples.purple};
        border-color: ${theme.palette.purples.purple};
        color: ${theme.palette.grays.white};
        &:hover {
          background-color: ${theme.palette.purples.light};
          border-color: ${theme.palette.purples.light};
        }
        &:focus {
          background-color: ${theme.palette.purples.purple};
          border-color: ${theme.palette.blues.blue};
        }
        &:active {
          background-color: ${theme.palette.blues.light};
          border-color: ${theme.palette.blues.light};
        }
        &:disabled {
          background-color: ${theme.palette.grays.gray};
          border-color: ${theme.palette.grays.gray};
          color: ${theme.palette.grays.white};
          cursor: not-allowed;
        }
      `;
  }
};

export const ButtonBody = styled.button<{ variant: BUTTON_VARIANT }>`
  ${buttonBodyStyle}
  ${({ variant, theme }) => getButtonVariant(variant, theme)};
`;

export const LinkButtonBody = styled(Link)<{ variant: BUTTON_VARIANT }>`
  ${buttonBodyStyle}
  ${({ variant, theme }) => getButtonVariant(variant, theme)};
`;
