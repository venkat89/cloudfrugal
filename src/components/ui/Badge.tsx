import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: LucideIcon;
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'info', icon: Icon, size = 'md' }: BadgeProps) {
  const variants = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm'
  };

  return (
    <div className={`inline-flex items-center gap-2 ${variants[variant]} ${sizes[size]} rounded-full font-medium`}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  );
}