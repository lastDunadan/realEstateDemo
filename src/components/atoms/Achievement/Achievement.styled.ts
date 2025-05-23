import styled from '@emotion/styled';

export const AchievementBody = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${({ theme }) => theme.palette.grays.gray};
  padding-left: 12px;
`;

export const Count = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.purples.purple};
`;

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #666;
`;
