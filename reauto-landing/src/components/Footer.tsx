import { Link } from 'react-router-dom';

import Icon from './Icon';

const navigationLinks = [
  { label: 'Inicio', to: '/inicio' },
  { label: 'Catalogo', to: '/inicio#productos' },
  { label: 'Servicios', to: '/inicio#servicios' },
];

const companyLinks = [
  { label: 'Contacto', to: '/contacto' },
  { label: 'Sobre nosotros', to: '/sobre-nosotros' },
  { label: 'Politicas', to: '/politicas' },
];

const supportLinks = [
  { label: 'Compatibilidad OEM', to: '/contacto' },
  { label: 'Solicitud tecnica', to: '/contacto' },
  { label: 'Cobertura nacional', to: '/contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.18)]">
                <img
                  src="/logo-reauto.png"
                  alt="Logo de ReAuto"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-headline text-3xl font-bold tracking-tight text-blue-300">ReAuto</p>
                <p className="font-body text-[11px] uppercase tracking-[0.34em] text-slate-500">
                  Precision automotriz
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Repuestos, asesoria tecnica y compatibilidad real para talleres, flotillas y
              conductores en Honduras.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-headline text-[11px] font-bold uppercase tracking-[0.3em] text-white">
              Navegacion
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              {navigationLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block transition hover:text-blue-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-headline text-[11px] font-bold uppercase tracking-[0.3em] text-white">
              Empresa
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="block transition hover:text-blue-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-headline text-[11px] font-bold uppercase tracking-[0.3em] text-white">
              Soporte
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              {supportLinks.map((link) => (
                <Link key={link.label} to={link.to} className="block transition hover:text-blue-300">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Reauto-100086985931443/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                aria-label="Facebook"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/reauto22/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                aria-label="Instagram"
              >
                <Icon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/50495206007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-1 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-sm text-slate-500">
            © {currentYear} ReAuto. Datos pensados para compatibilidad, respuesta rapida y
            conversion.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Sistema activo
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Cobertura Honduras
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">OEM</span>
            <span className="rounded-full border border-white/10 px-3 py-1">24H</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
