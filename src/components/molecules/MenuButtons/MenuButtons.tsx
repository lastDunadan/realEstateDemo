import Button from '@/atoms/Button';
import { ACTION_TYPE, BUTTON_VARIANT } from '@/atoms/Button/Button.types';

import { MenuButtonsBody } from './MenuButtons.styled';
import type { MenuButtons as MenuButtonsType } from './MenuButtons.types';

export const MenuButtons: MenuButtonsType = () => (
  <MenuButtonsBody>
    <Button
      label="Login"
      variant={BUTTON_VARIANT.SECONDARY}
      actionType={ACTION_TYPE.FUNCTION_TRIGGER}
      payload={() => alert('Login not implemented...')}
    />
    <Button
      label="Sign up"
      variant={BUTTON_VARIANT.PRIMARY}
      actionType={ACTION_TYPE.FUNCTION_TRIGGER}
      payload={() => alert('User Profile not implemented...')}
    />
  </MenuButtonsBody>
);
