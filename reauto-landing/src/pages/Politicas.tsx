import { Icon, Seo } from '../components';

const policySections = [
  {
    id: 'privacidad',
    icon: 'privacy' as const,
    label: 'Privacidad',
    title: 'Politica de privacidad',
    content: [
      'ReAuto recopila solo los datos necesarios para responder consultas, gestionar cotizaciones y coordinar entregas.',
      'La informacion puede incluir nombre, telefono, referencia de pieza y detalles del vehiculo. El usuario puede solicitar revision o eliminacion por los canales oficiales.',
    ],
  },
  {
    id: 'cookies',
    icon: 'document' as const,
    label: 'Cookies',
    title: 'Politica de cookies',
    content: [
      'Este sitio puede usar cookies tecnicas, analiticas y de rendimiento para mejorar experiencia, medir trafico y optimizar campanas futuras.',
      'Cuando se implemente un gestor de consentimiento, el usuario podra ajustar sus preferencias por categoria.',
    ],
  },
  {
    id: 'terminos',
    icon: 'terms' as const,
    label: 'Terminos',
    title: 'Terminos y condiciones',
    content: [
      'La disponibilidad de productos, precios y tiempos de entrega depende de inventario, cobertura geografica y confirmacion comercial.',
      'Las marcas y logotipos de terceros pertenecen a sus propietarios y se usan solo como referencia de compatibilidad automotriz.',
    ],
  },
];

export default function Politicas() {
  return (
    <>
      <Seo
        title="Politicas y Terminos"
        description="Politicas de privacidad, cookies y terminos de uso de ReAuto para operar de forma clara y confiable."
        path="/politicas"
        keywords="politica privacidad ReAuto, terminos y condiciones ReAuto, cookies"
      />

      <main className="bg-[#f3f4f8]">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-14 bg-blue-600" />
                <span className="font-headline text-[11px] font-bold uppercase tracking-[0.34em] text-blue-700">
                  Base legal
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-headline text-4xl font-bold uppercase tracking-tight text-slate-950 md:text-5xl">
                Politicas claras para operar con mas confianza.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Ultima actualizacion: 14 de abril de 2026. Esta vista ordena lo esencial para
                privacidad, uso del sitio y reglas comerciales de ReAuto.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="font-headline text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">
                Acceso directo
              </p>
              <div className="mt-5 space-y-3">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
                  >
                    <span>{section.title}</span>
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-5">
            {policySections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon name={section.icon} className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                      {section.label}
                    </p>
                    <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-slate-950">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="max-w-4xl text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
