import type { Button as ButtonType } from './Button.types';
import { ButtonBody } from './Button.styled';

export const Button: ButtonType = ({ label }) => {

  return (
    <ButtonBody>
      {label}
    </ButtonBody>
  );
}
