/**
 * EstateCard is a component that displays summary
 * information about a real estate property.
 * It includes a cover image, type of estate, etc.
 *
 * USAGE:
 * ```jsx
 *  <EstateCard
 *    coverImage={'path/to/image.jpg'}
 *    estateType={ESTATE_TYPE.HOUSE}
 *    estatePrice={'$1,200'}
 *    isRental={true}
 *    estateName={'Beautiful House'}
 *    estateLocation={'123 Main St, City, Country'}
 *  />
 * ```
 */

import type { ReactElement } from 'react';

export enum ESTATE_TYPE {
  APARTMENT = 'Apartment',
  HOUSE = 'House',
}

export interface EstateCardProps {
  /** Estate cover image */
  coverImage: string;
  /** Type of estate for sell/rent */
  estateType: ESTATE_TYPE;
  /** Price of buy/rent */
  estatePrice: string;
  /** If true, the monthly price indicator will appear */
  isRental: boolean;
  /** CTA name of an estate */
  estateName: string;
  /** Estate address/localtion */
  estateLocation: string;
}

export type EstateTypeTagSelector = (
  estateType: ESTATE_TYPE,
) => ReactElement | null;
export type EstateCard = (props: EstateCardProps) => ReactElement;
