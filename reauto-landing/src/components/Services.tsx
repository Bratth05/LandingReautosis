export default function Services() {
  const services = [
    {
      icon: '🚗',
      title: 'Repuestos Originales',
      description: 'Repuestos de calidad garantizada para todas las marcas de vehículos',
    },
    {
      icon: '🛠️',
      title: 'Accesorios Automotrices',
      description: 'Amplio catálogo de accesorios para personalizar tu vehículo',
    },
    {
      icon: '🚚',
      title: 'Entregas a Domicilio',
      description: 'Entregas rápidas en San Pedro Sula en 24 horas',
    },
    {
      icon: '📦',
      title: 'Envíos Nacionales',
      description: 'Realizamos envíos a todo Honduras con seguridad garantizada',
    },
    {
      icon: '💯',
      title: 'Garantía Total',
      description: 'Todos nuestros productos cuentan con garantía de calidad',
    },
    {
      icon: '💬',
      title: 'Asesoría Técnica',
      description: 'Nuestro equipo está disponible para asesorarte 24/7 por WhatsApp',
    },
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            ¿Por qué elegir <span className="text-[#1E4FA2]">ReAuto</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Somos tu aliado confiable en repuestos y accesorios automotrices con más de 10 años de experiencia
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 rounded-2xl border border-[#BFD1F3] bg-gradient-to-r from-[#EAF0FC] to-white p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Misión</h3>
              <p className="leading-relaxed text-slate-700">
                Proporcionar repuestos y accesorios automotrices de la más alta calidad a precios justos, con un servicio al cliente excepcional y entregas rápidas en todo Honduras.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Visión</h3>
              <p className="leading-relaxed text-slate-700">
                Ser la tienda de repuestos automotrices más confiable y accesible de Honduras, reconocida por nuestra calidad, servicio y compromiso con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
