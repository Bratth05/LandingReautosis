interface InfoCardProps {
  icon: string;
  title: string;
  items: { label: string; value: string | React.ReactNode }[];
  borderColor?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'default' | 'highlighted';
}

const borderColorMap = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
};

const bgColorMap = {
  default: 'bg-surface-container-lowest',
  highlighted: 'bg-surface-container-low',
};

export default function InfoCard({
  icon,
  title,
  items,
  borderColor = 'primary',
  variant = 'default',
}: InfoCardProps) {
  return (
    <div className={`${bgColorMap[variant]} p-6 md:p-8 border-l-4 ${borderColorMap[borderColor]} rounded-lg`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-headline font-bold text-lg tracking-tight uppercase text-on-surface">
          {title}
        </h3>
      </div>
      <div className="space-y-4 font-body text-sm text-on-surface-variant">
        {items.map((item, idx) => (
          <p key={idx} className="flex gap-4">
            <span className="font-headline font-bold text-on-surface w-20">{item.label}:</span>
            <span>{item.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
