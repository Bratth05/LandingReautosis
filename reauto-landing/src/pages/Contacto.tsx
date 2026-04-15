import { useState } from 'react';
import { Seo, InfoCard, FormField } from '../components';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/data';

/**
 * Página de Contacto - ReAuto
 * ✅ Clean Code: Componentes reutilizables
 * ✅ SOLID: Datos centralizados en constants
 * ✅ Sin duplicación: Usa mapping de arrays para tarjetas y servicios
 */
export default function Contacto() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    partNumber: '',
    subject: 'oem',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const additionalServices = [
    { icon: '📋', title: 'Cotizaciones Rápidas', description: 'Obtén presupuestos para tus repuestos en menos de 1 hora' },
    { icon: '🔍', title: 'Verificación de Compatibilidad', description: 'Confirma que el repuesto es compatible con tu vehículo' },
    { icon: '📦', title: 'Seguimiento de Pedidos', description: 'Rastreo completo del estado de tu entrega' },
  ];

  return (
    <>
      <Seo
        title="Contacto"
        description="Contacta a ReAuto - Repuestos automotrices en Honduras. WhatsApp, teléfono y ubicación en San Pedro Sula."
        path="/contacto"
        keywords="contacto ReAuto, WhatsApp ReAuto, ubicacion ReAuto, soporte técnico"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative py-16 md:py-24 px-6 md:px-8 overflow-hidden bg-surface-container-low border-b border-outline-variant/10">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="font-headline text-primary uppercase tracking-widest text-xs font-bold">Soporte Técnico</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-on-surface mb-6 max-w-4xl">
              Contacta con ReAuto
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Acceso directo a nuestro equipo de soporte. Resolvemos especificaciones OEM, verificamos compatibilidad y coordinamos entregas en Honduras.
            </p>
          </div>
        </div>

        {/* Information & Form Layout */}
        <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <InfoCard {...CONTACT_INFO.mainOffice} />
              <InfoCard {...CONTACT_INFO.technicalSupport} />
              <InfoCard {...CONTACT_INFO.shipping} />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container shadow-sm border border-outline-variant/20 p-6 md:p-10 rounded-lg">
              <div className="mb-8 md:mb-10">
                <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight mb-2 text-on-surface">
                  Solicitud Técnica
                </h2>
                <p className="font-body text-on-surface-variant">
                  Envía tu consulta de repuestos o compatibilidad. Responderemos a la brevedad.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Nombre Completo"
                    type="text"
                    name="fullName"
                    placeholder="Tu nombre"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormField
                    label="Teléfono/WhatsApp"
                    type="tel"
                    name="phone"
                    placeholder="+504 XXXX-XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Número de Parte (Opcional)"
                    type="text"
                    name="partNumber"
                    placeholder="Ej: PP-9902-BX"
                    value={formData.partNumber}
                    onChange={handleInputChange}
                  />
                  <FormField
                    label="Asunto"
                    type="select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    options={[
                      { label: 'Consulta Técnica OEM', value: 'oem' },
                      { label: 'Verificar Compatibilidad', value: 'compatibility' },
                      { label: 'Cotización de Repuestos', value: 'quote' },
                      { label: 'Estado de Envío', value: 'shipping' },
                      { label: 'Otro', value: 'other' },
                    ]}
                    required
                  />
                </div>

                <FormField
                  label="Mensaje"
                  type="textarea"
                  name="message"
                  placeholder="Describe tu consulta en detalle..."
                  rows={5}
                  required
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-14 bg-primary text-on-primary font-headline font-bold uppercase tracking-wider hover:bg-primary-container transition-all flex items-center justify-center gap-3 rounded"
                  >
                    <span>Enviar Solicitud</span>
                    <span>📤</span>
                  </button>
                  <p className="mt-4 text-[10px] text-on-surface-variant font-headline text-center">
                    Transmisión segura - Tu información está protegida
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-80 md:h-96 relative mt-12 md:mt-16 group">
          <iframe
            title="Ubicación de ReAuto"
            src={SOCIAL_LINKS.maps}
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        {/* Additional Services Section */}
        <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-on-surface">
            Servicios Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/20 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{service.title}</h3>
                <p className="font-body text-sm text-on-surface-variant">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
