/**
 * Footer component. Used in the main layout file.
 * It contains the logo copyrights and various links.
 *
 * USAGE:
 * ```jsx
 *  <Footer />
 * ```
 */

import type { ReactElement } from 'react';

export type Footer = () => ReactElement;
export type UseFooter = () => { year: number | null };
