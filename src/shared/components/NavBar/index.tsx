import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Stack } from '@mantine/core';

import { clearAllChat } from '@src/features/Chat/api/clearAllChat';
import {
  IconMessage2,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconClearFormatting,
} from '@tabler/icons-react';
import { NavbarLink } from '@src/shared/components/NavbarLink';

import classes from './NavbarMinimal.module.css';

const navBarLinks = [
  { icon: IconMessage2, label: 'Чат', uri: '/' },
  { icon: IconSettings, label: 'Настройки', uri: '/settings' },
];

export const NavbarPanel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const handleClickNav = (uri: string, index: number) => {
    setActive(index);
    navigate(uri);
  };

  const handleClearChat = async () => {
    const status = await clearAllChat();

    if (status === 'succes') {
      location.reload();
    }
  };

  const links = navBarLinks.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleClickNav(link.uri, index)}
      className={classes.link}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={2}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={2}>
        <NavbarLink
          icon={IconClearFormatting}
          label="Clerar chat"
          onClick={handleClearChat}
          className={classes.link}
        />
        <NavbarLink
          icon={IconSwitchHorizontal}
          label="Change account"
          className={classes.link}
        />
        <NavbarLink icon={IconLogout} label="Logout" className={classes.link} />
      </Stack>
    </nav>
  );
};
