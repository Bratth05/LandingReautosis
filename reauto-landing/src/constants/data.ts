export const SERVICES = [
  {
    icon: 'catalog' as const,
    title: 'Catalogo curado',
    description:
      'Inventario enfocado en piezas con alta rotacion, referencia OEM y respuesta comercial clara.',
  },
  {
    icon: 'delivery' as const,
    title: 'Entrega agil',
    description:
      'Cobertura en San Pedro Sula y envios nacionales coordinados para talleres y clientes finales.',
  },
  {
    icon: 'shield' as const,
    title: 'Compatibilidad segura',
    description:
      'Validamos piezas por marca, modelo y ficha tecnica para reducir errores de compra.',
  },
];

export const PRODUCTS = [
  {
    id: 'turbo-vx450',
    title: 'Turbocompresor V-X 450',
    oemNumber: '994-BC-12',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=900&fit=crop',
    status: 'En Stock' as const,
    specs: [
      { label: 'Material', value: 'Aleacion de titanio' },
      { label: 'Peso', value: '12.4 kg' },
      { label: 'PSI max', value: '32.0 bar' },
      { label: 'Garantia', value: '24 meses' },
    ],
    compatibility: ['Serie 5 (2020+)', 'Plataforma A6', 'V8 diesel'],
  },
  {
    id: 'piston-kit-8',
    title: 'Kit de pistones forjados (8)',
    oemNumber: 'PK-8821',
    image: 'https://images.unsplash.com/photo-1581092165854-cbfce9dbf052?w=900&h=900&fit=crop',
    status: 'Pedido Especial' as const,
    specs: [
      { label: 'Cilindrada', value: '86.00 mm' },
      { label: 'Compresion', value: '10.5:1' },
      { label: 'Pasador', value: '22 mm' },
      { label: 'Norma', value: 'SAE-J19' },
    ],
    compatibility: ['Turbo serie V6', 'Edicion GT-300'],
  },
  {
    id: 'camshaft-stage2',
    title: 'Arbol de levas etapa 2',
    oemNumber: 'SC-44-R',
    image: 'https://images.unsplash.com/photo-1613214150384-a24f204d9aab?w=900&h=900&fit=crop',
    status: 'En Stock' as const,
    specs: [
      { label: 'Lift', value: '11.5 mm' },
      { label: 'Duracion', value: '264 deg' },
      { label: 'Material', value: 'Acero billet' },
      { label: 'Uso', value: 'Competicion' },
    ],
    compatibility: ['Race-Line 4cyl', 'Extra-Euro spec'],
  },
];

export const COMPATIBILITY_TABLE_DATA = [
  {
    partNumber: '#PP-990-12',
    component: 'Inyectores de combustible',
    material: 'Acero inoxidable',
    certification: 'ISO-9001',
    status: 'Verificado' as const,
  },
  {
    partNumber: '#PP-442-AX',
    component: 'Discos de freno ceramicos',
    material: 'Carbono-ceramico',
    certification: 'TUV-CERT',
    status: 'Verificado' as const,
  },
  {
    partNumber: '#PP-001-LK',
    component: 'Cojinetes de ciguenal',
    material: 'Cobre / plomo / estano',
    certification: 'OEM-STD',
    status: 'En Pruebas' as const,
  },
];

export const CONTACT_INFO = {
  mainOffice: {
    icon: 'location' as const,
    title: 'Oficina principal',
    items: [
      { label: 'Ubicacion', value: 'San Pedro Sula, Cortes, Honduras' },
      { label: 'Telefono', value: '+504 9520-6007' },
      { label: 'Horario', value: 'Lunes a sabado, 8:00 AM - 6:00 PM' },
    ],
    borderColor: 'primary' as const,
  },
  technicalSupport: {
    icon: 'support' as const,
    title: 'Soporte tecnico',
    items: [
      { label: 'WhatsApp', value: '+504 9520-6007' },
      { label: 'Correo', value: 'soporte@reauto.hn' },
    ],
    borderColor: 'primary' as const,
    variant: 'highlighted' as const,
  },
  shipping: {
    icon: 'shipping' as const,
    title: 'Entregas y envios',
    items: [
      { label: 'Local', value: 'Entrega en menos de 24 horas en SPS' },
      { label: 'Nacional', value: 'Cobertura en toda Honduras con seguimiento' },
    ],
    borderColor: 'secondary' as const,
  },
};

export const CONTACT_FORM_FIELDS = [
  {
    label: 'Nombre completo',
    type: 'text' as const,
    placeholder: 'Tu nombre',
    name: 'fullName',
    required: true,
  },
  {
    label: 'Telefono o WhatsApp',
    type: 'tel' as const,
    placeholder: '+504 XXXX-XXXX',
    name: 'phone',
    required: true,
  },
  {
    label: 'Numero de parte',
    type: 'text' as const,
    placeholder: 'Ej: PP-9902-BX',
    name: 'partNumber',
  },
  {
    label: 'Asunto',
    type: 'select' as const,
    name: 'subject',
    options: [
      { label: 'Consulta tecnica OEM', value: 'oem' },
      { label: 'Verificar compatibilidad', value: 'compatibility' },
      { label: 'Cotizacion de repuestos', value: 'quote' },
      { label: 'Estado de envio', value: 'shipping' },
      { label: 'Otro', value: 'other' },
    ],
    required: true,
  },
];

export const COMPANY_VALUES = [
  'Atencion humana y asesoramiento tecnico real.',
  'Transparencia en marcas, piezas y precios.',
  'Compromiso con entregas puntuales y seguimiento.',
  'Relaciones de largo plazo con clientes, flotillas y talleres.',
];

export const SOCIAL_LINKS = {
  whatsapp:
    'https://wa.me/50495206007?text=Hola%20ReAuto,%20quiero%20cotizar%20repuestos%20para%20mi%20vehiculo',
  facebook: 'https://www.facebook.com/p/Reauto-100086985931443/',
  instagram: 'https://www.instagram.com/reauto22/',
  maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.467635421937!2d-88.01865!3d15.49832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62d5a9c5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sReAuto%20San%20Pedro%20Sula!5e0!3m2!1ses!2shn!4v1234567890',
};
