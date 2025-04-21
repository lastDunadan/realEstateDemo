import { LogoBody, LogoImage, LogoText } from './MainLogo.styled';
import type { MainLogo as MainLogoType } from './MainLogo.types';

export const MainLogo: MainLogoType = () => (
  <LogoBody href="/" aria-label="Estatery, main page.">
    <LogoImage src="images/logo.svg" alt="Estatery" width={32} height={32} />
    <LogoText>Estatery</LogoText>
  </LogoBody>
);
