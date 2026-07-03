interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
      id={id}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] prose-width leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
