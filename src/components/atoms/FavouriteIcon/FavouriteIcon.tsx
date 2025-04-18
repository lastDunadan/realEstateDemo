import { HeartIcon } from '@heroicons/react/24/outline';

import { useFavouriteIcon } from './FavouriteIcon.hook';
import { FavouriteIconBody } from './FavouriteIcon.styled';
import type { FavouriteIcon as FavouriteIconType } from './FavouriteIcon.types';

export const FavouriteIcon: FavouriteIconType = () => {
  const { isFavourite, toggleFavourite } = useFavouriteIcon();

  return (
    <FavouriteIconBody isFavourite={isFavourite} onClick={toggleFavourite}>
      <HeartIcon />
    </FavouriteIconBody>
  );
};
