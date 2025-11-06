import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  id, 
  className = '', 
  background = 'white',
  padding = 'lg' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-blue-50 via-white to-white'
  };

  const paddings = {
    sm: 'py-12 px-4 sm:px-6 lg:px-8',
    md: 'py-16 px-4 sm:px-6 lg:px-8',
    lg: 'py-24 px-4 sm:px-6 lg:px-8'
  };

  return (
    <section id={id} className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
}