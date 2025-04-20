import styled from '@emotion/styled';

export const MenuButtonsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
