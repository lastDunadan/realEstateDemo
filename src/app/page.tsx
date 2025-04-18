'use client';
import type { ReactElement } from 'react';

import Button from '@/atoms/Button';
import { ACTION_TYPE, BUTTON_VARIANT } from '@/atoms/Button/Button.types';

const Home = (): ReactElement => (
  <>
    <Button
      label={'Button'}
      variant={BUTTON_VARIANT.SECONDARY}
      actionType={ACTION_TYPE.SUBMIT}
      isDisabled={true}
      payload={'/coming-soon'}
    />
  </>
);

export default Home;
