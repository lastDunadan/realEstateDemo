/**
 * EstateCard
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
  /** If true, monthly price indicator will appear */
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
