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
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-3xl">
        {label && (
          <span className="font-headline text-[11px] font-bold uppercase tracking-[0.34em] text-blue-700">
            {label}
          </span>
        )}
        <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{description}</p>}
      </div>

      {subtitle && (
        <p className="font-headline text-[11px] uppercase tracking-[0.28em] text-slate-400 md:max-w-xs md:text-right">
          {subtitle}
        </p>
      )}
    </div>
  );
}
