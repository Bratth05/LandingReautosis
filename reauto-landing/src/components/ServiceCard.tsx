import Icon from './Icon';

interface ServiceCardProps {
  icon: 'catalog' | 'delivery' | 'shield';
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_54px_rgba(37,99,235,0.10)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>

      <div className="mt-6">
        <p className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Capacidad tecnica
        </p>
        <h3 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{description}</p>
      </div>
    </article>
  );
}
