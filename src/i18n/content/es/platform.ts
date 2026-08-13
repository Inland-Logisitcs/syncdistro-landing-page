import type { PlatformCopy } from '../types';

export const platform: PlatformCopy = {
  meta: {
    title: 'Sistema web para administradores y gerentes',
    description:
      'El sistema web de SyncDistro: gestión de clientes, planificación y optimización de rutas, seguimiento en tiempo real, historial de visitas y pedidos hacia el ERP.',
  },
  hero: {
    tagline: 'Sistema web',
    title: 'Planifica, asigna y supervisa desde el navegador',
    subtitle:
      'Administradores y gerentes de ventas trabajan sobre el mapa: arman rutas con los clientes que quieren visitar, las asignan a un vendedor y siguen su avance sin llamar por teléfono.',
    ctaPrimary: 'Ingresar a la plataforma',
    ctaSecondary: 'Ver la app móvil',
  },
  note: {
    title: 'Nota:',
    description:
      'las vistas de clientes, visitas y pedidos de esta página son ilustrativas mientras se preparan las capturas definitivas.',
  },
  modules: {
    tagline: 'Módulos',
    title: 'Lo que se administra desde el sistema web',
    items: [
      {
        title: 'Clientes',
        description:
          'Registro, consulta y edición de clientes con nombre legal y comercial, tipo de negocio, contacto, dirección, información fiscal y documentos adjuntos.',
      },
      {
        title: 'Geolocalización',
        description:
          'Coordenadas obtenidas de la dirección, ingresadas manualmente o marcadas en el mapa, con visualización de la ubicación del cliente.',
      },
      {
        title: 'Rutas',
        description:
          'Creación desde el mapa, optimización del orden de visita, asignación a un vendedor y fecha de ejecución.',
      },
      {
        title: 'Seguimiento',
        description:
          'Posición del vendedor en tiempo real mientras la ruta está activa, recorrido almacenado, tiempos, distancia y gasto aproximado de combustible.',
      },
      {
        title: 'Visitas',
        description:
          'Historial completo con filtros por vendedor, cliente, fecha, resultado o ruta, incluyendo transcripción y análisis de la conversación.',
      },
      {
        title: 'Pedidos',
        description:
          'Revisión de los pedidos generados en campo, resultado del envío al ERP y registros de trazabilidad de cada operación.',
      },
      {
        title: 'Productos',
        description: 'Consulta del catálogo del ERP con código, nombre, descripción, categoría y precio base.',
      },
      {
        title: 'Colaboradores y roles',
        description:
          'Invitación por correo, asignación de roles, gestión de invitaciones pendientes y activación o inactivación de usuarios.',
      },
      {
        title: 'Organización',
        description:
          'Datos de la empresa, información fiscal, logo y configuración regional de moneda, fecha, hora y formato numérico.',
      },
    ],
  },
  customers: {
    tagline: 'Clientes',
    title: 'Un solo registro por negocio',
    heading: 'Gestión de clientes',
    lead: 'La base sobre la que se construyen las rutas y las visitas.',
    cta: '',
    frameLabel: 'clientes',
    items: [
      {
        title: 'Búsqueda antes de crear',
        description:
          'Por nombre, dirección, teléfono o tax ID, para no terminar con el mismo negocio registrado tres veces.',
      },
      {
        title: 'Importación desde un CRM',
        description: 'Los clientes que ya existen en un sistema externo pueden integrarse en lugar de recapturarse.',
      },
      {
        title: 'Documentos en su lugar',
        description:
          'Documentos fiscales y comerciales adjuntos al cliente, accesibles para todo el equipo autorizado.',
      },
    ],
  },
  visits: {
    tagline: 'Visitas',
    title: 'Qué pasó realmente en cada negocio',
    heading: 'Historial de visitas',
    lead: 'Con la transcripción y la propuesta de la IA a la vista.',
    cta: '',
    frameLabel: 'visitas / detalle',
    items: [
      {
        title: 'Resultado y contexto',
        description:
          'Venta realizada, cliente interesado, seguimiento pendiente, sin interés, negocio cerrado o no atendido, con notas y motivo de no venta.',
      },
      {
        title: 'Conversación disponible',
        description: 'Audio y transcripción asociados a la visita, consultables según los permisos del usuario.',
      },
      {
        title: 'Oportunidades identificadas',
        description: 'El análisis de la conversación resalta seguimientos pendientes y compromisos acordados.',
      },
    ],
  },
  tracking: {
    tagline: 'Seguimiento',
    title: 'El avance de la ruta, mientras ocurre',
    heading: 'Progreso de rutas',
    lead: 'El seguimiento se suspende cuando el vendedor pausa la ruta.',
    cta: '',
    frameLabel: 'rutas / detalle',
    screenshotAlt:
      'Detalle de una ruta asignada en SyncDistro, con el orden de visitas en el mapa y el panel de rastreo GPS',
    items: [
      {
        title: 'Posición en tiempo real',
        description: 'Mapa de progreso con la ubicación del vendedor mientras la ruta está en curso.',
      },
      {
        title: 'Recorrido almacenado',
        description: 'La trayectoria completa desde que la ruta inició queda guardada para consultarla después.',
      },
      {
        title: 'Métricas de la jornada',
        description:
          'Tiempos de inactividad, tiempo en carretera, permanencia en cada tienda, distancia recorrida y gasto aproximado de combustible.',
      },
    ],
  },
  access: {
    tagline: 'Acceso',
    title: 'Cada quien ve lo que le corresponde',
    subtitle:
      'El acceso a módulos, vistas y acciones depende del rol asignado, y toda la información está aislada por organización.',
    items: [
      {
        title: 'Inicio de sesión y recuperación',
        description: 'Acceso con correo y contraseña, cierre de sesión seguro y recuperación de contraseña por correo.',
      },
      {
        title: 'Roles con permisos',
        description: 'Cada usuario recibe un rol según su función, y ese rol define qué puede ver y hacer.',
      },
      {
        title: 'Invitaciones a colaboradores',
        description:
          'El administrador invita por correo asignando el rol; el invitado acepta y configura sus credenciales.',
      },
      {
        title: 'Auditoría',
        description: 'Registros que permiten identificar qué usuario cambió información relevante y cuándo lo hizo.',
      },
    ],
  },
  cta: {
    title: '¿Quieres verlo con tus propios datos?',
    subtitle: 'Preparamos una demo con tus clientes y tu catálogo para que veas el flujo completo.',
    primary: 'Ingresar a la plataforma',
    secondary: 'Ver integraciones ERP',
  },
  screenshotAlt: {
    routePlanner:
      'Mapa de clientes de SyncDistro con la herramienta de lazo seleccionando negocios para una ruta nueva',
  },
};
