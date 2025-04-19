'use client';
import type { ReactElement } from 'react';

import { ESTATES_DATA } from '@/mocks/estates';
import { TESTIMONIES } from '@/mocks/testimonies';
import EstatesGallery from '@/organisms/EstatesGallery';
import Testimonies from '@/organisms/Testimonies';

const Home = (): ReactElement => (
  <>
    <EstatesGallery estatesData={ESTATES_DATA} />
    <br />
    <Testimonies testimonies={TESTIMONIES} />
  </>
);

export default Home;
