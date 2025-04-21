'use client';
import type { ReactElement } from 'react';

import { MainPage } from '@/components/templates/MainPage/MainPage';
import { ESTATES_DATA } from '@/mocks/estates';
import { TESTIMONIES } from '@/mocks/testimonies';

const Home = (): ReactElement => (
  <>
    <MainPage
      selectedEstates={ESTATES_DATA}
      selectedTestimonies={TESTIMONIES}
    />
  </>
);

export default Home;
