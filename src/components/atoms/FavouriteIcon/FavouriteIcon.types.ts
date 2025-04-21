/**
 * FavouriteIcon component
 * It is a button that can be clicked in order to toggle
 * the favourite state of an item.
 *
 * USAGE:
 * ```jsx
 * <FavouriteIcon
 *   isFavourite={false}
 *   toggleFavourite={() => console.log('Icon clicked')}
 * />
 * ```
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
