export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50495206007?text=Hola%20ReAuto,%20me%20gustaría%20conocer%20más%20de%20sus%20productos%20y%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-300 scale-125"></div>
      
      {/* Button container */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition transform hover:scale-110 flex items-center justify-center">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.868 1.159l-.359.214-3.734-.982.998 3.645-.235.374a9.861 9.861 0 001.516 5.394l.244.368 3.888.776-.375-.343a9.882 9.882 0 004.933-1.159l.355-.212 3.732.981-.998-3.645.235-.374a9.861 9.861 0 00-1.516-5.394l-.244-.368-3.886-.776z" />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none text-sm font-medium">
        ¡Chatea con nosotros!
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
}
