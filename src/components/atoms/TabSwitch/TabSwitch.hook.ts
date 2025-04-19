import { useState } from 'react';

import type { UseTabSwitch as UseTabSwitchType } from './TabSwitch.types';

export const useTabSwitch: UseTabSwitchType = () => {
  const [houseTabActive, setHouseTabActive] = useState<boolean>(true);
  const [apartmentTabActive, setApartmentTabActive] = useState<boolean>(false);

  const handleHouseTabClick = () => {
    setHouseTabActive(true);
    setApartmentTabActive(false);
  };

  const handleApartmentTabClick = () => {
    setHouseTabActive(false);
    setApartmentTabActive(true);
  };

  return {
    houseTabActive,
    apartmentTabActive,
    handleHouseTabClick,
    handleApartmentTabClick,
  };
};
