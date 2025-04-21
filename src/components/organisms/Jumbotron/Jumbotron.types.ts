/**
 * Jumbotron component. It renders a jumbotron section
 * on the MainPage.
 */

import type { ReactElement } from 'react';
import type React from 'react';

export interface UseJumbotronAnimationValues {
  /** Root for animation scope */
  rootRef: React.RefObject<HTMLDivElement | null>;
  /** Headline element */
  headlineRef: React.RefObject<HTMLHeadingElement | null>;
  /** Paragraph element */
  paragraphRef: React.RefObject<HTMLParagraphElement | null>;
  /** Achievements element */
  achievementsRef: React.RefObject<HTMLDivElement | null>;
}

export type UseJumbotronAnimation = () => UseJumbotronAnimationValues;

export type Jumbotron = () => ReactElement;
