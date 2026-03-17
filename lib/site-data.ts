import {
  Blend,
  BriefcaseBusiness,
  Building2,
  Cable,
  CircleGauge,
  CircleHelp,
  ClipboardCheck,
  Compass,
  Factory,
  FlaskConical,
  HardHat,
  Landmark,
  Layers3,
  LifeBuoy,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  Pickaxe,
  SearchCheck,
  Shield,
  ShieldCheck,
  ShieldPlus,
  ShipWheel,
  Sparkles,
  TowerControl,
  Waves,
  Workflow,
  Wrench,
  Drill,
} from 'lucide-react';
import { assets } from '@/lib/asset-routes';

export const site = {
  name: 'Quality Techno Services',
  shortName: 'QTS',
  domain: 'qualitytechnoservices.com',
  email: 'info@qualitytechnoservices.com',
  phonePanama: '+507 6898-7181',
  phoneUsa: '+1 407 990-6563',
  whatsapp: '+507 6898-7181',
  coverage: 'Panamá · USA · Venezuela · cobertura regional',
  linkedIn: 'https://www.linkedin.com/',
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'La Empresa', href: '/la-empresa' },
  {
    label: 'Soluciones',
    href: '/soluciones',
    children: [
      { label: 'Productos', href: '/productos' },
      { label: 'Servicios', href: '/servicios' },
    ],
  },
  { label: 'Centro de Recursos', href: '/centro-de-recursos' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const manufacturerLogos = [
  { name: 'Unique Polymer Systems', src: assets.manufacturers.unique },
  { name: 'NOV', src: assets.manufacturers.nov },
  { name: 'AGI Industries', src: assets.manufacturers.agi },
  { name: 'Gorman-Rupp', src: assets.manufacturers.gorman },
  { name: 'LCountries', src: assets.manufacturers.lcountries },
];

export const homeHero = {
  eyebrow: 'Representación técnica · suministro especializado · soporte industrial',
  title: 'Soluciones industriales para operaciones y activos críticos',
  description:
    'Conectamos a la industria en Panamá y la región con soluciones, tecnologías y acompañamiento técnico-comercial para bombeo, reparación, protección de activos y continuidad operativa.',
  primaryCta: { label: 'Solicitar asesoría técnica', href: '/contacto' },
  secondaryCta: { label: 'Explorar soluciones', href: '/#soluciones' },
  institutionalLine:
    'Agente autorizado de AGI Industries en Panamá · Master Distributor de Unique Polymer Systems para Latinoamérica, Texas, Louisiana y Florida · Soluciones especializadas en bombeo, manejo de fluidos y tecnologías industriales para mercados estratégicos de la región',
  supportMessages: [
    'Soporte técnico y comercial especializado',
    'Respaldo de fabricantes internacionales',
    'Soluciones para industrias y aplicaciones críticas',
  ],
};

export const institutionalPillars = [
  {
    title: 'Cobertura regional',
    description:
      'Atención comercial y técnica en Panamá y mercados estratégicos de Latinoamérica para requerimientos de alta exigencia.',
    icon: MapPinned,
  },
  {
    title: 'Enfoque consultivo',
    description:
      'Acompañamiento cercano para requerimientos técnicos, cotizaciones y aplicaciones complejas con criterio técnico-comercial.',
    icon: SearchCheck,
  },
  {
    title: 'Soluciones especializadas',
    description:
      'Portafolio orientado a bombeo, manejo de fluidos, reparación, protección de activos y servicios industriales.',
    icon: ShieldCheck,
  },
];

export const solutionCards = [
  {
    title: 'Sistemas de bombeo industrial',
    description:
      'Selección, suministro y soporte técnico para aplicaciones de proceso, transferencia y operación continua.',
    href: '/productos',
    src: assets.home.solutions.pumping,
  },
  {
    title: 'Reparación y protección de activos',
    description:
      'Tecnologías orientadas a recuperar, proteger y extender la vida útil de equipos expuestos a corrosión, erosión, abrasión y desgaste.',
    href: '/productos',
    src: assets.home.solutions.repair,
  },
  {
    title: 'Servicios industriales especializados',
    description:
      'Asesoría, acompañamiento técnico y capacidades de ejecución para operaciones que requieren mayor sustento técnico y control.',
    href: '/servicios',
    src: assets.home.solutions.services,
  },
];

export const integralProposal = [
  {
    title: 'Representación técnica de soluciones internacionales',
    description:
      'Acercamos al mercado local y regional tecnologías de alto nivel con respaldo de fabricantes reconocidos en la industria.',
    icon: Landmark,
  },
  {
    title: 'Asesoría comercial para aplicaciones críticas',
    description:
      'Ayudamos a identificar alternativas técnicas y comerciales alineadas a la necesidad real del activo, el proceso y la operación.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Respuesta orientada a resultados',
    description:
      'Nos enfocamos en confiabilidad, vida útil, continuidad operativa y soporte real para decisiones de alto impacto.',
    icon: CircleGauge,
  },
];

export const industries = [
  {
    title: 'Energía y generación',
    description:
      'Soluciones para equipos y sistemas críticos que demandan confiabilidad operativa, continuidad de servicio y protección contra desgaste.',
    icon: TowerControl,
    src: assets.home.industries.energia,
  },
  {
    title: 'Oil & Gas',
    description:
      'Tecnologías y servicios para activos expuestos a condiciones severas, fluidos exigentes y requerimientos de alto desempeño.',
    icon: Factory,
    src: assets.home.industries.oilGas,
  },
  {
    title: 'Agua y aguas residuales',
    description:
      'Soluciones para bombeo, reparación, protección de activos y soporte técnico en sistemas esenciales de captación y tratamiento.',
    icon: Waves,
    src: assets.home.industries.agua,
  },
  {
    title: 'Minería',
    description:
      'Aplicaciones orientadas a equipos sometidos a abrasión, desgaste severo, lodos, corrosión y condiciones exigentes de operación.',
    icon: Pickaxe,
    src: assets.home.industries.mineria,
  },
  {
    title: 'Marítimo y naval',
    description:
      'Soluciones para mantenimiento, protección y confiabilidad de activos en ambientes marinos e industriales de alta exigencia.',
    icon: ShipWheel,
    src: assets.home.industries.maritimo,
  },
  {
    title: 'Alimentos y bebidas',
    description:
      'Soporte para procesos industriales que requieren confiabilidad operativa, mantenimiento planificado y continuidad en planta.',
    icon: FlaskConical,
    src: assets.home.industries.alimentos,
  },
  {
    title: 'Manufactura e infraestructura',
    description:
      'Soluciones para procesos productivos, sistemas auxiliares y activos que requieren selección adecuada y soporte para operación continua.',
    icon: Building2,
    src: assets.home.industries.manufactura,
  },
  {
    title: 'Cemento',
    description:
      'Tecnologías y servicios para equipos y componentes sometidos a desgaste, abrasión, erosión y exigencias mecánicas propias del proceso.',
    icon: Blend,
    src: assets.home.industries.cemento,
  },
] as const;

export const differentiators = [
  {
    title: 'Respaldo internacional',
    description: 'Acceso a fabricantes y tecnologías reconocidas en la industria.',
    icon: ShieldCheck,
  },
  {
    title: 'Atención cercana',
    description: 'Relación directa, ágil y consultiva con cada cliente.',
    icon: LifeBuoy,
  },
  {
    title: 'Visión técnica y comercial',
    description: 'Entendemos tanto la necesidad operativa como la viabilidad de la solución.',
    icon: Compass,
  },
  {
    title: 'Enfoque en confiabilidad',
    description: 'Priorizamos desempeño, protección de activos y continuidad operativa.',
    icon: Shield,
  },
  {
    title: 'Presencia regional',
    description: 'Capacidad para atender oportunidades en Panamá, USA, Venezuela y la región.',
    icon: MapPinned,
  },
];

export const companyPage = {
  hero: {
    title: 'Quality Techno Services',
    description:
      'Soluciones industriales, representación técnica y respaldo especializado para operaciones críticas.',
    body:
      'Conectamos a la industria en Panamá, USA, Venezuela y la región con fabricantes, tecnologías y servicios orientados a confiabilidad, continuidad operativa, protección de activos y soporte técnico-comercial de alto nivel.',
    ctas: [
      { label: 'Explorar soluciones', href: '/productos' },
      { label: 'Contactar a QTS', href: '/contacto' },
    ],
    image: assets.company.hero,
  },
  whoWeAre:
    'Quality Techno Services, S.A. es una empresa sólida respaldada por alianzas estratégicas con fabricantes reconocidos y soluciones de amplia trayectoria en el mercado. Nos especializamos en el suministro de productos y equipos industriales, así como en servicios altamente especializados en áreas como procura, venta, instalación, mantenimiento y soporte técnico.',
  whoWeAre2:
    'Nuestro enfoque combina cercanía comercial, criterio técnico y atención personalizada para ofrecer soluciones confiables, orientadas a la continuidad operativa, la seguridad y el desempeño de los activos industriales.',
  valueProps: [
    {
      title: 'Respaldo internacional',
      description: 'Acceso a fabricantes y tecnologías reconocidas en la industria.',
      icon: Landmark,
    },
    {
      title: 'Acompañamiento especializado',
      description: 'Asesoría cercana para requerimientos técnicos y comerciales.',
      icon: CircleHelp,
    },
    {
      title: 'Enfoque en continuidad operativa',
      description: 'Soluciones pensadas para proteger activos y apoyar el desempeño del proceso.',
      icon: Workflow,
    },
    {
      title: 'Atención personalizada',
      description: 'Relación directa y seguimiento orientado a resultados.',
      icon: Sparkles,
    },
  ],
  mission:
    'Brindar soluciones integrales y especializadas en suministro, reparación y protección industrial, respaldadas por tecnologías de vanguardia y alianzas estratégicas con fabricantes líderes. Nos comprometemos a contribuir a la eficiencia, seguridad y sostenibilidad de los activos de nuestros clientes mediante un servicio técnico de excelencia, asesoría personalizada y una atención enfocada en generar valor real en cada aplicación.',
  vision:
    'Ser reconocidos como un referente en Latinoamérica en soluciones industriales de alto desempeño, destacándonos por la calidad de nuestro servicio, la innovación continua y el compromiso con la sostenibilidad y la seguridad operativa de nuestros clientes.',
  values: [
    'Compromiso con el cliente',
    'Excelencia técnica',
    'Integridad',
    'Innovación continua',
    'Sostenibilidad',
    'Trabajo en equipo',
  ],
  workSteps: [
    'Entendemos la necesidad',
    'Evaluamos la aplicación',
    'Proponemos soluciones',
    'Acompañamos la implementación',
  ],
  regionalBody:
    'QTS atiende requerimientos en Panamá, USA, Venezuela y mercados estratégicos de la región, conectando a la industria con fabricantes, tecnologías y soluciones orientadas a activos y operaciones críticas. Nuestra visión regional nos permite acompañar oportunidades con un enfoque flexible, cercano y respaldado por alianzas internacionales.',
};

export const servicesPage = {
  hero: {
    title: 'Servicios especializados para operaciones, activos críticos y trabajos industriales de alta exigencia',
    description:
      'Acompañamos a nuestros clientes con soporte técnico, asesoría comercial y servicios industriales orientados a confiabilidad, continuidad operativa, protección de activos, seguridad industrial y cumplimiento normativo.',
    image: assets.services.hero,
  },
  intro:
    'En Quality Techno Services entendemos que las necesidades de la industria van más allá de la compra de un producto. Por eso complementamos nuestro portafolio con servicios orientados a apoyar la evaluación, selección, implementación, mantenimiento y continuidad operativa de soluciones industriales en aplicaciones críticas.',
  intro2:
    'Nuestra propuesta integra acompañamiento técnico-comercial con capacidades de ejecución especializada en trabajos en altura, espacios confinados, limpieza y reparación de tanques industriales, sistemas de izaje, recubrimientos industriales y capacitación técnica, bajo un enfoque de seguridad, cumplimiento normativo y control técnico documentado.',
  categories: [
    {
      title: 'Asesoría técnica y comercial',
      description: 'Acompañamiento en la evaluación de requerimientos, análisis de aplicaciones y definición de alternativas alineadas a la operación.',
      icon: Compass,
    },
    {
      title: 'Soporte para selección de soluciones',
      description: 'Identificación de tecnologías, productos y configuraciones adecuadas para activos y procesos críticos.',
      icon: SearchCheck,
    },
    {
      title: 'Procura y acompañamiento de proyectos',
      description: 'Seguimiento cercano durante las etapas de evaluación, gestión comercial y suministro especializado.',
      icon: ClipboardCheck,
    },
    {
      title: 'Trabajos en altura y acceso con cuerdas',
      description: 'Intervenciones mediante técnicas certificadas de acceso por cuerdas para reducir tiempos y costos operativos.',
      icon: HardHat,
    },
    {
      title: 'Intervención en espacios confinados',
      description: 'Trabajos ejecutados bajo protocolos de seguridad, monitoreo atmosférico continuo y sistemas de rescate vertical.',
      icon: ShieldPlus,
    },
    {
      title: 'Limpieza y reparación de tanques industriales',
      description: 'Servicios especializados bajo estándares API para limpieza interna técnica, reparación y sistemas epóxicos.',
      icon: Wrench,
    },
    {
      title: 'Sandblasting y recubrimientos industriales',
      description: 'Preparación superficial y aplicación de recubrimientos bajo control técnico documentado.',
      icon: Layers3,
    },
    {
      title: 'Sistemas de izaje y tracción industrial',
      description: 'Diseño e instalación de soluciones para manejo seguro de cargas en estructuras industriales.',
      icon: Cable,
    },
    {
      title: 'Capacitación técnica industrial',
      description: 'Programas especializados para trabajo en altura, espacios confinados, atmósferas peligrosas y rescate vertical.',
      icon: Drill,
    },
  ],
  highlights: [
    'Soporte técnico para aplicaciones críticas',
    'Servicios industriales de alto riesgo',
    'Reparación y recuperación industrial',
    'Protección de superficies y activos',
    'Atención a necesidades operativas en campo',
  ],
  valueBody:
    'Nuestros servicios están orientados a ayudar a cada cliente a reducir incertidumbre, mejorar la selección de soluciones y contar con un acompañamiento más confiable en aplicaciones donde el desempeño del activo, la seguridad del personal y la continuidad de la operación son determinantes.',
  valueBullets: [
    'Evaluación más clara de requerimientos',
    'Mayor confianza en la toma de decisiones',
    'Seguridad y cumplimiento normativo',
    'Respuesta cercana y consultiva',
    'Integración entre producto y servicio',
  ],
  approachSteps: [
    'Entendemos el requerimiento',
    'Evaluamos la aplicación',
    'Proponemos alternativas',
    'Ejecutamos y damos seguimiento',
  ],
  differentials: [
    'Respaldo técnico-comercial',
    'Personal y metodologías especializadas',
    'Enfoque consultivo',
    'Atención personalizada',
    'Visión regional',
  ],
};

export const productsPage = {
  hero: {
    title: 'Productos y soluciones para activos y procesos industriales críticos',
    description:
      'Integramos un portafolio de tecnologías, equipos y materiales especializados para bombeo, manejo de fluidos, reparación, protección de activos y aplicaciones industriales de alta exigencia.',
    image: assets.products.hero,
  },
  intro:
    'En Quality Techno Services conectamos a nuestros clientes con productos y soluciones respaldados por tecnologías de amplia trayectoria en la industria. Nuestro portafolio está orientado a aplicaciones donde la confiabilidad del activo, la seguridad operativa y el soporte técnico-comercial son factores determinantes.',
  intro2:
    'Trabajamos con un enfoque consultivo para ayudar a identificar la alternativa más adecuada según las condiciones de servicio, el tipo de proceso, la criticidad del equipo y los objetivos operativos de cada cliente.',
  categories: [
    {
      title: 'Sistemas de bombeo y manejo de fluidos',
      description: 'Equipos y soluciones para transferencia, proceso, recirculación, drenaje, manejo de fluidos y operación continua.',
      icon: Waves,
    },
    {
      title: 'Polímeros y compuestos avanzados',
      description: 'Tecnologías especializadas para reparación, reconstrucción, protección y prolongación de vida útil de activos.',
      icon: FlaskConical,
    },
    {
      title: 'Recubrimientos y protección industrial',
      description: 'Sistemas orientados a proteger superficies, estructuras, componentes y equipos frente a condiciones agresivas.',
      icon: Shield,
    },
    {
      title: 'Soluciones para reparación y recuperación de activos',
      description: 'Productos diseñados para recuperar funcionalidad, restablecer integridad y apoyar la continuidad operativa.',
      icon: Wrench,
    },
    {
      title: 'Soluciones complementarias especializadas',
      description: 'Tecnologías, materiales y configuraciones para requerimientos específicos de planta, infraestructura y mantenimiento.',
      icon: Layers3,
    },
  ],
  operationalNeeds: [
    {
      title: 'Transferencia y manejo de fluidos',
      description: 'Soluciones para procesos donde el movimiento confiable del fluido es crítico para la operación.',
    },
    {
      title: 'Protección contra corrosión, erosión y abrasión',
      description: 'Tecnologías para reducir el impacto del desgaste continuo, ambientes agresivos y exposición química.',
    },
    {
      title: 'Reparación de componentes y superficies',
      description: 'Alternativas para recuperar integridad funcional, restablecer desempeño y extender la vida útil.',
    },
    {
      title: 'Soporte a mantenimiento y continuidad operativa',
      description: 'Productos diseñados para integrarse a estrategias de mantenimiento, protección de activos y mejora del desempeño operativo.',
    },
  ],
  valueBody:
    'En QTS no presentamos el portafolio como una lista de referencias aisladas, sino como un conjunto de soluciones que deben responder a una necesidad real de operación. Nuestro valor está en ayudar a seleccionar mejor, evaluar con mayor claridad y conectar cada requerimiento con una alternativa técnicamente confiable y comercialmente viable.',
  valueBullets: [
    'Mejor alineación con la aplicación',
    'Mayor respaldo para la decisión de compra',
    'Integración con servicios y soporte',
    'Enfoque en continuidad operativa',
  ],
};

export const resourceCatalogs = [
  {
    title: 'Catálogo general de soluciones',
    description: 'Resumen ejecutivo del portafolio industrial de QTS y sus áreas de aplicación.',
    href: assets.resourcesDocs.catalogoGeneral,
  },
  {
    title: 'Brochure de servicios industriales',
    description: 'Documento orientado a capacidades de soporte técnico, intervención especializada y seguridad industrial.',
    href: assets.resourcesDocs.brochureServicios,
  },
  {
    title: 'Brochure de productos destacados',
    description: 'Selección de líneas de solución para bombeo, protección, reparación y continuidad operativa.',
    href: assets.resourcesDocs.brochureProductos,
  },
  {
    title: 'Presentación corporativa',
    description: 'Visión general de QTS, respaldo comercial y enfoque técnico-comercial regional.',
    href: assets.resourcesDocs.presentacionCorporativa,
  },
];

export const resourcePage = {
  hero: {
    title: 'Centro de recursos técnicos y comerciales',
    description:
      'Acceda a catálogos y material de referencia sobre nuestras soluciones industriales. Para fichas técnicas, documentación especializada o información más específica, nuestro equipo puede asistirle directamente.',
    image: assets.resources.hero,
  },
  intro:
    'En Quality Techno Services ponemos a disposición una selección de catálogos y materiales de consulta para apoyar la revisión inicial de nuestras soluciones, productos y capacidades.',
  intro2:
    'Para documentación técnica más específica, fichas técnicas, información por aplicación o requerimientos particulares, le invitamos a contactarnos para brindarle una atención más precisa y alineada a su necesidad.',
  requestOptions: [
    'Fichas técnicas',
    'Hojas de datos',
    'Información por producto',
    'Información por aplicación',
    'Documentación de respaldo comercial',
    'Consulta técnica especializada',
  ],
};

export const contactPage = {
  hero: {
    title: 'Hablemos de su operación, activo o proyecto',
    description:
      'En Quality Techno Services estamos listos para apoyarle con información, asesoría técnica y acompañamiento comercial para aplicaciones industriales de alta exigencia.',
    image: assets.contact.hero,
  },
  intro:
    'Ya sea para una solicitud de cotización, una consulta técnica o información sobre nuestros productos y servicios, nuestro equipo está disponible para atenderle con una respuesta clara, ágil y profesional.',
  infoCards: [
    { label: 'Correo electrónico', value: site.email, href: `mailto:${site.email}`, icon: Mail },
    { label: 'Teléfono Panamá', value: site.phonePanama, href: `tel:${site.phonePanama}`, icon: Phone },
    { label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsapp.replace(/[^\d]/g, '')}`, icon: MessageCircle },
    { label: 'Cobertura', value: site.coverage, href: '/la-empresa', icon: MapPinned },
  ],
};

export const footerLinks = {
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'La Empresa', href: '/la-empresa' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Productos', href: '/productos' },
    { label: 'Centro de Recursos', href: '/centro-de-recursos' },
    { label: 'Contacto', href: '/contacto' },
  ],
  quick: [
    { label: 'Solicitar asesoría técnica', href: '/contacto' },
    { label: 'Recursos técnicos', href: '/centro-de-recursos' },
    { label: 'Formulario de contacto', href: '/contacto#formulario' },
  ],
};

export const primaryCta = {
  title: 'Conversemos sobre su aplicación',
  description:
    'Le ayudamos a identificar soluciones confiables para su operación, su activo o su proyecto, con respaldo técnico-comercial especializado y acceso a tecnologías de nivel internacional.',
  primary: { label: 'Solicitar evaluación técnica', href: '/contacto' },
  secondary: { label: 'Contactar a QTS', href: '/contacto#formulario' },
  background: assets.home.cta,
};
