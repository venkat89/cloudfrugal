import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl'
  };

  return (
    <div className={`${sizes[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
}