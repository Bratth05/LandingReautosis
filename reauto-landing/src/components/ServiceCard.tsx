interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="text-center p-4 md:p-6">
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{icon}</div>
      <h3 className="font-headline text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
