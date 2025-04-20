import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

import MenuButtons from '@/molecules/MenuButtons';

import {
  DesktopMenu,
  ExitIcon,
  MenuBody,
  MenuButtonsWrapper,
  MenuIcon,
  MobileMenu,
} from './Menu.styled';
import type { Menu as MenuType } from './Menu.types';

export const Menu: MenuType = ({ menuEntries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <MenuBody>
      <MenuIcon onClick={handleToggle}>
        <Bars2Icon />
      </MenuIcon>

      <DesktopMenu>
        {menuEntries.map(entry => (
          <Link key={entry.label} href={entry.href}>
            {entry.label}
          </Link>
        ))}
      </DesktopMenu>

      {isOpen && (
        <MobileMenu onClick={e => e.stopPropagation()}>
          <ExitIcon onClick={handleToggle}>
            <XMarkIcon />
          </ExitIcon>
          {menuEntries.map(entry => (
            <a key={entry.label} href={entry.href} onClick={closeMenu}>
              {entry.label}
            </a>
          ))}
          <MenuButtonsWrapper>
            <MenuButtons />
          </MenuButtonsWrapper>
        </MobileMenu>
      )}
    </MenuBody>
  );
};
