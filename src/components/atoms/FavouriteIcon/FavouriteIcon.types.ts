/**
 * FavouriteIcon
 */

import type { ReactElement } from 'react';

export interface UseFavouriteIconReturnValues {
  /** Indicates whether the icon is in a favourite state. */
  isFavourite: boolean;
  /** Toggles the favourite state of the icon. */
  toggleFavourite: () => void;
}

export type FavouriteIcon = () => ReactElement;
export type UseFavouriteIcon = () => UseFavouriteIconReturnValues;
