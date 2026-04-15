// Servicios ofrecidos por ReAuto
export const SERVICES = [
  {
    icon: '📦',
    title: 'Catálogo Completo',
    description: 'Más de 1000 repuestos disponibles',
  },
  {
    icon: '🚚',
    title: 'Entregas Rápidas',
    description: 'Mismo día en San Pedro Sula',
  },
  {
    icon: '✅',
    title: 'Garantía Total',
    description: 'Garantía en todos los productos',
  },
];

// Productos para catálogo
export const PRODUCTS = [
  {
    id: 'turbo-vx450',
    title: 'Turbocompresor V-X 450',
    oemNumber: '994-BC-12',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    status: 'En Stock' as const,
    specs: [
      { label: 'Material', value: 'Aleación de Titanio' },
      { label: 'Peso', value: '12.4 kg' },
      { label: 'PSI Máx', value: '32.0 Bar' },
      { label: 'Garantía', value: '24 Meses' },
    ],
    compatibility: ['Serie 5 (2020+)', 'Plataforma A6', 'V8 Diésel'],
  },
  {
    id: 'piston-kit-8',
    title: 'Kit de Pistones Forjados (8)',
    oemNumber: 'PK-8821',
    image: 'https://images.unsplash.com/photo-1581092165854-cbfce9dbf052?w=500&h=400&fit=crop',
    status: 'Pedido Especial' as const,
    specs: [
      { label: 'Cilindrada', value: '86.00 mm' },
      { label: 'Relación Comp', value: '10.5:1' },
      { label: 'Diámetro Pasador', value: '22 mm' },
      { label: 'Estándar', value: 'SAE-J19' },
    ],
    compatibility: ['Turbo-Serie V6', 'Edición GT-300'],
  },
  {
    id: 'camshaft-stage2',
    title: 'Árbol de Levas Etapa 2',
    oemNumber: 'SC-44-R',
    image: 'https://images.unsplash.com/photo-1581092161562-40038c5f4d0f?w=500&h=400&fit=crop',
    status: 'En Stock' as const,
    specs: [
      { label: 'Levantamiento', value: '11.5 mm' },
      { label: 'Duración', value: '264 Grados' },
      { label: 'Material', value: 'Acero Cillet' },
      { label: 'Grado', value: 'Competencia' },
    ],
    compatibility: ['Race-Line 4cyl', 'Extra-Euro Spec'],
  },
];

// Tabla de compatibilidad
export const COMPATIBILITY_TABLE_DATA = [
  {
    partNumber: '#PP-990-12',
    component: 'Inyectores de Combustible',
    material: 'Acero Inoxidable',
    certification: 'ISO-9001',
    status: 'Verificado' as const,
  },
  {
    partNumber: '#PP-442-AX',
    component: 'Discos de Freno Cerámicos',
    material: 'Carbono-Cerámico',
    certification: 'TUV-CERT',
    status: 'Verificado' as const,
  },
  {
    partNumber: '#PP-001-LK',
    component: 'Cojinetes de Cigüeñal',
    material: 'Cobre/Plomo/Estaño',
    certification: 'OEM-STD',
    status: 'En Pruebas' as const,
  },
];

// Información de contacto
export const CONTACT_INFO = {
  mainOffice: {
    icon: '🏢',
    title: 'Oficina Principal',
    items: [
      { label: 'Ubicación', value: 'San Pedro Sula, Cortés\nHonduras' },
      { label: 'Teléfono', value: '+504 9520-6007' },
      { label: 'Horarios', value: 'Lunes - Sábado, 8:00 AM - 6:00 PM' },
    ],
    borderColor: 'primary' as const,
  },
  technicalSupport: {
    icon: '⚙️',
    title: 'Soporte Técnico',
    items: [
      { label: 'WhatsApp', value: '+504 9520-6007' },
      { label: 'Correo', value: 'soporte@reauto.hn' },
    ],
    borderColor: 'primary' as const,
    variant: 'highlighted' as const,
  },
  shipping: {
    icon: '🚚',
    title: 'Entregas y Envíos',
    items: [
      { label: 'Local', value: 'Entrega en menos de 24 horas en SPS' },
      { label: 'Nacional', value: 'Cobertura en toda Honduras con tracking' },
    ],
    borderColor: 'secondary' as const,
  },
};

// Campos del formulario de contacto
export const CONTACT_FORM_FIELDS = [
  {
    label: 'Nombre Completo',
    type: 'text' as const,
    placeholder: 'Tu nombre',
    name: 'fullName',
    required: true,
  },
  {
    label: 'Teléfono/WhatsApp',
    type: 'tel' as const,
    placeholder: '+504 XXXX-XXXX',
    name: 'phone',
    required: true,
  },
  {
    label: 'Número de Parte (Opcional)',
    type: 'text' as const,
    placeholder: 'Ej: PP-9902-BX',
    name: 'partNumber',
  },
  {
    label: 'Asunto',
    type: 'select' as const,
    name: 'subject',
    options: [
      { label: 'Consulta Técnica OEM', value: 'oem' },
      { label: 'Verificar Compatibilidad', value: 'compatibility' },
      { label: 'Cotización de Repuestos', value: 'quote' },
      { label: 'Estado de Envío', value: 'shipping' },
      { label: 'Otro', value: 'other' },
    ],
    required: true,
  },
];

// Valores de ReAuto
export const COMPANY_VALUES = [
  'Atencion humana y asesoramiento tecnico real',
  'Transparencia en precios y marcas',
  'Compromiso con entregas puntuales',
  'Enfoque en relaciones de largo plazo con clientes y talleres',
];

// Información de redes sociales
export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/50495206007?text=Hola%20ReAuto,%20quiero%20cotizar%20repuestos%20para%20mi%20vehiculo',
  facebook: 'https://www.facebook.com/p/Reauto-100086985931443/',
  instagram: 'https://www.instagram.com/reauto22/',
  maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.467635421937!2d-88.01865!3d15.49832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62d5a9c5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sReAuto%20San%20Pedro%20Sula!5e0!3m2!1ses!2shn!4v1234567890',
};
