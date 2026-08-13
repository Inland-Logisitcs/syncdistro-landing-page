import type { ContactCopy } from '../types';

export const contact: ContactCopy = {
  meta: {
    title: 'Contacto',
    description: 'Escríbenos para solicitar una demo de SyncDistro, resolver dudas o pedir soporte.',
  },
  hero: {
    tagline: 'Contacto',
    title: 'Hablemos de tu equipo en campo',
    subtitle:
      'Cuéntanos cuántos vendedores tienes, cómo registran hoy sus visitas y qué ERP usas. Con eso podemos mostrarte el flujo completo con tus propios datos.',
    ctaPrimary: 'Escribirnos',
    ctaSecondary: 'Ingresar a la plataforma',
  },
  channels: {
    title: 'Por dónde escribirnos',
    subtitle: 'Un solo buzón para ventas, dudas y soporte.',
    items: [
      {
        title: 'Ventas y demos',
        description:
          'Para conocer el producto, pedir una demo o solicitar una propuesta: <a class="text-primary underline dark:text-cyan-300" href="mailto:%EMAIL%">%EMAIL%</a>',
      },
      {
        title: 'Soporte a usuarios',
        description:
          'Si ya usas SyncDistro y necesitas ayuda, escribe desde el correo de tu organización a <a class="text-primary underline dark:text-cyan-300" href="mailto:%EMAIL%">%EMAIL%</a> indicando el nombre de tu organización.',
      },
      {
        title: 'Privacidad y datos',
        description:
          'Para consultas sobre datos personales, ubicación o grabaciones: <a class="text-primary underline dark:text-cyan-300" href="mailto:%PRIVACY_EMAIL%">%PRIVACY_EMAIL%</a>',
      },
      {
        title: 'Integraciones ERP',
        description:
          'Si quieres saber si tu ERP puede conectarse, cuéntanos cuál es y revisamos su API. Ver <a class="text-primary underline dark:text-cyan-300" href="%INTEGRATIONS%">integraciones</a>.',
      },
    ],
  },
  process: {
    tagline: 'Qué sigue',
    title: 'Cómo suele ser el primer contacto',
    subtitle: 'Sin presentaciones eternas: queremos entender tu operación antes de mostrarte pantallas.',
    items: [
      {
        title: 'Nos escribes',
        description: 'Un correo con el tamaño del equipo y cómo trabajan hoy es suficiente para empezar.',
      },
      {
        title: 'Conversamos',
        description: 'Una llamada corta para entender rutas, cartera de clientes y el ERP que usas.',
      },
      {
        title: 'Demo con tu contexto',
        description: 'Te mostramos el flujo con clientes y productos parecidos a los tuyos.',
      },
      {
        title: 'Propuesta',
        description: 'Alcance, plan recomendado y qué haría falta para poner el sistema en marcha.',
      },
    ],
  },
  cta: {
    title: '¿Listo para empezar?',
    subtitle: 'Si tu organización ya usa SyncDistro, pide a tu administrador que te envíe una invitación por correo.',
    primary: 'Escribir a ventas',
    secondary: 'Descargar la app',
  },
};
