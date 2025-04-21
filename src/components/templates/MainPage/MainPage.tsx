import EstatesGallery from '@/organisms/EstatesGallery';
import Jumbotron from '@/organisms/Jumbotron';
import Testimonies from '@/organisms/Testimonies';

import { MainPageBody } from './MainPage.styled';
import type { MainPage as MainPageType } from './MainPage.types';
export const MainPage: MainPageType = ({
  selectedEstates,
  selectedTestimonies,
}) => (
  <MainPageBody>
    <Jumbotron />
    <EstatesGallery estatesData={selectedEstates} />
    <Testimonies testimonies={selectedTestimonies} />
  </MainPageBody>
);
