/**
 * EstatesGallery
 */

import type { ReactElement } from 'react';

import type { EstateCardProps } from '@/molecules/EstateCard/EstateCard.types';

export interface EstatesData {
  houses: EstateCardProps[];
  apartments: EstateCardProps[];
}

export interface EstatesGalleryProps {
  /**
   * The estates data containing houses and apartments.
   * Ether mock for development purpose or real data form CMS/API.
   */
  estatesData: EstatesData;
}

export interface UseEstatesGalleryReturnValues {
  /**
   * The currently selected tab, either 'houses' or 'apartments'.
   */
  selectedTab: 'houses' | 'apartments';
  /**
   * Function to set the selected tab.
   * @param value - The new value of the selected tab.
   */
  setSelectedTab: (value: 'houses' | 'apartments') => void;
  /**
   * The current estates to be displayed based on the selected tab.
   */
  currentEstates: EstateCardProps[];
}

export type EstatesGallery = (props: EstatesGalleryProps) => ReactElement;
export type UseEstatesGallery = (
  params: EstatesGalleryProps,
) => UseEstatesGalleryReturnValues;
