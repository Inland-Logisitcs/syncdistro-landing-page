# SyncDistro — Sitio web

Sitio web público de **SyncDistro**, la plataforma de gestión comercial en campo (app móvil para
vendedores + sistema web para administradores y gerentes).

Construido con **Astro 7** y **Tailwind CSS v4**, partiendo de la plantilla AstroWind.

El sitio cumple dos funciones:

1. **Landing informativa** del producto.
2. **Páginas legales** exigidas por Google Play Store (`/privacy` y `/terms`), obligatorias porque
   la app móvil usa la ubicación GPS del dispositivo.

**En producción:** <https://syncdistro.syncfreight.com/>

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
  pages/                 Rutas. El español va en la raíz, el inglés bajo /en/
    index.astro            /                 · en/index.astro          /en/
    app-movil.astro        /app-movil        · en/mobile-app.astro     /en/mobile-app
    plataforma.astro       /plataforma       · en/platform.astro       /en/platform
    integraciones.astro    /integraciones    · en/integrations.astro   /en/integrations
    contacto.astro         /contacto         · en/contact.astro        /en/contact
    privacy.md             /privacy          · en/privacy.md           /en/privacy
    terms.mdx              /terms            · en/terms.mdx            /en/terms
    404.astro              bilingüe (GitHub Pages sirve un solo 404)
  components/
    pages/               Estructura de cada página, común a los dos idiomas
    mockups/             Marcos de dispositivo y vistas del sistema web
      PhoneFrame.astro   Marco de teléfono para las capturas de la app móvil
      BrowserFrame.astro Marco de navegador
      Screenshot.astro   Captura con variante clara y oscura según el tema
      HeroShowcase.astro Visual del hero (web + app)
      web/               Vistas aún placeholder: clientes, visita, pedidos, integración
    widgets/             Secciones reutilizables (Hero, Features, Content, Steps, FAQs, …)
  i18n/
    index.ts             Idiomas, mapa de rutas y helpers (localePath, resolveLinks)
    ui.ts                Cadenas de interfaz: menú, pie, 404, aviso superior
    content/es|en/*.ts   Texto de cada página, un archivo por página e idioma
  assets/images/web/     Capturas reales del sistema web (Astro las optimiza)
  links.ts               URLs y correos externos — revisar antes de publicar
  navigation.ts          Menú de cabecera y pie de página, por idioma
  config.yaml            Nombre del sitio, dominio, SEO, idioma por defecto
```

### Editar textos o traducir

La estructura visual de cada página vive una sola vez en `src/components/pages/`; el texto está en
`src/i18n/content/<idioma>/<pagina>.ts`. Para cambiar una frase se edita el archivo del idioma
correspondiente, no la plantilla.

- Los textos admiten HTML sencillo y los marcadores `%PRIVACY%`, `%TERMS%`, `%CONTACT%`,
  `%INTEGRATIONS%`, `%EMAIL%` y `%PRIVACY_EMAIL%`, que se sustituyen por la URL o el correo del
  idioma de la página. **No escribir URLs internas a mano** en los textos.
- Los iconos no se traducen: viven en el componente de la página y se emparejan **por posición** con
  los items del texto. Si se añade o quita un item hay que ajustar también el array de iconos.
- Las cadenas de menú, pie de página y 404 están en `src/i18n/ui.ts`.
- Para añadir una página nueva hay que registrarla en `ROUTES` (`src/i18n/index.ts`) con su ruta en
  los dos idiomas; de ahí salen el menú, el selector de idioma y las etiquetas `hreflang`.

### Cómo se elige el idioma

- El **español está en la raíz** y el inglés bajo `/en/`. Se hizo así a propósito: `/privacy` y
  `/terms` son las URLs declaradas en Google Play y moverlas las rompería.
- En la **portada en español** (y solo ahí) un script decide: si hay un idioma guardado se respeta;
  si no, se usa `navigator.language` — español se queda, cualquier otro idioma va a `/en/`.
- Los **enlaces profundos nunca redirigen**: `/plataforma` siempre abre en español y `/en/platform`
  siempre en inglés, sin importar el navegador de quien los abra. Para eso están los `hreflang`.
- El **selector `ES`/`EN`** del header lleva a la página equivalente y guarda la preferencia en
  `localStorage` (`syncdistro-lang`), así la detección automática no la sobrescribe después.

### Añadir capturas del sistema web

1. Guardar el par claro/oscuro en `src/assets/images/web/` (**no** en `public/`: ahí no se
   optimizan y se publican tal cual, con su peso original).
2. Usarlas con `<Screenshot light="~/assets/images/web/XLight.png" dark="…Dark.png" alt="…" />`,
   normalmente dentro de un `<BrowserFrame>`.
3. Revisar que no contengan datos personales reales (nombres, correos, teléfonos): la página es
   pública. Los originales sin redactar van a `sin-publicar/`, que está en `.gitignore`.

---

## Pendientes antes de publicar

1. **`src/links.ts`** — quedan placeholders por reemplazar:
   - `PLAY_STORE_URL` (ficha de la app en Google Play)
   - `CONTACT_EMAIL` y `PRIVACY_EMAIL`
   - `PLATFORM_URL` ya apunta al sistema real (`https://distro.syncfreight.com/`).
2. **Dominio propio** — ya configurado: `syncdistro.syncfreight.com`.
3. **Correos de los documentos legales** — `privacy.md` y `terms.mdx` mencionan
   `privacidad@syncdistro.com` y `contacto@syncdistro.com`; actualizarlos junto con `links.ts`.
4. **Revisión legal** — los textos de `/privacy` y `/terms` describen el funcionamiento real del
   producto (ubicación, grabaciones, IA, multi-tenant), pero conviene que los revise quien
   corresponda antes de enviarlos a Google Play.
5. **Capturas pendientes del sistema web** — ya son reales el mapa de clientes (hero de la landing
   y de `/plataforma`) y el detalle de ruta con rastreo GPS. Siguen siendo ilustrativas las vistas
   de `src/components/mockups/web/`: listado de clientes, detalle de visita, pedidos al ERP y
   configuración de la integración. Las capturas reales están en español, así que en el sitio en
   inglés solo se traducen la etiqueta del marco y el texto alternativo; cuando existan capturas en
   inglés se puede pasar un par distinto por idioma.
6. **Planes y precios** — no hay página de planes. Cuando se definan tarifas habrá que crearla
   (`src/pages/planes.astro` y `src/pages/en/pricing.astro`), registrarla en `ROUTES` y volver a
   enlazarla desde el menú y el pie de página.
7. **Revisión de la traducción al inglés** — los textos en inglés están escritos, pero conviene que
   alguien del equipo comercial los revise antes de darles difusión.

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

### Dominio y `base`

El sitio usa el dominio propio `syncdistro.syncfreight.com`, así que se sirve en la **raíz** y
`src/config.yaml` declara:

```yaml
site: 'https://syncdistro.syncfreight.com'
base: '/'
```

El dominio está además en `public/CNAME`, para que sobreviva a los despliegues.

> **Ojo con el `base`.** GitHub Pages sirve el sitio de dos formas distintas según la configuración:
> en `https://<usuario>.github.io/<repo>/` si no hay dominio propio, y en la raíz del dominio si lo
> hay. El `base` tiene que coincidir con la que esté activa. Si no coincide, el HTML pide los assets
> desde una ruta que no existe y **el sitio carga sin estilos** (nos pasó al activar el dominio: el
> `base` seguía siendo `/syncdistro-landing-page`). El workflow compara ambos valores y falla con un
> mensaje claro antes de publicar.

Todos los enlaces internos usan `getPermalink()` y los assets públicos `getAsset()`, así que
respetan el `base` automáticamente. **Nunca escribir rutas absolutas a mano** (`href="/privacy"`).
En archivos Markdown que necesiten enlazar a otra página del sitio, usar `.mdx` e importar
`getPermalink` (ver `src/pages/terms.mdx`).

### Volver a la URL de GitHub Pages, o cambiar de dominio

Si se quita el dominio propio o se cambia por otro, hay que actualizar `src/config.yaml` y
`public/CNAME` en el mismo commit:

| Escenario                        | `site`                               | `base`                     | `public/CNAME`    |
| -------------------------------- | ------------------------------------ | -------------------------- | ----------------- |
| Dominio propio (actual)          | `https://syncdistro.syncfreight.com` | `/`                        | el dominio        |
| Sin dominio propio, project site | `https://inland-logisitcs.github.io` | `/syncdistro-landing-page` | borrar el archivo |

Para un dominio nuevo, además de eso: en **Settings → Pages → Custom domain** indicar el dominio, y
en el DNS crear un `CNAME` del subdominio hacia `inland-logisitcs.github.io` (o, para un dominio
raíz, los cuatro registros A de GitHub Pages: `185.199.108.153`, `185.199.109.153`,
`185.199.110.153`, `185.199.111.153`). Cuando GitHub emita el certificado, marcar **Enforce HTTPS**.

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
