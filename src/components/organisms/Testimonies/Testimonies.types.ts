/**
 * Testimonies componet. It renders an animated gallery of testimonies.
 * It is used to display the testimonials of the users.
 *
 * USAGE:
 * ```jsx
 *  <Testimonies
 *    testimonies={testimoniesData[]}
 *  />
 * ```
 */

import type { ReactElement } from 'react';

export interface Testimony {
  text: string;
  name: string;
  image: string;
}

export interface TestimoniesProps {
  /** The testimonies to be displayed. */
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
