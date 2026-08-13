# CLAUDE.md — SyncDistro Website

Este archivo provee contexto completo para que Claude Code pueda ayudar a construir y
personalizar el sitio web de SyncDistro. Léelo antes de hacer cualquier cambio al template.

---

## ¿Qué es este proyecto?

Este es el **sitio web público de SyncDistro**, construido con **Astro** y desplegado en
**GitHub Pages**. El sitio tiene dos propósitos principales:

1. **Landing page informativa** sobre el producto SyncDistro (web + app móvil).
2. **Páginas legales** requeridas por Google Play Store: Política de Privacidad y Términos y
   Condiciones. Son obligatorias porque la app móvil usa la ubicación GPS del dispositivo.

---

## ¿Qué es SyncDistro?

SyncDistro es una **plataforma de gestión comercial en campo** compuesta por:

- Una **aplicación web** (Angular + TailAdmin) para administradores y gerentes de ventas.
- Una **aplicación móvil** para vendedores en campo (disponible en Google Play Store).

### Propósito del producto

SyncDistro digitaliza y centraliza la gestión de clientes, visitas comerciales y generación de
pedidos realizados por vendedores en campo. Reemplaza procesos manuales (papel, notas
sueltas, herramientas desconectadas) con un sistema integrado.

### El problema que resuelve

Los vendedores ambulantes visitan negocios como tiendas, abarroterías, minimarkets y supermercados
para ofrecer productos y registrar pedidos. Antes de SyncDistro, esta información se registraba de forma
manual o en herramientas dispersas, causando:

- Duplicación de registros de clientes.
- Pérdida de documentos y pedidos.
- Falta de seguimiento a oportunidades de negocio.
- Sin visibilidad para gerentes sobre lo que ocurre en campo.

---

## Características principales del producto

### App Móvil (para vendedores)

- **Consulta de rutas asignadas** con visualización en mapa y orden sugerido de visitas.
- **Registro de visitas** a clientes con resultado (venta realizada, cliente interesado,
  seguimiento pendiente, sin interés, negocio cerrado, no atendido).
- **Grabación de notas de voz** durante la visita con **transcripción automática** (español e inglés).
- **Análisis con IA** de las transcripciones para identificar productos solicitados, precios,
  cantidades y acciones de seguimiento.
- **Generación de pedidos** directamente desde la visita, usando el catálogo del ERP.
- **Seguimiento GPS en tiempo real** mientras la ruta está activa (se pausa cuando la ruta
  está en pausa).
- Funciona en **dos modos**:
  - **Tier 0 (standalone):** Gestión de clientes y órdenes sin necesitar ERP ni rutas.
  - **Tier 1 (completo):** Rutas, visitas, integración con ERP, GPS y optimización.

### Sistema Web (para administradores y gerentes)

- **Gestión de clientes** con geolocalización y visualización en mapa.
- **Planificación y optimización de rutas** con herramienta de selección tipo lazo en mapa.
- **Asignación de rutas** a vendedores con fecha de ejecución.
- **Seguimiento en tiempo real** de la posición del vendedor durante una ruta.
- **Historial de visitas** con filtros por vendedor, cliente, fecha y resultado.
- **Módulo de pedidos** con integración a ERP externo (SyncFreight, Odoo, SAP u otros).
- **Configuración de integraciones ERP** con mapeo de campos personalizable.
- **Gestión de colaboradores** con invitación por correo y asignación de roles.
- Soporte para **multi-tenancy**: cada organización tiene sus datos aislados.

---

## Uso de ubicación (crítico para privacidad)

La app móvil usa la **ubicación GPS del dispositivo** para:

1. **Rastreo de rutas activas:** La posición del vendedor se registra y transmite en tiempo real
   al sistema web mientras una ruta está en progreso. El rastreo se **suspende automáticamente**
   cuando el vendedor pausa la ruta.
2. **Geolocalización de visitas:** Se registran las coordenadas GPS de cada visita realizada.
3. **Optimización de rutas:** Las coordenadas de los clientes se usan para calcular el orden
   óptimo de visita.

**La ubicación NO se comparte con terceros** más allá del sistema interno de la organización
a la que pertenece el vendedor. Los administradores de la organización pueden ver la posición
de los vendedores de su propia organización.

---

## Páginas que debe tener el sitio web

### 1. Landing Page (`/`)

Página principal con:

- **Hero:** Nombre del producto, tagline y descripción breve.
- **Problema:** Lo que SyncDistro resuelve.
- **Features:** Características principales (rutas, visitas, IA, pedidos, GPS).
- **Dos audiencias:** Sección para vendedores (app móvil) y para administradores (web).
- **CTA:** Llamada a la acción para contactar o registrarse.
- **Footer:** Links a Política de Privacidad y Términos y Condiciones (obligatorio).

### 2. Política de Privacidad (`/privacy`)

**Obligatoria para Google Play Store.** Debe mencionar explícitamente:

- Qué datos se recopilan (ubicación GPS, notas de voz, datos de clientes, etc.).
- Para qué se usa la ubicación (rastreo de rutas, registro de visitas, optimización).
- Quién puede ver la ubicación (administradores de la misma organización).
- Que el rastreo se detiene cuando la ruta se pausa o completa.
- Cómo el usuario puede revocar permisos (desde ajustes del dispositivo).
- Retención de datos y contacto.

### 3. Términos y Condiciones (`/terms`)

**Obligatorios para Google Play Store.** Debe cubrir:

- Descripción del servicio.
- Uso aceptable.
- Cuentas y organizaciones (multi-tenant).
- Limitación de responsabilidad.
- Modificaciones al servicio.

---

## Estado actual del sitio (adaptación ya realizada)

El template AstroWind ya fue adaptado. Lo que existe hoy:

El sitio es **bilingüe**: español en la raíz, inglés bajo `/en/`.

| Español          | Inglés             | Contenido                                                                                      |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| `/`              | `/en/`             | Landing: hero, problema, cómo funciona, funcionalidades, dos audiencias, ERP, datos, FAQs, CTA |
| `/app-movil`     | `/en/mobile-app`   | App móvil para vendedores (capturas de `public/img/app`)                                       |
| `/plataforma`    | `/en/platform`     | Sistema web para administradores y gerentes                                                    |
| `/integraciones` | `/en/integrations` | Integraciones con ERP (productos y pedidos)                                                    |
| `/contacto`      | `/en/contact`      | Canales de contacto por correo (no hay formulario: el sitio es estático)                       |
| `/privacy`       | `/en/privacy`      | Política de Privacidad (Play Store)                                                            |
| `/terms`         | `/en/terms`        | Términos y Condiciones (Play Store)                                                            |
| `/404`           | —                  | Página de error, bilingüe (GitHub Pages sirve una sola)                                        |

Convenciones importantes:

- **Terminología local:** el mercado es Guatemala/Centroamérica. Usar **tiendas, abarroterías,
  minimarkets, depósitos, supermercados**. Evitar "delis" y "bodegas" (que aquí significa almacén,
  no tienda de barrio): suenan a traducción y no es como habla el cliente.
- **Idiomas:** español (por defecto, en la raíz) e inglés (`/en/`). El mapa de rutas de cada
  idioma está en `ROUTES` (`src/i18n/index.ts`); de ahí salen el menú, el selector `ES`/`EN` y las
  etiquetas `hreflang`. El español no lleva prefijo a propósito: `/privacy` y `/terms` son las URLs
  declaradas en Google Play.
- **Detección de idioma:** solo en la portada en español, con un script en línea
  (`LanguageAlternates.astro`). Respeta la preferencia guardada en `localStorage`
  (`syncdistro-lang`); si no hay, usa `navigator.language` — español se queda, cualquier otro va a
  `/en/`. Los enlaces profundos **nunca** redirigen, para que un enlace compartido abra siempre en
  el idioma que indica su URL.
- **Estructura vs. texto:** la estructura de cada página vive una sola vez en
  `src/components/pages/*.astro` y recibe el texto por props desde
  `src/i18n/content/<idioma>/<pagina>.ts`. Las cadenas de menú, pie y 404 están en
  `src/i18n/ui.ts`. Para cambiar una frase se edita el archivo de texto, nunca la plantilla.
- **Enlaces dentro de los textos:** usar los marcadores `%PRIVACY%`, `%TERMS%`, `%CONTACT%`,
  `%INTEGRATIONS%`, `%EMAIL%`, `%PRIVACY_EMAIL%` y pasar el texto por `resolveLinks()` /
  `resolveItems()`. Nunca escribir URLs internas a mano en el texto.
- **Iconos:** no se traducen. Viven en el componente de la página y se emparejan **por posición**
  con los items del texto; si se añade o quita un item hay que ajustar el array de iconos.
- **`transition:persist` y el idioma:** la clave del header incluye el idioma
  (`header-${locale}`). Con una clave fija, al cambiar de idioma View Transitions reutilizaba el
  header del idioma anterior y quedaba el menú en el idioma equivocado.
- **Paleta:** azul petróleo / teal tomado de la app móvil, definida en
  `src/components/CustomStyles.astro` (`--aw-color-primary: rgb(11 92 116)`). Los widgets usan
  `primary` / `secondary` / `accent`, no colores literales.
- **URLs y correos externos:** centralizados en `src/links.ts`. `PLATFORM_URL` ya es la real
  (`https://distro.syncfreight.com/`); Google Play y los correos siguen siendo placeholders. No
  hardcodear estas URLs en las páginas.
- **Enlaces internos:** siempre con `getPermalink()` de `src/utils/permalinks.ts`, para que
  respeten el `base` si el sitio se sirve desde un subdirectorio.
- **Capturas de la app:** en `public/img/app/*.jpeg`, envueltas con
  `src/components/mockups/PhoneFrame.astro`.
- **Marca:** el logo oficial es `src/assets/images/syncdistro-logo.png` (icono turquesa
  `#28D8C0`), usado en `Logo.astro` junto al logotipo, donde "Distro" se pone turquesa solo en tema
  oscuro, igual que en la app. La imagen Open Graph (`src/assets/images/default.png`) se genera con
  ese mismo logo.
- **Capturas del sistema web:** van en `src/assets/images/web/` (nunca en `public/`, ahí no se
  optimizan), en pares claro/oscuro, y se usan con `src/components/mockups/Screenshot.astro`
  dentro de un `<BrowserFrame>`. El cambio claro/oscuro se hace por la clase `.dark`, no por
  `prefers-color-scheme`, para que respete el interruptor manual de tema.
  Ya son reales: mapa de clientes (`CreacionRuta*`) y detalle de ruta con rastreo GPS
  (`Monitoreo*`).
- **Vistas del sistema web aún ilustrativas:** listado de clientes, detalle de visita, pedidos al
  ERP y configuración de integración, en `src/components/mockups/web/`, marcadas con
  `isPlaceholder` en `BrowserFrame`. Al llegar la captura real, sustituir el contenido del
  `<BrowserFrame>` por un `<Screenshot>` y quitar `isPlaceholder`.
- **Datos personales en las capturas:** el sitio es público. Antes de publicar una captura hay que
  revisar nombres, correos y teléfonos reales. Los originales sin redactar se guardan en
  `sin-publicar/` (ignorado por git y fuera del build).
- **Espacios en blanco en Astro:** el compilador colapsa el espacio entre un texto y un elemento
  inline siguiente. Usar `{' '}` explícito (ver `src/pages/index.astro`).
- **Sin página de planes:** no hay tarifas definidas, así que no existe `/planes` ni el widget
  `Pricing`. Si se definen precios, hay que crear la página en los dos idiomas, registrarla en
  `ROUTES` y volver a enlazarla en `src/navigation.ts`.
- **Eliminado del template:** blog completo (posts, RSS, categorías, tags), páginas de demo
  (`homes/`, `landing/`, about, services, pricing), widgets sin uso (Testimonials, Brands,
  Hero2, HeroText, BlogLatestPosts, Pricing…), formulario de contacto no funcional y DecapCMS.

---

## Stack técnico del sitio web

| Capa            | Tecnología                                       |
| --------------- | ------------------------------------------------ |
| Framework       | Astro                                            |
| Estilos         | Tailwind CSS                                     |
| Despliegue      | GitHub Pages (GitHub Actions)                    |
| Contenido legal | Markdown en `src/pages/privacy.md` y `terms.mdx` |

### Despliegue en GitHub Pages

- **Repositorio:** `Inland-Logisitcs/syncdistro-landing-page`.
- **URL pública:** <https://inland-logisitcs.github.io/syncdistro-landing-page/>
- **Workflow:** `.github/workflows/deploy.yml` — en cada push a `main` construye y sube el
  artefacto de Pages (`actions/upload-pages-artifact` + `actions/deploy-pages`). No hay rama
  `gh-pages`. Requiere que en el repositorio esté seleccionado
  _Settings → Pages → Source: GitHub Actions_.
- **`actions.yaml`** sigue siendo solo CI (`npm run check` + `npm run build`).

```yaml
# src/config.yaml — es un "project site", el sitio vive en un subdirectorio
site: 'https://inland-logisitcs.github.io'
base: '/syncdistro-landing-page'
```

**Consecuencia importante del `base`:** nunca escribir rutas absolutas a mano
(`href="/privacy"`), porque se saldrían del subdirectorio y darían 404. Usar `getPermalink()`
para páginas y `getAsset()` para archivos de `public/`. En contenido Markdown que necesite
enlazar a otra página, usar `.mdx` e importar `getPermalink` (ver `src/pages/terms.mdx`).
El workflow verifica que el `base` declarado coincida con el que informa GitHub Pages.

`public/.nojekyll` existe para que GitHub no intente procesar el sitio con Jekyll (que ignoraría
el directorio `_astro/`).

---

## Tono y estilo del sitio

- **Profesional pero accesible.** No es un sitio técnico; debe ser entendible para gerentes de
  ventas y dueños de empresas de distribución.
- **Bilingüe:** El producto soporta español e inglés. El sitio puede estar en español
  inicialmente (mercado latinoamericano) o con soporte i18n si se desea.
- **Colores:** Sin paleta oficial definida aún — usar azules/grises corporativos como
  placeholder hasta que se defina branding oficial.

---

## Contexto adicional del proyecto

- **Backend:** NestJS con framework interno "Kraken" para generación automática de CRUDs.
- **Base de datos:** MongoDB con multi-tenancy por base de datos separada (una DB por org).
- **Integraciones ERP soportadas:** SyncFreight, Odoo, SAP, y sistemas custom via API.
- **La app móvil NO requiere ERP ni rutas activas en Tier 0** (importante para la publicación
  en Play Store sin restricciones).
- **Notas de voz y transcripciones** son complemento informativo, no el mecanismo principal
  para cerrar una visita.

---

## Preguntas frecuentes para el desarrollo del sitio

**¿Dónde van las páginas legales?**
En Astro, pueden ser archivos `.md` procesados como páginas estáticas, o componentes
`.astro` con el texto inline. Markdown es preferible para facilitar edits futuros.

**¿Hay un logo?**
Aún no hay assets de branding definitivos. Usar texto o un placeholder SVG hasta que se
proporcionen.

**¿El sitio necesita formulario de contacto?**
Por ahora no es prioritario. Un email de contacto en el footer es suficiente.
