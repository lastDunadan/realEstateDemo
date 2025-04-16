/**
 * Button
 */

import type {ReactElement} from 'react';

export interface ButtonProps {
  label: string;
}

export type Button = (props: ButtonProps) => ReactElement;
