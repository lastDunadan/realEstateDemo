/**
 * Testimonies
 */

import type { ReactElement } from 'react';

export interface Testimony {
  text: string;
  name: string;
  image: string;
}

export interface TestimoniesProps {
  testimonies: Testimony[];
}

export interface UseTestimoniesReturnValues {
  activeTestimony: Testimony;
  activeIndex: number;
  handleAvatarClick: (index: number) => void;
}

export type Testimonies = (props: TestimoniesProps) => ReactElement;
export type UseTestimonies = (
  params: Testimony[],
) => UseTestimoniesReturnValues;
