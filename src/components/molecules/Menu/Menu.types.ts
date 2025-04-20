/**
 * Menu
 */

import type { ReactElement } from 'react';

export interface MenuEntry {
  label: string;
  href: string;
}

export interface MenuProps {
  menuEntries: MenuEntry[];
}

export type Menu = (props: MenuProps) => ReactElement;
