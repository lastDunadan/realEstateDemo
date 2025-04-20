import styled from '@emotion/styled';

export const TopBarBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 12px;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grays.light};
`;

export const MenuButtonsWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.laptop} {
    display: flex;
  }
`;
