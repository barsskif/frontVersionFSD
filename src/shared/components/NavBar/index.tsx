import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';

import { clearAllChat } from '@src/features/Chat/api/clearAllChat';
import {
  IconMessage2,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconClearFormatting,
} from '@tabler/icons-react';

import classes from './NavbarMinimal.module.css';

interface TypeNavbarLinkProps {
  icon: typeof IconMessage2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: TypeNavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
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

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleClickNav(link.uri, index)}
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
        />
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
};
