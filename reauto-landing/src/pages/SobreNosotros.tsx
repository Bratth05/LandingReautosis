import { Icon, Seo } from '../components';
import { COMPANY_VALUES } from '../constants/data';

const pillars = [
  {
    label: 'Mision',
    title: 'Resolver compras de repuestos con mas claridad.',
    description:
      'Ayudamos a clientes, talleres y flotillas a encontrar piezas confiables con acompanamiento tecnico y respuesta comercial agil.',
  },
  {
    label: 'Vision',
    title: 'Ser una referencia automotriz confiable en Honduras.',
    description:
      'Queremos crecer con una experiencia digital mas ordenada, una operacion mas precisa y una marca que inspire confianza.',
  },
];

const metrics = [
  { label: 'Enfoque', value: 'OEM' },
  { label: 'Cobertura', value: 'HN' },
  { label: 'Canal', value: 'WhatsApp' },
];

export default function SobreNosotros() {
  return (
    <>
      <Seo
        title="Sobre Nosotros"
        description="Conoce la historia, mision y propuesta de valor de ReAuto como tienda de repuestos automotrices en Honduras."
        path="/sobre-nosotros"
        keywords="sobre ReAuto, mision ReAuto, vision ReAuto"
      />

      <main className="bg-[#f3f4f8]">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid gap-6 rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:p-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-14 bg-blue-400" />
                <span className="font-headline text-[11px] font-bold uppercase tracking-[0.34em] text-blue-200">
                  Identidad de marca
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-headline text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white md:text-5xl">
                ReAuto nace para hacer mas simple la compra correcta de repuestos.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Nuestro enfoque mezcla criterio tecnico, respuesta humana y una experiencia visual
                mas calmada para clientes que necesitan precision y confianza.
              </p>
            </div>

            <div className="grid gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-headline text-3xl font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.label}
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8"
              >
                <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                  {pillar.label}
                </p>
                <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {pillar.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <Icon name="shield" className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight">
                Lo que defendemos
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Cada decision de diseno y contenido debe reforzar confianza, rapidez y lectura
                tecnica del inventario.
              </p>
            </div>

            <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8">
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                Valores de ReAuto
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {COMPANY_VALUES.map((value, index) => (
                  <div key={value} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <p className="font-headline text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                      Valor 0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
