/**
 * TabSwitch
 */

import type { ReactElement } from 'react';

export type TabSwitchValue = 'houses' | 'apartments';

export interface TabSwitchProps {
  /**
   * The current value of the TabSwitch, either 'houses' or 'apartments'.
   */
  value: TabSwitchValue;
  /**
   * Callback function to handle value changes.
   * @param value - The new value of the TabSwitch.
   */
  onChange: (value: TabSwitchValue) => void;
}

export type TabSwitch = (props: TabSwitchProps) => ReactElement;
