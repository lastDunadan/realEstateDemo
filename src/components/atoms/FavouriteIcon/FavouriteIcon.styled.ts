import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FavouriteIconBody = styled.button<{ isFavourite: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-style: solid;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.palette.grays.gray};

  ${({ isFavourite, theme }) => css`
    background-color: ${isFavourite
      ? theme.palette.purples.purple
      : theme.palette.grays.white};
  `}

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    transition: color 0.2s ease-in-out;

    ${({ isFavourite, theme }) => css`
      color: ${isFavourite
        ? theme.palette.grays.white
        : theme.palette.purples.purple};
    `}
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grays.white};
    border-color: ${({ theme }) => theme.palette.purples.purple};
    box-shadow: 0 4px 40px 0 #e6e6ed;

    svg {
      color: ${({ theme }) => theme.palette.blues.light};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.purples.light};
    border-color: ${({ theme }) => theme.palette.blues.blue};

    svg {
      color: ${({ theme }) => theme.palette.blues.blue};
    }
  }
`;
