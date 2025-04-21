/**
 * Universal Button component
 * It can be used for different purposes like navigation,
 * function trigger or form submission.
 *
 * USAGE:
 * ```jsx
 * <Button
 *   label="Click me"
 *   variant={BUTTON_VARIANT.PRIMARY}
 *   actionType={ACTION_TYPE.FUNCTION_TRIGGER}
 *   payload={() => console.log('Button clicked')}
 *   isDisabled={false}
 * />
 * ```
 */

import type { ReactElement } from 'react';

export enum BUTTON_VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ACTION_TYPE {
  FUNCTION_TRIGGER = 'function-trigger',
  SUBMIT = 'submit',
  NAVIGATION = 'navigation',
}

export interface ButtonProps {
  /** The label of the button. */
  label: string;
  /** The variant of the button. Either primary or secondary. */
  variant: BUTTON_VARIANT;
  /** The action type of the button. Either function-trigger, submit or navigation. */
  actionType: ACTION_TYPE;
  /**
   * Payload, either a function, url or form id.
   * For button of type ACTION_TYPE.FUNCTION_TRIGGER the payload should be a function.
   * For button of type ACTION_TYPE.NAVIGATION the payload should be url.
   * For button of type ACTION_TYPE.SUBMIT the payload should be form id.
   * If no payload is provided, the button will not perform any action.
   */
  payload?: string | (() => void);
  /** If true, the button is disabled. */
  isDisabled?: boolean;
}
export type ActionSelector = (props: ButtonProps) => ReactElement;
export type Button = (props: ButtonProps) => ReactElement;
