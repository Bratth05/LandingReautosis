import { useState, type ChangeEvent, type FormEvent } from 'react';

import { FormField, Icon, InfoCard, Seo } from '../components';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/data';

const additionalServices = [
  {
    icon: 'document' as const,
    title: 'Cotizaciones rapidas',
    description: 'Preparamos solicitudes de precio claras para repuestos, accesorios y piezas especiales.',
  },
  {
    icon: 'compatibility' as const,
    title: 'Revision de compatibilidad',
    description: 'Validamos referencia, vehiculo y observaciones tecnicas antes de confirmar la compra.',
  },
  {
    icon: 'tracking' as const,
    title: 'Seguimiento de pedido',
    description: 'Mantenemos comunicacion sobre disponibilidad, despacho y avance de entrega.',
  },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    partNumber: '',
    subject: 'oem',
    message: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const message = [
      'Hola ReAuto, necesito apoyo con la siguiente solicitud:',
      `Nombre: ${formData.fullName}`,
      `Telefono: ${formData.phone}`,
      `Asunto: ${formData.subject}`,
      `Numero de parte: ${formData.partNumber || 'No especificado'}`,
      `Detalle: ${formData.message}`,
    ].join('\n');

    const whatsappRequestUrl = `https://wa.me/50495206007?text=${encodeURIComponent(message)}`;

    window.open(whatsappRequestUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Contacta a ReAuto para soporte tecnico, compatibilidad OEM, cotizaciones y entregas en Honduras."
        path="/contacto"
        keywords="contacto ReAuto, WhatsApp ReAuto, ubicacion ReAuto, soporte tecnico"
      />

      <main className="bg-[#f3f4f8]">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid gap-6 rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:p-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-14 bg-blue-400" />
                <span className="font-headline text-[11px] font-bold uppercase tracking-[0.34em] text-blue-200">
                  Soporte tecnico
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-headline text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white md:text-5xl">
                Contacto operativo para repuestos, compatibilidad y despacho.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Esta vista ahora esta pensada como un panel claro: menos ruido, mas orden visual y
                una accion principal evidente para convertir consultas en conversaciones utiles.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Canal principal
                </p>
                <p className="mt-2 font-headline text-2xl font-bold text-white">WhatsApp</p>
                <p className="mt-2 text-sm text-slate-300">+504 9520-6007</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Horario
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">Lunes a sabado, 8:00 AM - 6:00 PM</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  Cobertura
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">San Pedro Sula y envios a nivel nacional</p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[21rem_minmax(0,1fr)]">
            <div className="space-y-5">
              <InfoCard {...CONTACT_INFO.mainOffice} />
              <InfoCard {...CONTACT_INFO.technicalSupport} />
              <InfoCard {...CONTACT_INFO.shipping} />
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8">
              <div className="mb-8 border-b border-slate-200 pb-5">
                <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                  Formulario tecnico
                </p>
                <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tight text-slate-950 md:text-4xl">
                  Solicitud de compatibilidad o cotizacion
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Llena los datos base y abrimos WhatsApp con un mensaje mas estructurado. La idea
                  es que el siguiente paso sea claro y rapido.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Nombre completo"
                    type="text"
                    name="fullName"
                    placeholder="Tu nombre"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <FormField
                    label="Telefono o WhatsApp"
                    type="tel"
                    name="phone"
                    placeholder="+504 XXXX-XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Numero de parte"
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
                      { label: 'Consulta tecnica OEM', value: 'oem' },
                      { label: 'Verificar compatibilidad', value: 'compatibility' },
                      { label: 'Cotizacion de repuestos', value: 'quote' },
                      { label: 'Estado de envio', value: 'shipping' },
                      { label: 'Otro', value: 'other' },
                    ]}
                    required
                  />
                </div>

                <FormField
                  label="Mensaje"
                  type="textarea"
                  name="message"
                  placeholder="Describe tu consulta, modelo del vehiculo o referencia de la pieza..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <div className="flex flex-col gap-4 rounded-[24px] bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-sm leading-7 text-slate-600">
                    Al enviar, abriremos WhatsApp con tu solicitud estructurada para agilizar la
                    respuesta del equipo.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-700"
                  >
                    <span>Enviar solicitud</span>
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
              <iframe
                title="Ubicacion de ReAuto"
                src={SOCIAL_LINKS.maps}
                className="min-h-[24rem] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                Punto fisico
              </p>
              <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tight text-slate-950">
                San Pedro Sula
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Coordinamos entregas, retiro y consultas para clientes locales y cobertura
                nacional.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span>WhatsApp</span>
                  <Icon name="whatsapp" className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span>Facebook</span>
                  <Icon name="facebook" className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span>Instagram</span>
                  <Icon name="instagram" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-8">
            <div className="mb-8 border-b border-slate-200 pb-5 md:flex md:items-end md:justify-between">
              <div>
                <p className="font-headline text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">
                  Flujo de atencion
                </p>
                <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tight text-slate-950 md:text-4xl">
                  Servicios disponibles en esta vista
                </h2>
              </div>
              <p className="mt-4 font-headline text-[11px] uppercase tracking-[0.28em] text-slate-400 md:mt-0">
                Panel visual mas limpio y ordenado
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {additionalServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-headline text-2xl font-bold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
