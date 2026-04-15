interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  subtitle?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-12 border-b border-slate-300 dark:border-slate-700 pb-4 md:pb-6">
      {label && (
        <span className="font-headline text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
          {label}
        </span>
      )}
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 uppercase tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-3xl">{description}</p>
      )}
      {subtitle && (
        <p className="text-right text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-widest">
          {subtitle}
        </p>
      )}
    </div>
  );
}
