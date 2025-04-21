/**
 * Template for MainPage.
 */

import type { ReactElement } from 'react';

import type { EstatesData } from '@/organisms/EstatesGallery/EstatesGallery.types';
import type { Testimony } from '@/organisms/Testimonies/Testimonies.types';

export interface MainPageProps {
  /** The estates data to be displayed in the EstatesGallery */
  selectedEstates: EstatesData;
  /** The testimonies data to be displayed in Testimonies */
  selectedTestimonies: Testimony[];
}

export type MainPage = (props: MainPageProps) => ReactElement;
