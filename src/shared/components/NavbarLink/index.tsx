import { rem, Tooltip, UnstyledButton } from '@mantine/core';
import type { Icon, IconProps } from '@tabler/icons-react';

interface ITypeNavbarLinkProps {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  active?: boolean;
  onClick?(): void;
  className?: string;
}

export const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
  className,
}: ITypeNavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick && onClick}
        className={className}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};
