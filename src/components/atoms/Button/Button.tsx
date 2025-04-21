'use client';

import { ButtonBody, LinkButtonBody } from './Button.styled';
import type {
  ActionSelector as ActionSelectorType,
  Button as ButtonType,
} from './Button.types';
import { ACTION_TYPE } from './Button.types';

const actionSelector: ActionSelectorType = ({
  variant,
  label,
  actionType,
  isDisabled,
  payload,
}) => {
  switch (actionType) {
    case ACTION_TYPE.NAVIGATION:
      return (
        <LinkButtonBody
          variant={variant}
          href={payload ? (payload as string) : '#'}
          aria-label={label}
        >
          {label}
        </LinkButtonBody>
      );
    case ACTION_TYPE.SUBMIT:
      return (
        <ButtonBody
          type="submit"
          variant={variant}
          aria-label={label}
          disabled={isDisabled}
          form={payload as string}
        >
          {label}
        </ButtonBody>
      );
    case ACTION_TYPE.FUNCTION_TRIGGER:
      return (
        <ButtonBody
          onClick={payload as () => void}
          variant={variant}
          aria-label={label}
          disabled={isDisabled}
        >
          {label}
        </ButtonBody>
      );
    default:
      return <></>;
  }
};

export const Button: ButtonType = ({
  variant,
  label,
  actionType,
  isDisabled,
  payload,
}) => (
  <>
    {actionSelector({
      variant,
      label,
      actionType,
      payload,
      isDisabled,
    })}
  </>
);
