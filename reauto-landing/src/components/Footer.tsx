import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Inicio', to: '/inicio' },
  { label: 'Servicios', to: '/inicio#servicios' },
  { label: 'Ubicación', to: '/inicio#ubicacion' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
];

const legalLinks = [
  { label: 'Políticas y Términos', to: '/politicas' },
  { label: 'Privacidad', to: '/politicas#privacidad' },
  { label: 'Cookies', to: '/politicas#cookies' },
  { label: 'Términos', to: '/politicas#terminos' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1E4A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E4FA2]">
                <span className="text-xl font-bold">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ReAuto</h3>
                <p className="text-xs text-blue-100">Repuestos y Accesorios</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-blue-100">
              Plataforma de repuestos automotrices con foco en conversion, confianza y cobertura en Honduras.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Navegación</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contacto">
            <h4 className="mb-4 text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm text-blue-100">
              <a
                href="https://wa.me/50495206007"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                +504 9520-6007
              </a>
              <p>San Pedro Sula, Cortés, Honduras</p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.facebook.com/p/Reauto-100086985931443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold transition hover:bg-white/10"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/reauto22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold transition hover:bg-white/10"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-blue-100">
          <p>
            © {currentYear} ReAuto. Todos los derechos reservados.
          </p>
          <p className="mt-2">Base preparada para SEO técnico, captación y monetización futura.</p>
        </div>
      </div>
    </footer>
  );
}
