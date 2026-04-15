interface CompatibilityTableRow {
  partNumber: string;
  component: string;
  material: string;
  certification: string;
  status: 'Verificado' | 'En Pruebas' | 'Pendiente';
}

interface CompatibilityTableProps {
  rows: CompatibilityTableRow[];
}

const statusColor = {
  Verificado: 'text-green-600 dark:text-green-400',
  'En Pruebas': 'text-yellow-600 dark:text-yellow-400',
  Pendiente: 'text-orange-600 dark:text-orange-400',
};

export default function CompatibilityTable({ rows }: CompatibilityTableProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-10 rounded-lg border border-slate-200 dark:border-slate-700">
      <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-8 text-slate-900 dark:text-white">
        Índice Global de Compatibilidad de Componentes
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-slate-300 dark:border-slate-600">
              <th className="px-6 py-4 text-left font-headline text-xs uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                Número de Parte
              </th>
              <th className="px-6 py-4 text-left font-headline text-xs uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                Componente
              </th>
              <th className="px-6 py-4 text-left font-headline text-xs uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                Material
              </th>
              <th className="px-6 py-4 text-left font-headline text-xs uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                Certificaciones
              </th>
              <th className="px-6 py-4 text-right font-headline text-xs uppercase tracking-widest font-bold text-slate-700 dark:text-slate-300">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {rows.map((row) => (
              <tr key={row.partNumber} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400">{row.partNumber}</td>
                <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-body">{row.component}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-body">{row.material}</td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-slate-200 dark:bg-slate-600 px-3 py-1 font-bold rounded text-slate-700 dark:text-slate-200 inline-block">
                    {row.certification}
                  </span>
                </td>
                <td className={`px-6 py-4 text-right font-bold uppercase text-xs ${statusColor[row.status]}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
