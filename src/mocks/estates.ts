import type { EstateCardProps } from '@/molecules/EstateCard/EstateCard.types';
import { ESTATE_TYPE } from '@/molecules/EstateCard/EstateCard.types';

export const HOUSES: EstateCardProps[] = [
  {
    coverImage: '/realEstateDemo/images/estates/estate1.jpg',
    estateType: ESTATE_TYPE.HOUSE,
    estatePrice: '$3,440',
    isRental: true,
    estateName: 'Palm Harbor',
    estateLocation: '2699 Green Valley, Highland Lake, FL',
  },
  {
    coverImage: '/realEstateDemo/images/estates/estate2.jpg',
    estateType: ESTATE_TYPE.HOUSE,
    estatePrice: '$6,550',
    isRental: true,
    estateName: 'St. Crystal',
    estateLocation: '210 US Highway, Highland Lake, FL',
  },
  {
    coverImage: '/realEstateDemo/images/estates/estate3.jpg',
    estateType: ESTATE_TYPE.HOUSE,
    estatePrice: '$4,950',
    isRental: true,
    estateName: 'Faulkner Ave',
    estateLocation: '909 Woodland St, Michigan, IN',
  },
];

export const APARTMENTS: EstateCardProps[] = [
  {
    coverImage: '/realEstateDemo/images/estates/estate4.jpg',
    estateType: ESTATE_TYPE.APARTMENT,
    estatePrice: '$2,140',
    isRental: true,
    estateName: 'Tarpon Bay',
    estateLocation: '2699 Green Valley, Highland Lake, FL',
  },
  {
    coverImage: '/realEstateDemo/images/estates/estate5.jpg',
    estateType: ESTATE_TYPE.APARTMENT,
    estatePrice: '$1,450',
    isRental: true,
    estateName: 'Cove Red',
    estateLocation: '2699 Green Valley, Highland Lake, FL',
  },
  {
    coverImage: '/realEstateDemo/images/estates/estate1.jpg',
    estateType: ESTATE_TYPE.APARTMENT,
    estatePrice: '$3,850',
    isRental: true,
    estateName: 'Beverly Springfield',
    estateLocation: '2699 Green Valley, Highland Lake, FL',
  },
];

export const ESTATES_DATA = {
  houses: HOUSES,
  apartments: APARTMENTS,
};
