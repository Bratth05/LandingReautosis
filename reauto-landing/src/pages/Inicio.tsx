import { Seo, HeroSection, ServiceCard, SectionHeader, ProductCard, CompatibilityTable } from '../components';
import { SERVICES, PRODUCTS, COMPATIBILITY_TABLE_DATA } from '../constants/data';

/**
 * Página de Inicio - ReAuto
 * ✅ Clean Code: Componentes reutilizables, sin duplicación
 * ✅ SOLID: Single Responsibility - cada componente tiene una responsabilidad
 * ✅ Separación: Datos en constants, componentes en components, página limpia
 */
export default function Inicio() {
  return (
    <>
      <Seo
        title="Inicio"
        description="ReAuto: repuestos y accesorios automotrices en Honduras con entregas en San Pedro Sula y envios nacionales."
        path="/inicio"
        keywords="repuestos automotrices, accesorios de auto, ReAuto Honduras, repuestos en San Pedro Sula"
      />

      {/* Hero Section */}
      <HeroSection
        title="PRECISIÓN"
        subtitle="GARANTIZADA"
        description="Accede a nuestra amplia base de datos técnica de repuestos. Cada componente está indexado por especificaciones OEM garantizando 100% compatibilidad con tu vehículo."
        bgImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop"
        actions={[
          {
            label: 'Catálogo de Repuestos',
            href: '#productos',
            isPrimary: true,
          },
          {
            label: 'Verificar VIN',
          },
        ]}
      />

      {/* Services Section */}
      <section id="servicios" className="py-12 md:py-16 px-6 md:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="productos" className="py-12 md:py-20 px-6 md:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Índice de Categoría"
            title="Catálogo de Repuestos"
            subtitle={`Mostrando 1-${PRODUCTS.length} de ${PRODUCTS.length} Componentes`}
          />

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Compatibility Table */}
          <CompatibilityTable rows={COMPATIBILITY_TABLE_DATA} />
        </div>
      </section>

      {/* TODO: Ubicación / Locations section will be added here */}
    </>
  );
}
