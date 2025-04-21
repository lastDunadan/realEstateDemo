/**
 * Achievement
 */

import type { ReactElement } from 'react';

export interface AchievementProps {
  countValue: string;
  title: string;
}

export type Achievement = (props: AchievementProps) => ReactElement;
