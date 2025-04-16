import '@emotion/react';
import { Theme as ThemeType } from '@/styles/types.ts';

declare module '@emotion/react' {
  export interface Theme extends Required<ThemeType> {}
}
