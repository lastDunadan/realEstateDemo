'use client';
import type { ReactElement } from 'react';

import { ESTATE_TYPE } from '@/components/molecule/EstateCard/EstateCard.types';

import { EstateCard } from '../components/molecule/EstateCard/EstateCard';

const Home = (): ReactElement => (
  <>
    <EstateCard
      coverImage="/images/estates/estate1.jpg"
      estateType={ESTATE_TYPE.HOUSE}
      estatePrice="$1,000"
      isRental={true}
      estateName="Beautiful Apartment in the City"
      estateLocation="New York, NY"
    />
  </>
);

export default Home;
