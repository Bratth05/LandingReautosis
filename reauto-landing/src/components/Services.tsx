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
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="text-orange-600">ReAuto</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos tu aliado confiable en repuestos y accesorios automotrices con más de 10 años de experiencia
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar repuestos y accesorios automotrices de la más alta calidad a precios justos, con un servicio al cliente excepcional y entregas rápidas en todo Honduras.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la tienda de repuestos automotrices más confiable y accesible de Honduras, reconocida por nuestra calidad, servicio y compromiso con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
