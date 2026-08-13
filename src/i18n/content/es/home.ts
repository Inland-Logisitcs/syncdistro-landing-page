import type { HomeCopy } from '../types';

export const home: HomeCopy = {
  meta: {
    title: 'SyncDistro — Gestión comercial en campo para equipos de venta',
    description:
      'SyncDistro digitaliza la gestión de clientes, rutas, visitas comerciales y pedidos de los vendedores en campo, e integra las órdenes con tu ERP.',
  },
  hero: {
    title: 'Toda la actividad de tus vendedores en campo, <span class="text-accent">en un solo lugar</span>',
    subtitle:
      'SyncDistro digitaliza rutas, visitas y pedidos de los vendedores que recorren tiendas, abarroterías y supermercados.',
    subtitleExtra:
      'Una app móvil para el equipo de campo, un sistema web para quien supervisa, y los pedidos enviados directo a tu ERP.',
    ctaPrimary: 'Ingresar a la plataforma',
    ctaSecondary: 'Ver cómo funciona',
  },
  heroFrame: {
    label: 'clientes / mapa',
    alt: 'Mapa de clientes de SyncDistro con la herramienta de lazo seleccionando negocios para una ruta nueva',
  },
  note: {
    title: 'No reemplaza tu ERP:',
    description:
      'SyncDistro cubre la operación comercial en campo y envía los pedidos a SyncFreight, Odoo, SAP u otro sistema que ya uses.',
  },
  problem: {
    tagline: 'El punto de partida',
    title: 'La información de campo se pierde entre papeles y herramientas dispersas',
    subtitle:
      'Cuando cada visita se anota en un cuaderno, un chat o una hoja de cálculo distinta, el equipo pierde tiempo y la empresa pierde ventas.',
    items: [
      {
        title: 'Clientes duplicados',
        description:
          'El mismo negocio se registra varias veces con datos distintos, y nadie sabe cuál es el registro correcto.',
      },
      {
        title: 'Documentos que se extravían',
        description:
          'Documentos fiscales, fotos del establecimiento y datos de contacto quedan sueltos en el teléfono del vendedor.',
      },
      {
        title: 'Oportunidades sin seguimiento',
        description:
          'Un cliente interesado pide que vuelvan en dos semanas y ese compromiso nunca llega a ningún sistema.',
      },
      {
        title: 'Cero visibilidad para gerencia',
        description:
          'Sin datos de las visitas realizadas ni de las rutas ejecutadas, dirigir al equipo se vuelve una conversación de pasillo.',
      },
    ],
  },
  steps: {
    tagline: 'Cómo funciona',
    title: 'De la planificación de la ruta al pedido en tu ERP',
    subtitle: 'Un flujo continuo entre la oficina y la calle, sin transcribir información de un sistema a otro.',
    items: [
      {
        title: 'Paso 1: <span class="font-medium">Planificar la ruta</span>',
        description:
          'Desde el mapa del sistema web se seleccionan clientes y posibles clientes —uno por uno o en grupo con la herramienta de lazo— y SyncDistro calcula el orden óptimo de visita.',
      },
      {
        title: 'Paso 2: <span class="font-medium">Asignar al vendedor</span>',
        description:
          'La ruta se asigna a un vendedor con fecha de ejecución. Puede modificarse, reasignarse o cancelarse antes de que inicie.',
      },
      {
        title: 'Paso 3: <span class="font-medium">Ejecutar y registrar la visita</span>',
        description:
          'El vendedor ve su ruta en el mapa, navega a cada parada, inicia la visita y registra el resultado: venta realizada, cliente interesado, seguimiento pendiente, sin interés, negocio cerrado o no atendido.',
      },
      {
        title: 'Paso 4: <span class="font-medium">Grabar la nota y dejar que la IA la ordene</span>',
        description:
          'Una nota de voz se transcribe automáticamente en español o inglés, y la IA propone productos, cantidades, precios y acciones de seguimiento para que el vendedor solo revise y confirme.',
      },
      {
        title: 'Paso 5: <span class="font-medium">Enviar el pedido al ERP</span>',
        description:
          'Con la información confirmada se construye el pedido y se envía a tu ERP, donde continúan la facturación, la entrega y el cobro.',
      },
    ],
    done: 'Listo',
    phoneAlt: 'Ruta optimizada mostrada en el mapa de la app móvil',
  },
  features: {
    tagline: 'Funcionalidades',
    title: 'Todo lo que cubre SyncDistro',
    subtitle: 'Los módulos que usan a diario el equipo de campo y quienes lo supervisan.',
    items: [
      {
        title: 'Clientes con geolocalización',
        description:
          'Nombre legal y comercial, tipo de negocio, contacto, dirección, información fiscal y coordenadas obtenidas de la dirección o marcadas en el mapa.',
      },
      {
        title: 'Documentos del cliente',
        description:
          'Documentos fiscales y comerciales adjuntos al registro del cliente, disponibles para todo el equipo.',
      },
      {
        title: 'Sin registros duplicados',
        description:
          'Búsqueda por nombre, dirección, teléfono o tax ID que evita crear dos veces el mismo negocio, con opción de importar clientes desde un CRM externo.',
      },
      {
        title: 'Rutas optimizadas',
        description:
          'Selección de clientes en el mapa, orden de visita calculado automáticamente y estados claros: pendiente, asignada, en progreso, completada o cancelada.',
      },
      {
        title: 'Visitas con resultado',
        description:
          'Fecha y hora de inicio y fin, resultado de la visita, notas, motivo de no venta y fecha de seguimiento cuando corresponde.',
      },
      {
        title: 'Notas de voz con IA',
        description:
          'Transcripción automática en español o inglés y análisis que identifica productos, cantidades, precios acordados y acciones pendientes.',
      },
      {
        title: 'Pedidos hacia el ERP',
        description:
          'El pedido se construye desde la visita, el vendedor lo confirma y se envía al ERP con seguimiento del resultado y registro de trazabilidad.',
      },
      {
        title: 'Seguimiento de rutas',
        description:
          'Posición del vendedor en tiempo real mientras la ruta está activa, recorrido almacenado, tiempos, distancia y gasto aproximado de combustible.',
      },
      {
        title: 'Equipo y organización',
        description:
          'Invitación de colaboradores por correo, roles con permisos diferenciados y datos aislados por organización.',
      },
    ],
  },
  reps: {
    tagline: 'Para el equipo de campo',
    title: 'Una app pensada para usarse de pie, frente al mostrador',
    heading: 'App móvil para vendedores',
    lead: 'Disponible en Google Play. Funciona con rutas asignadas o de forma autónoma, solo con clientes y pedidos.',
    cta: 'Conocer la app móvil',
    items: [
      {
        title: 'La ruta del día, en orden',
        description: 'Paradas sugeridas, ubicación de cada cliente en el mapa y navegación hacia la siguiente parada.',
      },
      {
        title: 'Visitas en pocos toques',
        description: 'Iniciar y cerrar la visita con su resultado, sin formularios interminables.',
      },
      {
        title: 'Hablar en lugar de escribir',
        description:
          'Una nota de voz al salir del negocio reemplaza el cuaderno; la transcripción y la IA hacen el resto.',
      },
      {
        title: 'Pausa cuando hace falta',
        description:
          'Si el vendedor necesita atender algo ajeno a la ruta, la pausa detiene también la obtención de su ubicación.',
      },
    ],
    phoneRoutesAlt: 'Listado de rutas asignadas en la app móvil',
    phoneCustomersAlt: 'Listado de clientes en la app móvil',
  },
  managers: {
    tagline: 'Para administración y gerencia',
    title: 'Saber qué está pasando en la calle, mientras pasa',
    heading: 'Sistema web para supervisar',
    lead: 'Desde el navegador, sin instalar nada.',
    cta: 'Conocer el sistema web',
    items: [
      {
        title: 'Rutas bajo control',
        description:
          'Crear, optimizar, asignar, reasignar y consultar el histórico filtrando por vendedor, fecha, estado o zona.',
      },
      {
        title: 'Progreso en tiempo real',
        description:
          'Posición del vendedor en el mapa mientras la ruta está en progreso, con el recorrido completo almacenado.',
      },
      {
        title: 'Historial de visitas',
        description: 'Detalle de cada visita con filtros por vendedor, cliente, fecha, resultado o ruta.',
      },
      {
        title: 'Oportunidades detectadas',
        description: 'Visitas con venta, visitas sin venta y seguimientos que la IA identificó en la conversación.',
      },
    ],
    frameLabel: 'rutas / detalle',
    screenshotAlt:
      'Detalle de una ruta asignada en SyncDistro, con el orden de visitas en el mapa y el panel de rastreo GPS',
  },
  erp: {
    tagline: 'Integraciones',
    title: 'Los pedidos terminan donde ya trabajas',
    heading: 'SyncFreight, Odoo, SAP y más',
    lead: 'Facturación, inventario, entrega y cobro siguen en tu ERP. SyncDistro solo le entrega los pedidos.',
    cta: 'Ver integraciones ERP',
    items: [
      {
        title: 'Catálogo desde tu ERP',
        description: 'Los vendedores cotizan con los productos, categorías y precios que ya existen en tu sistema.',
      },
      {
        title: 'Mapeo configurable',
        description:
          'Endpoints, credenciales y transformación de campos se configuran por organización, sin desarrollo a medida.',
      },
      {
        title: 'Resultado visible',
        description:
          'Cada pedido muestra si se creó correctamente, quedó pendiente o presentó error, con su registro de trazabilidad.',
      },
    ],
    frameLabel: 'pedidos',
    screenshotAlt: 'Módulo de pedidos con el resultado del envío al ERP',
  },
  stats: {
    title: 'Diseñado para la operación real',
    subtitle: 'Detalles que definen cómo trabaja el sistema.',
    items: [
      { title: 'Idiomas soportados', amount: '2' },
      { title: 'Resultados de visita', amount: '6' },
      { title: 'Estados de ruta', amount: '5' },
      { title: 'Datos por organización', amount: '100%' },
    ],
  },
  faqs: {
    tagline: 'Dudas',
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que suelen preguntar los equipos antes de empezar.',
    items: [
      {
        title: '¿Necesito un ERP para usar SyncDistro?',
        description:
          'No. La app funciona de forma autónoma para gestionar clientes y pedidos, sin rutas ni integración. Cuando conectas un ERP se habilitan el catálogo de productos y el envío automático de pedidos.',
      },
      {
        title: '¿Cuándo se usa la ubicación del vendedor?',
        description:
          'Solo mientras una ruta está en progreso, para mostrar el avance y guardar el recorrido. Al pausar la ruta el seguimiento se suspende, y al completarla o cancelarla se detiene. Además se guardan las coordenadas de cada visita registrada. Puedes revisar el detalle en la <a class="text-primary underline dark:text-cyan-300" href="%PRIVACY%">Política de Privacidad</a>.',
      },
      {
        title: '¿Quién puede ver la posición de un vendedor?',
        description:
          'Únicamente los usuarios con el rol correspondiente dentro de su misma organización. La información no se comparte con otras organizaciones ni con terceros ajenos al servicio.',
      },
      {
        title: '¿Las grabaciones son obligatorias?',
        description:
          'No. Grabar la conversación o dejar una nota de audio es opcional y sirve como complemento; la visita se cierra igual registrando su resultado de forma manual.',
      },
      {
        title: '¿Qué pasa si la IA se equivoca?',
        description:
          'Lo que la IA extrae de la transcripción es una propuesta. El vendedor revisa, corrige o completa la información antes de guardarla y antes de que el pedido se envíe al ERP.',
      },
      {
        title: '¿Sirve si tengo varias empresas o marcas?',
        description:
          'Sí. Cada organización tiene sus propios usuarios, clientes, rutas e integraciones, y sus datos permanecen aislados de las demás.',
      },
      {
        title: '¿El sistema está en español?',
        description:
          'Sí. La app móvil y el sistema web están disponibles en español e inglés, y cada organización configura su moneda y sus formatos de fecha, hora y números.',
      },
      {
        title: '¿SyncDistro factura o gestiona entregas?',
        description:
          'No. Facturación, inventario, logística de entrega y cobro se quedan en tu ERP. SyncDistro se enfoca en la gestión comercial en campo y le entrega los pedidos.',
      },
    ],
  },
  cta: {
    title: 'Empieza a ordenar la operación en campo',
    subtitle: 'Cuéntanos cómo trabaja tu equipo y te mostramos cómo se vería en SyncDistro.',
    primary: 'Ingresar a la plataforma',
    secondary: 'Descargar la app',
    demoLink: 'Solicitar una demo',
  },
};
