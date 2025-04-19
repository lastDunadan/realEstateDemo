import styled from '@emotion/styled';
import Image from 'next/image';

export const TestimonyAvatarBody = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: rotate(-90deg);
  }
`;

export const AvatarImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
