import MainLogo from '@/atoms/MainLogo';
import Menu from '@/molecules/Menu';
import MenuButtons from '@/molecules/MenuButtons';

import { MenuButtonsWrapper, TopBarBody } from './TopBar.styled';
import type { TopBar as TopBarType } from './TopBar.types';

export const TopBar: TopBarType = () => (
  <TopBarBody>
    <MainLogo />
    <Menu
      menuEntries={[
        { label: 'Rent', href: '/' },
        { label: 'Buy', href: '/' },
        { label: 'Sell', href: '/' },
        { label: 'Manage Property', href: '/' },
        { label: 'Resources', href: '/' },
      ]}
    />
    <MenuButtonsWrapper>
      <MenuButtons />
    </MenuButtonsWrapper>
  </TopBarBody>
);
