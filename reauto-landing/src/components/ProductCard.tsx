interface ProductCardProps {
  id: string;
  title: string;
  oemNumber: string;
  image: string;
  status: 'En Stock' | 'Pedido Especial' | 'Disponible';
  specs: { label: string; value: string }[];
  compatibility: string[];
}

const statusColor = {
  'En Stock': 'bg-green-600',
  'Pedido Especial': 'bg-blue-600',
  Disponible: 'bg-slate-600',
};

export default function ProductCard({
  id,
  title,
  oemNumber,
  image,
  status,
  specs,
  compatibility,
}: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="h-72 overflow-hidden relative bg-slate-100 dark:bg-slate-700">
        <img
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          src={image}
        />
        <div className="absolute top-4 right-4">
          <span className={`${statusColor[status]} text-white font-headline text-xs font-bold px-4 py-2 uppercase tracking-wider rounded`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1">
        {/* Title & OEM */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-headline font-bold text-2xl text-slate-900 dark:text-white leading-tight">
            {title}
          </h3>
          <span className="font-headline text-xs text-blue-600 dark:text-blue-400 font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded">
            OEM #{oemNumber}
          </span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8 py-6 bg-slate-50 dark:bg-slate-700/50 px-6 rounded-lg">
          {specs.map((spec, idx) => (
            <div key={idx}>
              <p className="text-xs font-headline text-slate-600 dark:text-slate-400 uppercase tracking-wider font-bold mb-2">
                {spec.label}
              </p>
              <p className="text-base font-bold text-slate-900 dark:text-white">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Compatibility Tags */}
        <div className="mb-8">
          <p className="text-xs font-headline text-slate-600 dark:text-slate-400 uppercase tracking-wider font-bold mb-3">
            Compatibilidad
          </p>
          <div className="flex flex-wrap gap-2">
            {compatibility.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto border-t border-slate-200 dark:border-slate-600 pt-4">
          <button className="w-full bg-slate-900 dark:bg-blue-600 text-white font-headline text-xs font-bold uppercase tracking-widest py-3 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors rounded">
            Hoja Técnica
          </button>
        </div>
      </div>
    </div>
  );
}
