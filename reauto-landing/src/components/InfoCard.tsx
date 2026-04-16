import type { ReactNode } from 'react';

import Icon from './Icon';

interface InfoCardProps {
  icon: 'location' | 'support' | 'shipping';
  title: string;
  items: { label: string; value: string | ReactNode }[];
  borderColor?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'default' | 'highlighted';
}

const accentClassName = {
  primary: 'from-blue-50 to-white text-blue-700',
  secondary: 'from-slate-100 to-white text-slate-700',
  tertiary: 'from-amber-50 to-white text-amber-700',
};

export default function InfoCard({
  icon,
  title,
  items,
  borderColor = 'primary',
  variant = 'default',
}: InfoCardProps) {
  const isHighlighted = variant === 'highlighted';

  return (
    <article
      className={`rounded-[28px] border p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] md:p-7 ${
        isHighlighted ? 'border-slate-900 bg-slate-950 text-white' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
            isHighlighted
              ? 'bg-white/10 text-blue-300'
              : `bg-gradient-to-br ${accentClassName[borderColor]}`
          }`}
        >
          <Icon name={icon} className="h-6 w-6" />
        </div>

        <div>
          <p
            className={`font-headline text-[10px] font-bold uppercase tracking-[0.3em] ${
              isHighlighted ? 'text-slate-400' : 'text-slate-400'
            }`}
          >
            Nodo operativo
          </p>
          <h3 className="mt-2 font-headline text-2xl font-bold tracking-tight">{title}</h3>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={`${title}-${item.label}`}
            className={`rounded-2xl border px-4 py-4 ${
              isHighlighted
                ? 'border-white/10 bg-white/5'
                : 'border-slate-100 bg-slate-50'
            }`}
          >
            <p
              className={`font-headline text-[10px] font-bold uppercase tracking-[0.26em] ${
                isHighlighted ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              {item.label}
            </p>
            <div className={`mt-2 text-sm leading-7 ${isHighlighted ? 'text-white' : 'text-slate-700'}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
