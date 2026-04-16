import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer.tsx';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import NoEncontrado from './pages/NoEncontrado';
import Politicas from './pages/Politicas';
import SobreNosotros from './pages/SobreNosotros';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');

      window.requestAnimationFrame(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash, location.pathname]);

  return null;
}

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3f4f8] text-slate-950">
      <Header />
      <ScrollManager />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<Navigate to="inicio" replace />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="sobre-nosotros" element={<SobreNosotros />} />
        <Route path="politicas" element={<Politicas />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}
