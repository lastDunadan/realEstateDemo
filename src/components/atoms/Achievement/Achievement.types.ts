/**
 * Achievement component
 * It displays a count value of achievement and a title.
 *
 * USATE:
 * ```jsx
 * <Achievement
 *   countValue="100"
 *   title="Achievements"
 * />
 * ```
 */

import type { ReactElement } from 'react';

export interface AchievementProps {
  /** The count value of the achievement */
  countValue: string;
  /** The title of the achievement */
  title: string;
}

export type Achievement = (props: AchievementProps) => ReactElement;
