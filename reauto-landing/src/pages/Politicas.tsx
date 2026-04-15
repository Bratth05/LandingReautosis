import Seo from '../components/Seo';

export default function Politicas() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <Seo
        title="Politicas y Terminos"
        description="Politicas de privacidad, cookies y terminos de uso de ReAuto para operar de forma transparente y monetizable."
        path="/politicas"
        keywords="politica privacidad ReAuto, terminos y condiciones ReAuto, cookies"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Politicas y terminos
          </h1>
          <p className="mt-4 text-slate-600">
            Ultima actualizacion: 9 de abril de 2026. Estas politicas establecen las reglas para proteger a usuarios, marca y futuras integraciones de monetizacion.
          </p>
        </header>

        <article id="privacidad" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Politica de privacidad</h2>
          <p className="mt-4 text-slate-700">
            ReAuto recopila solo los datos necesarios para responder consultas, gestionar cotizaciones y coordinar entregas. No vendemos informacion personal a terceros.
          </p>
          <p className="mt-3 text-slate-700">
            Los datos pueden incluir nombre, numero de telefono y detalles del vehiculo. El usuario puede solicitar actualizacion o eliminacion de sus datos por canales oficiales.
          </p>
        </article>

        <article id="cookies" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Politica de cookies</h2>
          <p className="mt-4 text-slate-700">
            Este sitio puede usar cookies tecnicas, analiticas y de rendimiento para medir trafico, mejorar conversion y optimizar campañas publicitarias futuras.
          </p>
          <p className="mt-3 text-slate-700">
            Al continuar navegando, el usuario acepta su uso. Cuando se implemente un gestor de consentimiento, podra ajustar preferencias por categoria.
          </p>
        </article>

        <article id="terminos" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Terminos y condiciones</h2>
          <p className="mt-4 text-slate-700">
            La disponibilidad de productos, precios y tiempos de entrega esta sujeta a inventario y cobertura geografica. ReAuto se reserva el derecho de actualizar catalogo y promociones sin previo aviso.
          </p>
          <p className="mt-3 text-slate-700">
            Las marcas y logotipos de terceros pertenecen a sus respectivos propietarios y se usan solo para referencia de compatibilidad automotriz.
          </p>
        </article>
      </div>
    </section>
  );
}
