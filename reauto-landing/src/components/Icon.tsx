type IconName =
  | 'arrow-right'
  | 'catalog'
  | 'close'
  | 'compatibility'
  | 'delivery'
  | 'document'
  | 'eye'
  | 'facebook'
  | 'instagram'
  | 'location'
  | 'menu'
  | 'phone'
  | 'privacy'
  | 'search'
  | 'shield'
  | 'shipping'
  | 'support'
  | 'terms'
  | 'tracking'
  | 'whatsapp';

interface IconProps {
  name: IconName;
  className?: string;
}

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export default function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  switch (name) {
    case 'arrow-right':
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      );
    case 'catalog':
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15.5A1.5 1.5 0 0 1 18.5 21H7a3 3 0 0 1-3-3z" />
          <path d="M7 4v14a3 3 0 0 0 3 3" />
          <path d="M10 8h6" />
          <path d="M10 12h6" />
        </svg>
      );
    case 'close':
      return (
        <svg className={className} {...baseProps}>
          <path d="M6 6 18 18" />
          <path d="M18 6 6 18" />
        </svg>
      );
    case 'compatibility':
      return (
        <svg className={className} {...baseProps}>
          <path d="m9 12 2 2 4-4" />
          <path d="M21 12c0 4.971-4.029 9-9 9S3 16.971 3 12 7.029 3 12 3s9 4.029 9 9Z" />
        </svg>
      );
    case 'delivery':
      return (
        <svg className={className} {...baseProps}>
          <path d="M10 17h4" />
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h3.5L21 13v4h-2" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      );
    case 'document':
      return (
        <svg className={className} {...baseProps}>
          <path d="M8 3h7l5 5v13H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M15 3v5h5" />
          <path d="M10 12h6" />
          <path d="M10 16h6" />
        </svg>
      );
    case 'eye':
      return (
        <svg className={className} {...baseProps}>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H9v3h2.3v7h2.2Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm4.5 2.7A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5.1-2.55a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
        </svg>
      );
    case 'location':
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case 'menu':
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} {...baseProps}>
          <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.64a2 2 0 0 1-.45 2.11L7.1 8.65a16 16 0 0 0 8.25 8.25l1.18-1.18a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case 'privacy':
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 3 5 6v5c0 5 3.4 8.35 7 10 3.6-1.65 7-5 7-10V6l-7-3Z" />
          <path d="M9.5 12.5 11 14l3.5-4" />
        </svg>
      );
    case 'search':
      return (
        <svg className={className} {...baseProps}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 3 5 6v5c0 5 3.4 8.35 7 10 3.6-1.65 7-5 7-10V6l-7-3Z" />
          <path d="M10 12h4" />
          <path d="M12 10v4" />
        </svg>
      );
    case 'shipping':
      return (
        <svg className={className} {...baseProps}>
          <path d="M3 7h12v10H3z" />
          <path d="M15 10h3l3 3v4h-2" />
          <path d="M8 17h.01" />
          <path d="M18 17h.01" />
        </svg>
      );
    case 'support':
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 12a8 8 0 1 1 16 0" />
          <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
          <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" />
          <path d="M12 19v2" />
        </svg>
      );
    case 'terms':
      return (
        <svg className={className} {...baseProps}>
          <path d="M8 3h7l5 5v13H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M15 3v5h5" />
          <path d="M10 12h6" />
          <path d="M10 16h4" />
        </svg>
      );
    case 'tracking':
      return (
        <svg className={className} {...baseProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2C6.59 2 2.16 6.3 2.16 11.62c0 1.87.55 3.68 1.58 5.23L2 22l5.33-1.67a10.1 10.1 0 0 0 4.71 1.15h.01c5.45 0 9.89-4.3 9.89-9.63S17.5 2 12.04 2Zm0 17.73h-.01a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.16.99 1.03-3.03-.2-.31a7.9 7.9 0 0 1-1.22-4.23c0-4.34 3.63-7.87 8.09-7.87 4.47 0 8.1 3.53 8.1 7.87 0 4.34-3.63 7.91-8.1 7.91Zm4.44-5.92c-.24-.12-1.39-.68-1.6-.76-.21-.08-.37-.12-.52.12-.15.24-.6.76-.73.92-.14.16-.27.18-.5.06-.24-.12-.99-.36-1.89-1.16-.7-.61-1.16-1.37-1.3-1.6-.13-.24-.01-.36.1-.48.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.24-.71-1.7-.19-.45-.38-.38-.52-.39h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.64 4.16 3.59.59.23 1.05.37 1.41.47.59.16 1.12.14 1.55.08.47-.07 1.39-.56 1.59-1.11.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      );
    default:
      return null;
  }
}
