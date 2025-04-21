import styled from '@emotion/styled';

export const EstatesGalleryBody = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Headline = styled.h2`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  color: ${({ theme }) => theme.palette.grays.black};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.grays.dark};
  margin-top: 10px;
  text-align: center;
  max-width: 500px;
`;

export const EstatesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Estates = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  gap: 20px;
  padding: 24px 32px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  user-select: none;

  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }

  @media ${({ theme }) => theme.media.laptop} {
    justify-content: center;
  }
`;
