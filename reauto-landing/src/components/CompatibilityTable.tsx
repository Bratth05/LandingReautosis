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

const statusClassName = {
  Verificado: 'bg-emerald-50 text-emerald-700',
  'En Pruebas': 'bg-amber-50 text-amber-700',
  Pendiente: 'bg-orange-50 text-orange-700',
};

export default function CompatibilityTable({ rows }: CompatibilityTableProps) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] md:p-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-headline text-[11px] font-bold uppercase tracking-[0.3em] text-blue-700">
            Verificacion
          </p>
          <h3 className="mt-3 font-headline text-2xl font-bold uppercase tracking-tight text-slate-950 md:text-3xl">
            Indice global de compatibilidad
          </h3>
        </div>
        <p className="font-headline text-[11px] uppercase tracking-[0.28em] text-slate-400">
          Piezas revisadas con enfoque OEM
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-[720px] w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Parte
              </th>
              <th className="px-4 py-2 text-left font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Componente
              </th>
              <th className="px-4 py-2 text-left font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Material
              </th>
              <th className="px-4 py-2 text-left font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Certificacion
              </th>
              <th className="px-4 py-2 text-right font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.partNumber} className="bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                <td className="rounded-l-2xl px-4 py-5 font-headline text-sm font-bold text-blue-700">
                  {row.partNumber}
                </td>
                <td className="px-4 py-5 text-sm text-slate-950">{row.component}</td>
                <td className="px-4 py-5 text-sm text-slate-600">{row.material}</td>
                <td className="px-4 py-5">
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    {row.certification}
                  </span>
                </td>
                <td className="rounded-r-2xl px-4 py-5 text-right">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-[0.22em] ${statusClassName[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
