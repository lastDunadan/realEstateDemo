/**
 *  TestimonyAvatar component that displays an avatar image
 *  with a border animation.
 *
 * USAGE:
 * ```jsx
 *  <TestimonyAvatar
 *    avatarUrl="https://example.com/avatar.jpg"
 *    isActive={true}
 *    onClick={setAvatarActive}
 *  />
 * ```
 */

import type { ReactElement } from 'react';
import type { RefObject } from 'react';

export interface UseAvatarBorderAnimationParams {
  /** Animation status */
  isActive: boolean;
  /** The circle element that will be animated */
  circleRef: RefObject<SVGCircleElement> | null;
  /** Root for animation scope */
  rootRef: RefObject<HTMLDivElement>;
  /** The duration of the animation in milliseconds */
  duration?: number;
}

export interface TestimonyAvatarProps {
  /** Avatar image URL */
  avatarUrl: string;
  /** Boolean that activates animation of a border */
  isActive: boolean;
  /** Function used to actiave avatar on click */
  onClick?: () => void;
}

export type UseAvatarBorderAnimation = (
  params: UseAvatarBorderAnimationParams,
) => void;
export type TestimonyAvatar = (props: TestimonyAvatarProps) => ReactElement;
