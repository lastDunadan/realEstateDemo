import styled from '@emotion/styled';
import Image from 'next/image';

export const EstateCardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  min-width: 320px;
  height: 364px;
  border: 1px solid ${({ theme }) => theme.palette.grays.light};
  border-radius: 8px;

  &:hover {
    box-shadow: 0 4px 40px 0 ${({ theme }) => theme.palette.grays.light};
  }
`;

export const TopSection = styled.div`
  width: auto;
  height: 202px;
  overflow: clip;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px 18px 18px;
  gap: 12px;
`;

export const CoverImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const EstateTypeTag = styled(Image)`
  position: absolute;
  top: -17px;
  left: -9px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.purples.purple};
  line-height: 1.5;

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.grays.dark};
  }
`;

export const EstateName = styled.div`
  max-width: 235px;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.grays.black};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.25;
`;

export const FavoriteWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 18px;
`;

export const EstateLocation = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.palette.grays.dark};
`;
