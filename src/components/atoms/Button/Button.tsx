import { ButtonBody } from './Button.styled';
import type { Button as ButtonType } from './Button.types';

export const Button: ButtonType = ({ label }) => (
  <ButtonBody>{label}</ButtonBody>
);
