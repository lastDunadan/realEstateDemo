/**
 * Responsive Menu. It will accept an array
 * of menu entries and render them as links.
 *
 * USAGE:
 * ```jsx
 *  <Menu
 *    menuEntries={[
 *      { label: 'Home', href: '/' },
 *      { label: 'About', href: '/about' },
 *      { label: 'Contact', href: '/contact' },
 *    ]}
 *  />
 * ```
 */

import type { ReactElement } from 'react';

export interface MenuEntry {
  label: string;
  href: string;
}

export interface MenuProps {
  /** The array of menu entries. */
  menuEntries: MenuEntry[];
}

export type Menu = (props: MenuProps) => ReactElement;
