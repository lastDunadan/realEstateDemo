/**
 *  TestimonyAvatar
 */

import type { ReactElement } from 'react';
import type { RefObject } from 'react';

export interface TestimonyAvatarProps {
  /** Avatar image URL */
  avatarUrl: string;
  /** Boolean that activates animation of a border */
  isActive: boolean;
}

export type UseAvatarBorderAnimation = (
  isActive: boolean,
  circleRef: RefObject<SVGCircleElement> | null,
  rootRef: RefObject<HTMLDivElement>,
  duration?: number,
) => void;
export type TestimonyAvatar = (props: TestimonyAvatarProps) => ReactElement;
