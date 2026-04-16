import heroImage from '../assets/hero.png';
import {
  CompatibilityTable,
  HeroSection,
  Icon,
  ProductCard,
  SectionHeader,
  Seo,
  ServiceCard,
} from '../components';
import { COMPATIBILITY_TABLE_DATA, PRODUCTS, SERVICES } from '../constants/data';

const quickAccessItems = [
  {
    icon: 'catalog' as const,
    title: 'Catalogo OEM',
    description: 'Busqueda guiada por pieza, marca y serie.',
    href: '/inicio#productos',
  },
  {
    icon: 'compatibility' as const,
    title: 'Compatibilidad VIN',
    description: 'Validacion tecnica antes de cotizar.',
    href: '/contacto',
  },
  {
    icon: 'delivery' as const,
    title: 'Cobertura nacional',
    description: 'Entregas en San Pedro Sula y envios a todo el pais.',
    href: '/contacto',
  },
  {
    icon: 'support' as const,
    title: 'Asesoria humana',
    description: 'Soporte para talleres, flotillas y clientes finales.',
    href: '/contacto',
  },
];

export default function Inicio() {
  return (
    <>
      <Seo
        title="Inicio"
        description="ReAuto: repuestos y accesorios automotrices en Honduras con entregas en San Pedro Sula y envios nacionales."
        path="/inicio"
        keywords="repuestos automotrices, accesorios de auto, ReAuto Honduras, repuestos en San Pedro Sula"
      />

      <main className="min-h-screen bg-[#f3f4f8]">
        {/* ─── Contenedor con márgenes laterales generosos ─── */}
        <div className="mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <div className="flex flex-col gap-14">

            {/* ═══════════════ HERO ═══════════════ */}
            <HeroSection
              eyebrow="Base tecnica ReAuto"
              title="Precision"
              subtitle="garantizada."
              description="Accede a una seleccion de repuestos pensada para compatibilidad real. Cada componente se presenta con ficha clara, enfoque OEM y soporte comercial para Honduras."
              bgImage={heroImage}
              actions={[
                { label: 'Catalogo tecnico', href: '#productos', isPrimary: true },
                { label: 'Verificar compatibilidad', href: '/contacto' },
              ]}
              stats={[
                { label: 'Respuesta', value: '< 1 hora' },
                { label: 'Cobertura', value: 'Honduras' },
                { label: 'Inventario', value: `${PRODUCTS.length}+ lineas` },
              ]}
            />

            {/* ═══════════════ ACCESO RÁPIDO ═══════════════ */}
            <section aria-label="Acceso rapido" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {quickAccessItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-headline text-lg font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </a>
              ))}
            </section>

            {/* ═══════════════ SERVICIOS ═══════════════ */}
            <section
              id="servicios"
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="p-8 md:p-10 lg:p-12">
                <SectionHeader
                  label="Operacion"
                  title="Servicios que sostienen cada venta"
                  description="Cada bloque esta pensado para guiar al usuario, responder rapido y reducir la friccion visual del sitio."
                  subtitle="Estructura preparada para cotizacion y confianza"
                />

                <div className="grid gap-6 md:grid-cols-3">
                  {SERVICES.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════ PRODUCTOS ═══════════════ */}
            <section
              id="productos"
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="p-8 md:p-10 lg:p-12">
                <SectionHeader
                  label="Indice de categoria"
                  title="Catalogo de repuestos"
                  description="Tarjetas mas limpias, mejor aire visual y una lectura tecnica mas ordenada para cada componente."
                  subtitle={`Mostrando 1–${PRODUCTS.length} de ${PRODUCTS.length} componentes`}
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>

              {/* ── Tabla de compatibilidad ── */}
              <div className="border-t border-slate-200 bg-slate-50/60 p-8 md:p-10 lg:p-12">
                <CompatibilityTable rows={COMPATIBILITY_TABLE_DATA} />
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
