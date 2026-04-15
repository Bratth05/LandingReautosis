import { Link } from 'react-router-dom';

import Seo from '../components/Seo';

export default function NoEncontrado() {
  return (
    <section className="bg-white py-24">
      <Seo
        title="Pagina no encontrada"
        description="La pagina que buscas no existe. Regresa al inicio de ReAuto."
        path="/404"
        noIndex
      />

      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E4FA2]">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Esta pagina no esta disponible
        </h1>
        <p className="mt-4 text-slate-600">
          El enlace puede estar roto o la URL fue cambiada. Puedes continuar desde el inicio.
        </p>

        <Link
          to="/inicio"
          className="mt-8 inline-flex rounded-xl bg-[#0B1E4A] px-6 py-3 font-semibold text-white transition hover:bg-[#102C68]"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
