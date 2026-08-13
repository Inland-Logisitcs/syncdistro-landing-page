import type { IntegrationsCopy } from '../types';

export const integrations: IntegrationsCopy = {
  meta: {
    title: 'Integraciones ERP',
    description:
      'SyncDistro consulta el catálogo de productos de tu ERP y le envía los pedidos generados en campo. Compatible con SyncFreight, Odoo, SAP y sistemas propios vía API.',
  },
  hero: {
    tagline: 'Integraciones',
    title: 'SyncDistro se conecta al ERP que ya usas',
    subtitle:
      'Dos puntos de contacto: SyncDistro consulta tu catálogo de productos y te entrega los pedidos generados en campo. Todo lo demás sigue ocurriendo en tu sistema.',
    ctaPrimary: 'Hablar con nosotros',
    ctaSecondary: 'Ver el sistema web',
  },
  note: {
    title: 'Compatible con:',
    description: 'SyncFreight, Odoo, SAP y sistemas propios que expongan una API.',
  },
  flows: {
    tagline: 'Qué viaja entre los sistemas',
    title: 'Dos flujos, en direcciones opuestas',
    items: [
      {
        title: 'Del ERP hacia SyncDistro: productos',
        description:
          'El catálogo se consulta desde el ERP con su código, nombre, descripción, categoría y precio base, y queda disponible en la app y en el sistema web para armar pedidos.',
      },
      {
        title: 'De SyncDistro hacia el ERP: pedidos',
        description:
          'Cada pedido confirmado se envía con el cliente, el vendedor, la visita de origen, los productos, cantidades, precios acordados y observaciones.',
      },
    ],
  },
  setup: {
    tagline: 'Configuración',
    title: 'Se configura una vez, por organización',
    subtitle: 'Sin desarrollo a medida: los endpoints y la forma de los datos se declaran desde el sistema web.',
    items: [
      {
        title: 'Registrar la integración',
        description:
          'Nombre, endpoint de consulta de productos, endpoint de creación de pedidos, credenciales y estado.',
      },
      {
        title: 'Mapear los productos',
        description:
          'Se define cómo interpretar y transformar la respuesta del ERP para que el catálogo se use correctamente dentro de SyncDistro.',
      },
      {
        title: 'Mapear los pedidos',
        description: 'Se define cómo convertir un pedido de SyncDistro al formato exacto que espera el ERP de destino.',
      },
      {
        title: 'Probar la conexión',
        description: 'Se valida que ambos endpoints respondan correctamente antes de dejar la integración activa.',
      },
    ],
  },
  traceability: {
    tagline: 'Trazabilidad',
    title: 'Saber qué pasó con cada pedido',
    heading: 'Nada se envía a ciegas',
    lead: 'Si el ERP rechaza un pedido, queda registrado con su motivo.',
    cta: '',
    frameLabel: 'pedidos',
    items: [
      {
        title: 'Estado del envío',
        description: 'Cada pedido indica si se creó correctamente en el ERP, si quedó pendiente o si presentó error.',
      },
      {
        title: 'Registros de la operación',
        description:
          'Se conservan logs de la creación y el envío de pedidos, como evidencia y para resolver errores sin adivinar.',
      },
      {
        title: 'Revisión antes de enviar',
        description: 'El vendedor confirma o corrige el pedido antes de que salga hacia el ERP.',
      },
    ],
  },
  faqs: {
    tagline: 'Preguntas frecuentes',
    title: 'Dudas sobre la integración',
    items: [
      {
        title: '¿Qué pasa si mi ERP no está en la lista?',
        description:
          'Si expone una API para consultar productos y crear pedidos, puede integrarse configurando sus endpoints y el mapeo de campos.',
      },
      {
        title: '¿SyncDistro modifica datos en mi ERP?',
        description:
          'Solo crea pedidos a través del endpoint que configures. No toca inventarios, facturas ni ningún otro registro.',
      },
      {
        title: '¿Puedo empezar sin integrar nada?',
        description:
          'Sí. La app funciona de forma autónoma para gestionar clientes y pedidos, y la integración se agrega cuando estés listo.',
      },
      {
        title: '¿Quién configura la integración?',
        description:
          'Un usuario administrador de la organización, con apoyo de tu equipo técnico si hace falta ajustar el mapeo de campos.',
      },
    ],
  },
  cta: {
    title: 'Cuéntanos qué ERP usas',
    subtitle: 'Revisamos su API contigo y te decimos qué hace falta para conectarlo.',
    primary: 'Escribirnos',
    secondary: 'Ver el sistema web',
  },
  frameLabels: {
    integration: 'configuración / integraciones',
  },
};
