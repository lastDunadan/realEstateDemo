'use client';

import TabSwitch from '@/atoms/TabSwitch';
import EstateCard from '@/molecules/EstateCard';

import { useEstatesGallery } from './EstatesGallery.hook';
import {
  Estates,
  EstatesGalleryBody,
  EstatesSection,
  Headline,
  Paragraph,
  WelcomeSection,
} from './EstatesGallery.styled';
import type { EstatesGallery as EstatesGalleryType } from './EstatesGallery.types';

export const EstatesGallery: EstatesGalleryType = props => {
  const { selectedTab, setSelectedTab, currentEstates } =
    useEstatesGallery(props);

  return (
    <EstatesGalleryBody>
      <WelcomeSection>
        <Headline>We make it easy for houses and apartments.</Headline>
        <Paragraph>
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </Paragraph>
      </WelcomeSection>
      <EstatesSection>
        <TabSwitch value={selectedTab} onChange={setSelectedTab} />
        <Estates>
          {currentEstates.map(estate => (
            <EstateCard
              key={estate.estateName}
              coverImage={estate.coverImage}
              estateType={estate.estateType}
              estatePrice={estate.estatePrice}
              isRental={estate.isRental}
              estateName={estate.estateName}
              estateLocation={estate.estateLocation}
            />
          ))}
        </Estates>
      </EstatesSection>
    </EstatesGalleryBody>
  );
};
