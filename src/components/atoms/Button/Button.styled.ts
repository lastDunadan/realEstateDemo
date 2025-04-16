import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyles = css`
  display: flex;
  flex-direction: column;
`;

export const ButtonBody = styled.div`
  ${buttonStyles};
  color: ${({ theme }) => theme.palette.purples.purple};
`;
