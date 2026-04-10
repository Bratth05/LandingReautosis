import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ReAuto</h1>
              <p className="text-xs text-gray-600">Repuestos y Accesorios</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-orange-600 transition font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('ubicacion')} className="text-gray-700 hover:text-orange-600 transition font-medium">
              Ubicación
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-orange-600 transition font-medium">
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/50495206007?text=Hola%20ReAuto,%20me%20gustaría%20conocer%20más%20de%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m12-8v8m-12-8h12" />
            </svg>
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Servicios
            </button>
            <button onClick={() => scrollToSection('ubicacion')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Ubicación
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Contacto
            </button>
            <a
              href="https://wa.me/50495206007?text=Hola%20ReAuto,%20me%20gustaría%20conocer%20más%20de%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
