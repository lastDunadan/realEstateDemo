export type ViewportName =
  | 'hdScreen'
  | 'desktop'
  | 'laptop'
  | 'tablet'
  | 'mobile';

export interface Palette {
  grays: {
    white: string;
    light: string;
    gray: string;
    dark: string;
    black: string;
  };
  purples: {
    lighterTransparent: string;
    lighter: string;
    light: string;
    purple: string;
  };
  blues: {
    light: string;
    blue: string;
  };
}

export interface Layers {
  standard: string;
  medium: string;
  high: string;
  higher: string;
  top: string;
  veryTop: string;
  overlay: string;
  modalContent: string;
  guard: string;
}

export interface Theme {
  palette: Palette;
  interfaceWidth: string;
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    jakartaSans: string;
  };
  zIndex: Layers;
}
