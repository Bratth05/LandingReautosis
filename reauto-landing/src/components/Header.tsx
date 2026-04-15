import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', to: '/inicio' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
  ];

  const isActive = (to: string) => location.pathname === to;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <nav className="mx-auto max-w-full px-6 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/inicio" className="flex items-center gap-2 flex-shrink-0" onClick={closeMenu}>
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-slate-900 dark:text-white">ReAuto</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={`text-sm font-semibold transition ${
                  isActive(item.to)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/50495206007?text=Hola%20ReAuto,%20me%20gustaría%20conocer%20más%20de%20sus%20repuestos"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 dark:text-slate-300"
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={`block px-4 py-2 text-sm font-medium rounded transition ${
                  isActive(item.to)
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/50495206007?text=Hola%20ReAuto,%20me%20gustaría%20conocer%20más%20de%20sus%20repuestos"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
              onClick={closeMenu}
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
