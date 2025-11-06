import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`bg-white rounded-2xl border-2 border-gray-100 ${hover ? 'hover:border-blue-200 hover:shadow-lg transition-all' : ''} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}