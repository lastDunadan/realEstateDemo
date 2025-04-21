import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const LogoBody = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

export const LogoImage = styled(Image)`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled.h1`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.grays.black};
`;
