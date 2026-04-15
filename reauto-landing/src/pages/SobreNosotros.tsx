import Seo from '../components/Seo';

const valores = [
  'Atencion humana y asesoramiento tecnico real',
  'Transparencia en precios y marcas',
  'Compromiso con entregas puntuales',
  'Enfoque en relaciones de largo plazo con clientes y talleres',
];

export default function SobreNosotros() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Seo
        title="Sobre Nosotros"
        description="Conoce la historia, mision y vision de ReAuto como tienda de repuestos automotrices en Honduras."
        path="/sobre-nosotros"
        keywords="sobre ReAuto, mision ReAuto, vision ReAuto"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-br from-[#0B1E4A] via-[#153A82] to-[#1E4FA2] px-8 py-12 text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Sobre ReAuto
          </p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Impulsamos cada viaje con repuestos confiables
          </h1>
          <p className="mt-6 max-w-3xl text-blue-100">
            Nacimos para resolver una necesidad clara: encontrar repuestos correctos, con garantia y sin perder tiempo. Desde San Pedro Sula servimos a clientes de todo el pais.
          </p>
        </header>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">Mision</h2>
            <p className="mt-4 text-slate-700">
              Entregar soluciones automotrices confiables, con asesoria experta y entregas eficientes para que cada cliente mantenga su vehiculo en optimas condiciones.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">Vision</h2>
            <p className="mt-4 text-slate-700">
              Ser la marca referente en repuestos y accesorios automotrices en Honduras por servicio, calidad y experiencia digital centrada en conversion y confianza.
            </p>
          </article>
        </div>

        <article className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Nuestros valores</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
            {valores.map((valor) => (
              <li key={valor} className="rounded-xl bg-slate-50 px-4 py-3">
                {valor}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
