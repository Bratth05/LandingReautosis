import { useState } from 'react';

import Icon from './Icon';

interface ProductCardProps {
  id: string;
  title: string;
  oemNumber: string;
  image: string;
  status: 'En Stock' | 'Pedido Especial' | 'Disponible';
  specs: { label: string; value: string }[];
  compatibility: string[];
}

const statusClassName = {
  'En Stock': 'bg-emerald-50 text-emerald-700',
  'Pedido Especial': 'bg-amber-50 text-amber-700',
  Disponible: 'bg-slate-100 text-slate-700',
};

const placeholderTone = {
  'turbo-vx450': 'from-slate-900 via-blue-950 to-slate-900',
  'piston-kit-8': 'from-slate-900 via-slate-800 to-blue-950',
  'camshaft-stage2': 'from-blue-950 via-slate-900 to-slate-950',
};

function getTagClassName(tag: string) {
  const value = tag.toLowerCase();

  if (value.includes('extra') || value.includes('no ')) {
    return 'bg-red-50 text-red-700';
  }

  return 'bg-slate-100 text-slate-600';
}

export default function ProductCard({
  id,
  title,
  oemNumber,
  image,
  status,
  specs,
  compatibility,
}: ProductCardProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_60px_rgba(37,99,235,0.10)]">
      <div className="relative h-60 overflow-hidden bg-slate-100">
        {!hasImageError ? (
          <img
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${placeholderTone[id as keyof typeof placeholderTone] ?? 'from-slate-900 to-blue-950'}`}
          >
            <div className="rounded-[26px] border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <Icon name="catalog" className="h-6 w-6" />
              </div>
              <p className="mt-4 font-headline text-[11px] font-bold uppercase tracking-[0.28em] text-slate-300">
                Repuesto tecnico
              </p>
            </div>
          </div>
        )}

        <span
          className={`absolute left-5 top-5 inline-flex rounded-full px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-[0.2em] ${statusClassName[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
              Linea destacada
            </p>
            <h3 className="mt-3 font-headline text-[1.9rem] font-bold leading-[1.05] tracking-tight text-slate-950">
              {title}
            </h3>
          </div>

          <span className="inline-flex shrink-0 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 font-headline text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
            OEM #{oemNumber}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 rounded-[24px] bg-slate-50 p-4">
          {specs.map((spec) => (
            <div key={`${title}-${spec.label}`} className="rounded-2xl bg-white px-4 py-3">
              <p className="font-headline text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
                {spec.label}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-950">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            Compatibilidad
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {compatibility.map((tag) => (
              <span
                key={`${title}-${tag}`}
                className={`rounded-full px-3 py-1.5 text-[11px] ${getTagClassName(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-2xl bg-slate-950 px-4 py-3 font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-700"
            >
              Hoja tecnica
            </button>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-50"
              aria-label={`Ver ${title}`}
            >
              <Icon name="eye" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
