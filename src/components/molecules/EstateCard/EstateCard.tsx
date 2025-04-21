import FavouriteIcon from '@/atoms/FavouriteIcon';

import {
  BottomSection,
  CoverImage,
  EstateCardBody,
  EstateLocation,
  EstateName,
  EstateTypeTag,
  FavoriteWrapper,
  Price,
  TopSection,
} from './EstateCard.styled';
import type {
  EstateCard as EstateCardType,
  EstateTypeTagSelector as EstateTypeTagSelectorType,
} from './EstateCard.types';
import { ESTATE_TYPE } from './EstateCard.types';

const estateTypeTagSelector: EstateTypeTagSelectorType = estateType => {
  switch (estateType) {
    case ESTATE_TYPE.APARTMENT:
      return (
        <EstateTypeTag
          src={'/realEstateDemo/images/tag-apartments.svg'}
          width={135}
          height={40}
          alt="Apartments"
          aria-label="Apartments"
        />
      );
    case ESTATE_TYPE.HOUSE:
      return (
        <EstateTypeTag
          src={'/realEstateDemo/images/tag-house.svg'}
          width={96}
          height={40}
          alt="House"
          aria-label="House"
        />
      );
    default:
      return null;
  }
};

export const EstateCard: EstateCardType = ({
  coverImage,
  estateType,
  estatePrice,
  isRental,
  estateName,
  estateLocation,
}) => (
  <EstateCardBody>
    <TopSection>
      <CoverImage
        src={coverImage}
        alt={estateName}
        width={344.18}
        height={200}
      />
    </TopSection>
    <BottomSection>
      {estateTypeTagSelector(estateType)}
      <Price>
        {estatePrice}&nbsp;
        {isRental && <span>/month</span>}
      </Price>
      <EstateName>{estateName}</EstateName>
      <FavoriteWrapper>
        <FavouriteIcon />
      </FavoriteWrapper>
      <EstateLocation>{estateLocation}</EstateLocation>
    </BottomSection>
  </EstateCardBody>
);
