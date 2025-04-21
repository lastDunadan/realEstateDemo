import styled from '@emotion/styled';
import Image from 'next/image';

export const JumbotronBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: clip;

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
  }
`;

export const JumbotronColumn = styled.div`
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50%;
  }
`;

export const TextWrapper = styled.div`
  padding: 10% 6%;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 10% 8%;
  }
`;

export const MainHeadline = styled.h1`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  line-height: 1.2;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 44px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 56px;
    text-align: left;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 60px;
    text-align: left;
  }
`;

export const ClaimParagraph = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 20px;
    text-align: left;
  }
`;

export const AchievementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 44px;
  margin-top: 34px;
  margin-left: -2%;

  @media ${({ theme }) => theme.media.laptop} {
    justify-content: left;
    margin-left: unset;
  }
`;

export const GradientSmear = styled.div`
  position: absolute;
  bottom: -5%;
  left: -5%;
  background: radial-gradient(
    circle,
    rgba(104, 81, 255, 0.2) 0%,
    rgba(104, 81, 255, 0) 70%
  );
  width: 200px;
  height: 200px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 370px;
    height: 370px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 520px;
    height: 520px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 630px;
    height: 630px;
  }
`;

export const JumbotronBackground = styled(Image)`
  width: 100%;
  height: auto;
`;

export const EstateMock = styled(Image)`
  position: absolute;
  top: 22%;
  left: 0;
  z-index: 1;
  width: 50%;
  max-width: 432px;
  height: auto;

  @media ${({ theme }) => theme.media.laptop} {
    left: -10%;
  }
`;
