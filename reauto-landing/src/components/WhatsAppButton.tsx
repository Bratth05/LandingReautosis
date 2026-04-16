import Icon from './Icon';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50495206007?text=Hola%20ReAuto,%20quiero%20cotizar%20repuestos%20para%20mi%20vehiculo"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 border border-emerald-400/40 bg-slate-950 px-4 py-3 text-white shadow-[0_18px_38px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-600"
      aria-label="Contactar por WhatsApp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
        <Icon name="whatsapp" className="h-5 w-5" />
      </span>
      <span className="hidden sm:block">
        <span className="block font-headline text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400 transition-colors group-hover:text-emerald-100">
          Cotiza en línea
        </span>
        <span className="block font-body text-sm text-white">¡Escríbenos!</span>
      </span>
    </a>
  );
}
