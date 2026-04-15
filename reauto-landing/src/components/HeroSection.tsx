import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: ReactNode;
  description?: string;
  bgImage?: string;
  actions?: { label: string; href?: string; onClick?: () => void; isPrimary?: boolean }[];
  minHeight?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  bgImage,
  actions,
  minHeight = 'calc(100vh-56px)',
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full flex items-center px-6 md:px-8 bg-slate-900 dark:bg-slate-950 overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background Image with Overlay */}
      {bgImage && (
        <>
          <div className="absolute inset-0 opacity-25">
            <img alt="Background" className="w-full h-full object-cover" src={bgImage} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-4 md:mb-6">
          {title} {subtitle && <br />}
          {subtitle && <span className="text-blue-400">{subtitle}</span>}
        </h1>

        {description && (
          <p className="font-body text-slate-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            {description}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            {actions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className={`px-6 md:px-8 py-3 md:py-4 font-headline font-bold uppercase tracking-widest text-sm md:text-base transition-colors flex items-center justify-center rounded ${
                  action.isPrimary
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {action.label}
                {action.isPrimary && (
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
