import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from './Icon';

const navItems = [
  { label: 'Inicio', to: '/inicio' },
  { label: 'Catalogo', to: '/inicio#productos' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Sobre nosotros', to: '/sobre-nosotros' },
];

const whatsappHref =
  'https://wa.me/50495206007?text=Hola%20ReAuto,%20quiero%20cotizar%20repuestos%20para%20mi%20vehiculo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (to: string) => {
    const [pathname, hash] = to.split('#');

    if (hash) {
      return location.pathname === pathname && location.hash === `#${hash}`;
    }

    return location.pathname === pathname;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-5 lg:gap-8">
          <Link to="/inicio" className="group flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.10)] transition-transform duration-300 group-hover:scale-[1.03]">
              <img
                src="/logo-reauto.png"
                alt="Logo de ReAuto"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="font-headline text-2xl font-bold uppercase tracking-tight text-slate-950">
                Re-Auto
              </p>
              <p className="font-body text-[11px] uppercase tracking-[0.36em] text-slate-500">
                Repuestos y Accesorios
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={`border-b-2 px-1 pb-1 font-headline text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isActive(item.to)
                    ? 'border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contacto"
            className="group flex min-w-[20rem] items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 transition-colors hover:border-blue-200 hover:bg-white hover:text-slate-700"
          >
            <span>Busca por pieza, VIN o marca...</span>
            <Icon
              name="search"
              className="h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-600"
            />
          </Link>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-headline text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-700"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={`block rounded-2xl border px-4 py-3 font-headline text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                  isActive(item.to)
                    ? 'border-blue-200 bg-blue-50 text-blue-700'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contacto"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <span>Buscar repuesto o compatibilidad</span>
              <Icon name="search" className="h-4 w-4" />
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-headline text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
