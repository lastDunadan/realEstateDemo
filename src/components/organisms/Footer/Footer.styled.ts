import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 36px;
  background-color: ${({ theme }) => theme.palette.grays.white};
`;

export const VerticalSection = styled.div<{ border?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-bottom: 16px;

  ${({ border, theme }) =>
    border &&
    css`
      border-bottom: 1px solid ${theme.palette.grays.light};
    `}
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.grays.gray};
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.palette.purples.purple};
    }
  }
`;

export const Copyrights = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.grays.gray};
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;

  svg {
    background-color: ${({ theme }) => theme.palette.grays.gray};
  }
`;

export const SocialLink = styled(Link)`
  &:hover {
    filter: brightness(0) saturate(100%) invert(31%) sepia(24%) saturate(6944%)
      hue-rotate(237deg) brightness(100%) contrast(108%);
  }
`;
