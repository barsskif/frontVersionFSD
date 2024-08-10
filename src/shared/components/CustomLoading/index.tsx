import { Loader } from '@mantine/core';

interface ICustomLoadingProps {
  loading: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  type?: 'bars' | 'dots' | 'oval';
  className?: string;
}

export const CustomLoading = ({
  loading,
  className,
  size = 'xs',
  type = 'oval',
}: ICustomLoadingProps) => {
  if (!loading) return null;

  return (
    <Loader color="indigo" className={className} size={size} type={type} />
  );
};
