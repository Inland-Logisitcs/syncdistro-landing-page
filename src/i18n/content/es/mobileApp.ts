import type { MobileAppCopy } from '../types';

export const mobileApp: MobileAppCopy = {
  meta: {
    title: 'App móvil para vendedores',
    description:
      'La app de SyncDistro para vendedores en campo: rutas asignadas, registro de visitas, notas de voz con transcripción automática y generación de pedidos.',
  },
  hero: {
    tagline: 'App para vendedores',
    title: 'La ruta del día, en el bolsillo del vendedor',
    subtitle:
      'Consultar las paradas asignadas, registrar cada visita con su resultado, dejar una nota de voz y armar el pedido antes de subirse al carro para la siguiente.',
    ctaPrimary: 'Descargar en Google Play',
    ctaSecondary: 'Ver el sistema web',
  },
  captions: {
    routes: 'Rutas asignadas',
    activeRoute: 'Ruta en progreso',
    map: 'Orden de visita en el mapa',
  },
  note: {
    title: 'Funciona en dos modos:',
    description: 'con rutas y ERP para la operación completa, o de forma autónoma solo con clientes y pedidos.',
  },
  features: {
    tagline: 'En la app',
    title: 'Lo que el vendedor puede hacer',
    items: [
      {
        title: 'Ver la ruta asignada',
        description:
          'Detalle de la ruta, orden sugerido de visitas y ubicación de cada cliente en el mapa, con navegación a la parada actual.',
      },
      {
        title: 'Iniciar, pausar y cerrar la ruta',
        description:
          'Marcar visitas como iniciadas o completadas, y pausar la ruta cuando surge una actividad ajena a ella.',
      },
      {
        title: 'Registrar la visita',
        description:
          'Resultado de la visita, notas, observaciones, motivo de no venta y fecha de seguimiento cuando corresponde.',
      },
      {
        title: 'Grabar una nota de voz',
        description:
          'Opcionalmente, grabar la conversación con el cliente o dictar los detalles relevantes al terminar la visita.',
      },
      {
        title: 'Transcripción automática',
        description: 'El audio se transcribe detectando el idioma, en español o inglés, y queda asociado a la visita.',
      },
      {
        title: 'Propuesta con IA',
        description:
          'De la transcripción se extraen productos, cantidades, precios acordados, fechas y acciones de seguimiento, listos para revisar.',
      },
      {
        title: 'Consultar clientes',
        description:
          'Buscar y consultar clientes y posibles clientes de la organización, con sus datos de contacto y ubicación.',
      },
      {
        title: 'Armar el pedido',
        description:
          'Seleccionar productos del catálogo del ERP, confirmar cantidades y precios, y enviar el pedido para su procesamiento.',
      },
      {
        title: 'En su idioma',
        description: 'Interfaz en español o inglés, con la moneda y los formatos que configure la organización.',
      },
    ],
  },
  visitFlow: {
    tagline: 'Una visita, paso a paso',
    title: 'Del mostrador al pedido en minutos',
    subtitle: 'El vendedor no transcribe nada dos veces: lo que dice en la visita es la base del pedido.',
    items: [
      {
        title: 'Llegar a la parada',
        description: 'La app muestra la parada actual, la dirección del negocio y la siguiente de la lista.',
      },
      {
        title: 'Iniciar la visita',
        description: 'La hora de inicio y las coordenadas quedan registradas automáticamente.',
      },
      {
        title: 'Grabar la nota',
        description: 'Al salir, una nota de voz con lo acordado: productos, cantidades, precios y compromisos.',
      },
      {
        title: 'Revisar y confirmar',
        description:
          'La app propone el resultado de la visita y las líneas del pedido; el vendedor corrige lo que haga falta y guarda.',
      },
    ],
  },
  standalone: {
    tagline: 'Clientes',
    title: 'También sirve sin rutas asignadas',
    heading: 'Modo autónomo',
    lead: 'Útil para equipos que aún no planifican rutas desde la oficina o que trabajan sin ERP conectado.',
    cta: '',
    items: [
      {
        title: 'Cartera a mano',
        description:
          'Clientes activos y posibles clientes con su dirección, teléfono y estado, con búsqueda y filtros.',
      },
      {
        title: 'Alta de nuevos negocios',
        description: 'Registrar un negocio nuevo durante el recorrido, con su ubicación y datos de contacto.',
      },
      {
        title: 'Pedidos directos',
        description: 'Generar un pedido para un cliente sin necesidad de una ruta activa ni de una visita programada.',
      },
    ],
    phoneAlt: 'Listado de clientes y posibles clientes en la app móvil de SyncDistro',
  },
  permissions: {
    tagline: 'Transparencia',
    title: 'Permisos y privacidad',
    subtitle: 'La app solicita acceso a la ubicación y al micrófono. Así se usan.',
    items: [
      {
        title: 'Ubicación durante la ruta',
        description:
          'Mientras una ruta está en progreso, la posición del vendedor se registra y se transmite al sistema web para mostrar el avance y guardar el recorrido. Al pausar la ruta el seguimiento se suspende, y al completarla o cancelarla se detiene.',
      },
      {
        title: 'Ubicación de cada visita',
        description:
          'Al iniciar una visita se guardan sus coordenadas, para dejar constancia de dónde se realizó y para poder geolocalizar al cliente.',
      },
      {
        title: 'Micrófono',
        description:
          'Solo se usa cuando el vendedor decide grabar una nota de voz. La grabación es opcional y la visita puede cerrarse sin ella.',
      },
      {
        title: 'Revocar los permisos',
        description:
          'Los permisos de ubicación y micrófono pueden retirarse en cualquier momento desde los ajustes del dispositivo; algunas funciones dejarán de estar disponibles.',
      },
    ],
  },
  privacyNote: {
    title: 'Más detalle:',
    description:
      'consulta la <a class="underline" href="%PRIVACY%">Política de Privacidad</a> para saber qué datos se recopilan, quién puede verlos y por cuánto tiempo se conservan.',
  },
  cta: {
    title: 'Ponla en manos de tu equipo',
    subtitle: 'Los vendedores necesitan una invitación de su organización para iniciar sesión.',
    primary: 'Descargar en Google Play',
    secondary: 'Solicitar una demo',
  },
};
