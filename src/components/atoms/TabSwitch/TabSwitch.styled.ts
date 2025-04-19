import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TabSwitchBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  background-color: ${({ theme }) => theme.palette.purples.lighterTransparent};
  border-radius: 12px;
  padding: 8px;
  min-width: 300px;
  max-width: 340px;
  height: auto;
  overflow: clip;

  &:hover {
    button {
      color: ${({ theme }) => theme.palette.purples.purple};
    }
  }
`;

export const TabSwitchButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-style: solid;
  border-width: 1.5px;

  ${({ isActive, theme }) => css`
    font-weight: ${isActive ? 700 : 500};
    background-color: ${isActive ? theme.palette.grays.white : 'transparent'};
    color: ${isActive
      ? theme.palette.purples.purple
      : theme.palette.grays.gray};
    border-color: ${isActive ? theme.palette.grays.gray : 'transparent'};
    box-shadow: ${isActive && '0px 3px 40px 0px #0E08540D'};
  `}

  &:active {
    border-color: ${({ theme }) => theme.palette.purples.purple};
  }
`;
