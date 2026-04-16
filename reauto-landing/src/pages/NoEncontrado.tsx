import { Link } from 'react-router-dom';

import { Icon, Seo } from '../components';

export default function NoEncontrado() {
  return (
    <>
      <Seo
        title="Pagina no encontrada"
        description="La pagina que buscas no existe. Regresa al inicio de ReAuto."
        path="/404"
        noIndex
      />

      <main className="bg-[#f3f4f8]">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-16 text-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.36em] text-blue-300">
                Error 404
              </p>
              <h1 className="mt-6 font-headline text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Esta ruta no esta disponible.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                El enlace pudo cambiar o la vista ya no existe. Te devolvemos al punto de entrada
                principal para seguir navegando.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/inicio"
                  className="inline-flex items-center gap-3 rounded-2xl bg-blue-700 px-6 py-4 font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-600"
                >
                  <span>Volver al inicio</span>
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>

                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-6 py-4 font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/14"
                >
                  Contactar soporte
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
