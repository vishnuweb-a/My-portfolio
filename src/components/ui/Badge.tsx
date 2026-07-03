interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'outline';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default:
      'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]',
    accent:
      'bg-[var(--color-accent-muted)] text-[var(--color-accent)]',
    outline:
      'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-[var(--radius-sm)] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
