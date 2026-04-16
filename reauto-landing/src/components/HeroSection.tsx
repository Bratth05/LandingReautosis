import type { ReactNode } from 'react';

import Icon from './Icon';

interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  isPrimary?: boolean;
}

interface HeroStat {
  label: string;
  value: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  description?: string;
  bgImage?: string;
  actions?: HeroAction[];
  stats?: HeroStat[];
  minHeight?: string;
}

function HeroActionButton({ action }: { action: HeroAction }) {
  const className = `inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-headline text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
    action.isPrimary
      ? 'bg-blue-700 text-white hover:bg-blue-600'
      : 'border border-white/15 bg-white/10 text-white hover:bg-white/16'
  }`;

  const content = (
    <>
      <span>{action.label}</span>
      {action.isPrimary && <Icon name="arrow-right" className="h-4 w-4" />}
    </>
  );

  if (action.href) {
    return (
      <a href={action.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className}>
      {content}
    </button>
  );
}

export default function HeroSection({
  eyebrow = 'Sistema de precision',
  title,
  subtitle,
  description,
  bgImage,
  actions,
  stats,
  minHeight = '30rem',
}: HeroSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.10)]"
      style={{ minHeight }}
    >
      {bgImage && (
        <div className="absolute inset-0">
          <img alt="" className="h-full w-full object-cover opacity-20" src={bgImage} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_34%),linear-gradient(125deg,rgba(2,6,23,0.96)_22%,rgba(15,23,42,0.88)_55%,rgba(15,23,42,0.68)_100%)]" />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:92px_92px]" />

      <div className="relative z-10 grid h-full gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.25fr)_22rem] lg:p-10">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-14 bg-blue-400" />
            <span className="font-headline text-[11px] font-bold uppercase tracking-[0.34em] text-blue-200">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-headline text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
            {subtitle && <br />}
            {subtitle && <span className="text-blue-400">{subtitle}</span>}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}

          {actions && actions.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <HeroActionButton key={`${action.label}-${action.href ?? 'button'}`} action={action} />
              ))}
            </div>
          )}
        </div>

        <div className="grid content-start gap-4">
          <div className="rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Centro de operaciones
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              ReAuto organiza inventario, soporte y compatibilidad en un mismo flujo visual, mas
              limpio y mas facil de recorrer.
            </p>
          </div>

          {stats && stats.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-slate-900/65 px-5 py-4 backdrop-blur-md"
                >
                  <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-headline text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
