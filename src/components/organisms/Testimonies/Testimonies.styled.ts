import styled from '@emotion/styled';

export const TestimoniesBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f4effe 100%);
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
  padding: 0 16px;
  text-align: center;
`;

export const Testimony = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.grays.black};
  margin-top: 10px;
  padding: 0 16px;
  text-align: center;
  max-width: 500px;
`;

export const Name = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.grays.dark};
`;

export const AvatarArray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 12px auto 24px;
`;
