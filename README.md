# SyncDistro — Sitio web

Sitio web público de **SyncDistro**, la plataforma de gestión comercial en campo (app móvil para
vendedores + sistema web para administradores y gerentes).

Construido con **Astro 7** y **Tailwind CSS v4**, partiendo de la plantilla AstroWind.

El sitio cumple dos funciones:

1. **Landing informativa** del producto.
2. **Páginas legales** exigidas por Google Play Store (`/privacy` y `/terms`), obligatorias porque
   la app móvil usa la ubicación GPS del dispositivo.

**En producción:** <https://inland-logisitcs.github.io/syncdistro-landing-page/>

---

## Comandos

| Comando           | Qué hace                                            |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`   |
| `npm run build`   | Genera el sitio estático en `dist/`                 |
| `npm run preview` | Sirve `dist/` localmente                            |
| `npm run check`   | Verifica tipos (astro), ESLint y formato (Prettier) |
| `npm run fix`     | Corrige ESLint y formato automáticamente            |

---

## Estructura

```
src/
  pages/
    index.astro          Landing
    app-movil.astro      App móvil para vendedores
    plataforma.astro     Sistema web para administradores
    integraciones.astro  Integraciones con ERP
    contacto.astro       Contacto
    privacy.md           Política de Privacidad  (obligatoria para Play Store)
    terms.mdx            Términos y Condiciones  (obligatoria para Play Store)
    404.astro
  components/
    mockups/             Marcos de dispositivo y vistas del sistema web
      PhoneFrame.astro   Marco de teléfono para las capturas de la app móvil
      BrowserFrame.astro Marco de navegador
      Screenshot.astro   Captura con variante clara y oscura según el tema
      HeroShowcase.astro Visual del hero (web + app)
      web/               Vistas aún placeholder: clientes, visita, pedidos, integración
    widgets/             Secciones reutilizables (Hero, Features, Content, Steps, FAQs, …)
  assets/images/web/     Capturas reales del sistema web (Astro las optimiza)
  links.ts               URLs y correos externos — revisar antes de publicar
  navigation.ts          Menú de cabecera y pie de página
  config.yaml            Nombre del sitio, dominio, SEO, idioma
```

### Añadir capturas del sistema web

1. Guardar el par claro/oscuro en `src/assets/images/web/` (**no** en `public/`: ahí no se
   optimizan y se publican tal cual, con su peso original).
2. Usarlas con `<Screenshot light="~/assets/images/web/XLight.png" dark="…Dark.png" alt="…" />`,
   normalmente dentro de un `<BrowserFrame>`.
3. Revisar que no contengan datos personales reales (nombres, correos, teléfonos): la página es
   pública. Los originales sin redactar van a `sin-publicar/`, que está en `.gitignore`.

---

## Pendientes antes de publicar

1. **`src/links.ts`** — reemplazar los placeholders por los valores reales:
   - `PLATFORM_URL` y `SIGNUP_URL` (login del sistema web)
   - `PLAY_STORE_URL` (ficha de la app en Google Play)
   - `CONTACT_EMAIL` y `PRIVACY_EMAIL`
2. **Dominio propio (opcional)** — hoy el sitio vive en la URL de GitHub Pages. Para pasarlo a
   `syncdistro.com`, ver _Cambiar a un dominio propio_ más abajo.
3. **Correos de los documentos legales** — `privacy.md` y `terms.mdx` mencionan
   `privacidad@syncdistro.com` y `contacto@syncdistro.com`; actualizarlos junto con `links.ts`.
4. **Revisión legal** — los textos de `/privacy` y `/terms` describen el funcionamiento real del
   producto (ubicación, grabaciones, IA, multi-tenant), pero conviene que los revise quien
   corresponda antes de enviarlos a Google Play.
5. **Capturas pendientes del sistema web** — ya son reales el mapa de clientes (hero de la landing
   y de `/plataforma`) y el detalle de ruta con rastreo GPS. Siguen siendo ilustrativas las vistas
   de `src/components/mockups/web/`: listado de clientes, detalle de visita, pedidos al ERP y
   configuración de la integración.
6. **Planes y precios** — no hay página de planes. Cuando se definan tarifas habrá que crearla
   (`src/pages/planes.astro`) y volver a enlazarla desde el menú y el pie de página.

---

## Despliegue (GitHub Pages)

El sitio se publica automáticamente en cada push a `main` mediante
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que construye el sitio y lo sube
como artefacto de Pages. También puede lanzarse a mano desde la pestaña **Actions →
Deploy to GitHub Pages → Run workflow**.

### Activación (una sola vez, en GitHub)

En el repositorio: **Settings → Pages → Build and deployment → Source: _GitHub Actions_**.

Sin este paso el workflow falla en el paso `Configure Pages`. No hace falta crear ninguna rama
`gh-pages`: el artefacto se sirve directamente.

### Por qué el sitio vive en un subdirectorio

Al ser un _project site_, GitHub Pages sirve el sitio en
`https://inland-logisitcs.github.io/syncdistro-landing-page/`, no en la raíz del dominio. Por eso
`src/config.yaml` declara:

```yaml
site: 'https://inland-logisitcs.github.io'
base: '/syncdistro-landing-page'
```

Todos los enlaces internos usan `getPermalink()` y los assets públicos `getAsset()`, así que
respetan ese `base` automáticamente. **Nunca escribir rutas absolutas a mano** (`href="/privacy"`):
quedarían fuera del subdirectorio y darían 404. En archivos Markdown que necesiten enlazar a otra
página del sitio, usar `.mdx` e importar `getPermalink` (ver `src/pages/terms.mdx`).

El workflow compara el `base` de `src/config.yaml` con el que informa GitHub Pages y falla con un
mensaje claro si dejan de coincidir (por ejemplo, si se renombra el repositorio).

### Cambiar a un dominio propio

Con un dominio propio el sitio se sirve en la **raíz**, no en un subdirectorio, así que hay que
cambiar el `base`. Si se olvida, todos los enlaces e imágenes darían 404 (el workflow lo detecta y
falla antes de publicar).

1. **DNS del dominio.** Para un subdominio, un solo registro:

   | Tipo  | Nombre | Valor                        |
   | ----- | ------ | ---------------------------- |
   | CNAME | `www`  | `inland-logisitcs.github.io` |

   Para el dominio raíz, cuatro registros A (o un `ALIAS`/`ANAME` a
   `inland-logisitcs.github.io` si el proveedor lo soporta):

   | Tipo | Nombre | Valor             |
   | ---- | ------ | ----------------- |
   | A    | `@`    | `185.199.108.153` |
   | A    | `@`    | `185.199.109.153` |
   | A    | `@`    | `185.199.110.153` |
   | A    | `@`    | `185.199.111.153` |

2. **En el proyecto:** poner `site: 'https://syncdistro.com'` y `base: '/'` en `src/config.yaml`,
   y crear `public/CNAME` con una sola línea con el dominio.
3. **En GitHub:** **Settings → Pages → Custom domain**, escribir el dominio y guardar. Cuando
   GitHub verifique el DNS y emita el certificado, marcar **Enforce HTTPS**.

---

## Imágenes

- **Capturas de la app móvil**: `public/img/app/*.jpeg`, usadas mediante
  `<PhoneFrame src="/img/app/appN.jpeg" />`.
- **Capturas del sistema web**: `src/assets/images/web/*.png`, en pares `…Light` / `…Dark`, usadas
  mediante `<Screenshot light dark alt />`. Astro las convierte a WebP con `srcset`.
- **Imagen Open Graph**: `src/assets/images/default.png` (1200×628).
- **Favicons**: `src/assets/favicons/`.

---

Basado en [AstroWind](https://github.com/arthelokyo/astrowind) (licencia MIT, ver `LICENSE.md`).
