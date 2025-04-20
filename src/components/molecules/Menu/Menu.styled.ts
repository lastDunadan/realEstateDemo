import { css } from '@emotion/react';
import styled from '@emotion/styled';

const iconCommonStyles = css`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 48px;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const MenuBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.div`
  ${iconCommonStyles};
  justify-content: center;
  padding: 8px;
  width: 48px;

  @media ${({ theme }) => theme.media.laptop} {
    display: none;
  }
`;

export const ExitIcon = styled.div`
  ${iconCommonStyles};
  position: relative;
  justify-content: flex-end;
  width: 100%;

  @media ${({ theme }) => theme.media.laptop} {
    display: none;
  }

  svg {
    position: absolute;
    top: 10px;
    right: -8px;
    width: 48px;
    height: 48px;
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.laptop} {
    display: flex;
    gap: 50px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.grays.black};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.palette.purples.purple};
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(4px);
  padding: 8px 24px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    font-size: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.grays.black};
    font-weight: 500;
  }
`;

export const MenuButtonsWrapper = styled.div`
  display: block;
  justify-content: center;
  margin-top: 24px;
  width: 100%;

  @media ${({ theme }) => theme.media.laptop} {
    display: none;
  }

  button {
    width: 100%;
  }
`;
