import { useState } from 'react';

import type { TabSwitchValue } from '@/atoms/TabSwitch/TabSwitch.types';

import type { UseEstatesGallery as UseEstatesGalleryType } from './EstatesGallery.types';

export const useEstatesGallery: UseEstatesGalleryType = ({ estatesData }) => {
  const [selectedTab, setSelectedTab] = useState<TabSwitchValue>('houses');

  const currentEstates =
    selectedTab === 'houses' ? estatesData.houses : estatesData.apartments;

  return {
    selectedTab,
    setSelectedTab,
    currentEstates,
  };
};
