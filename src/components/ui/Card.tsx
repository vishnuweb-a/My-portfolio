import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        bg-[var(--color-bg-surface)] border border-[var(--color-border)]
        rounded-[var(--radius-card)] shadow-[var(--shadow-card)]
        ${paddings[padding]}
        ${hoverable ? 'transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
