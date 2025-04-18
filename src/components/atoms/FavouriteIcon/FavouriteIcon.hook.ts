import { useState } from 'react';

import type { UseFavouriteIcon as UseFavouriteIconType } from './FavouriteIcon.types';

export const useFavouriteIcon: UseFavouriteIconType = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const toggleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  return { isFavourite, toggleFavourite };
};
