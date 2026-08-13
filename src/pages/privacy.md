---
title: 'Política de Privacidad'
layout: '~/layouts/MarkdownLayout.astro'
---

_Última actualización_: 12 de agosto de 2026

Esta Política de Privacidad describe qué información recopila **SyncDistro**, con qué finalidad
la utiliza, con quién la comparte y qué opciones tienen las personas que usan el servicio.
Aplica tanto a la **aplicación móvil** para vendedores como al **sistema web** para
administradores y gerentes.

Al usar SyncDistro aceptas las prácticas descritas en este documento.

## Resumen rápido

- SyncDistro es una herramienta de trabajo que las empresas entregan a su personal de ventas.
- La aplicación móvil usa la **ubicación GPS del dispositivo** para mostrar el avance de una ruta
  de visitas y para registrar dónde se realizó cada visita.
- El seguimiento de ubicación ocurre **únicamente mientras una ruta está en progreso**. Si el
  vendedor pausa la ruta, el seguimiento se **suspende**. Al completarla o cancelarla, se
  **detiene**.
- La ubicación puede ser vista por los usuarios autorizados **de la misma organización** a la que
  pertenece el vendedor. **No se comparte con terceros ajenos a la prestación del servicio y no
  se vende ni se usa con fines publicitarios.**
- Grabar una nota de voz durante una visita es **opcional**.
- Los permisos de ubicación y micrófono pueden retirarse en cualquier momento desde los ajustes
  del dispositivo.

## Cómo se organiza la información: organizaciones

SyncDistro funciona por **organizaciones**. Cada empresa que contrata el servicio tiene su propio
espacio, y sus datos permanecen aislados de los de las demás organizaciones.

Cada usuario pertenece a una única organización y solo puede ver y gestionar la información de
esa organización.

Los datos comerciales que se registran en la plataforma —clientes, visitas, rutas, pedidos y
documentos— son proporcionados y administrados por la organización que contrata el servicio.
Esa organización decide qué información captura, quién de su equipo puede consultarla y a qué
sistema ERP se envían los pedidos. SyncDistro los trata siguiendo sus instrucciones y con las
finalidades descritas en esta política.

## Información que recopilamos

### Datos de la cuenta de usuario

Nombre, correo electrónico, contraseña (almacenada de forma cifrada), rol asignado, estado de la
cuenta y organización a la que pertenece.

### Datos de la organización

Nombre, dirección, teléfono, correo electrónico, información fiscal y logo de la organización, así
como su configuración regional (moneda y formatos de fecha, hora y números).

### Datos de clientes y posibles clientes

Registrados por los usuarios durante su actividad comercial: nombre legal, nombre comercial, tipo
de negocio, persona de contacto, teléfono, correo electrónico, dirección, coordenadas geográficas,
información fiscal (tax ID o EIN) y documentos fiscales o comerciales adjuntos.

### Datos de ubicación

Coordenadas geográficas del dispositivo del vendedor y de los establecimientos visitados. El
detalle de su uso está en la sección [Uso de la ubicación](#ubicacion).

### Grabaciones de audio y transcripciones

Cuando el vendedor decide grabar la conversación de una visita o dictar una nota de audio, se
almacenan el archivo de audio, su transcripción automática y el resultado del análisis realizado
sobre esa transcripción. **Esta función es opcional**: una visita puede registrarse y cerrarse sin
ninguna grabación.

### Datos de la actividad comercial

Rutas asignadas y su estado, fecha y hora de inicio y finalización de cada visita, resultado de la
visita, notas y observaciones, motivo de no venta, fechas de seguimiento, productos, cantidades,
precios acordados y pedidos generados.

### Datos técnicos y registros de auditoría

Registros que permiten identificar qué usuario modificó información relevante y cuándo lo hizo, así
como registros de trazabilidad del envío de pedidos al sistema ERP de la organización.

<span id="ubicacion"></span>

## Uso de la ubicación

La aplicación móvil solicita acceso a la ubicación del dispositivo para tres finalidades concretas:

1. **Seguimiento de rutas activas.** Mientras una ruta está en progreso, la posición del vendedor
   se registra y se transmite al sistema web para que la organización pueda ver el avance de la
   ruta en un mapa y conservar el recorrido realizado, junto con datos derivados como distancia
   recorrida, tiempo en carretera, tiempo de permanencia en cada establecimiento y tiempos de
   inactividad.
2. **Geolocalización de visitas.** Al registrar una visita se guardan sus coordenadas, para dejar
   constancia del lugar donde se realizó y para poder ubicar al cliente en el mapa.
3. **Optimización de rutas.** Las coordenadas de los clientes se utilizan para calcular el orden
   más eficiente de visita.

### Cuándo se obtiene y cuándo no

- El seguimiento de la posición del vendedor ocurre **solo mientras una ruta está en progreso**.
- Si el vendedor **pausa** la ruta para atender una actividad ajena a ella, la obtención de la
  ubicación se **suspende temporalmente**.
- Al **completar** o **cancelar** la ruta, el seguimiento se **detiene**.
- Cuando no hay ninguna ruta en progreso, la aplicación no realiza seguimiento de la ubicación.

### Quién puede ver la ubicación

Únicamente los usuarios autorizados de la **misma organización** a la que pertenece el vendedor,
de acuerdo con el rol que tengan asignado. La ubicación **no se comparte con otras organizaciones,
no se vende, no se cede a terceros con fines publicitarios ni se usa para elaborar perfiles
comerciales**.

## Permisos del dispositivo

La aplicación móvil solicita los siguientes permisos:

| Permiso                   | Para qué se usa                                                 | ¿Obligatorio?                 |
| ------------------------- | --------------------------------------------------------------- | ----------------------------- |
| Ubicación                 | Seguimiento de la ruta en progreso y geolocalización de visitas | Necesario para ejecutar rutas |
| Micrófono                 | Grabar la conversación o la nota de audio de una visita         | Opcional                      |
| Almacenamiento / archivos | Adjuntar documentos y fotografías del establecimiento           | Opcional                      |

Los permisos pueden **concederse o retirarse en cualquier momento** desde los ajustes del sistema
operativo del dispositivo (por ejemplo, en Android: _Ajustes → Aplicaciones → SyncDistro →
Permisos_). Si se retira el permiso de ubicación, las funciones de ejecución y seguimiento de
rutas dejarán de estar disponibles; si se retira el permiso de micrófono, no será posible grabar
notas de voz. El resto de las funciones seguirá operando.

## Finalidades del tratamiento

Usamos la información recopilada para:

- Prestar el servicio: autenticar usuarios, mostrar rutas, registrar visitas y generar pedidos.
- Transcribir y analizar las notas de voz para proponer al vendedor el resultado de la visita y las
  líneas del pedido, información que el vendedor revisa y confirma antes de guardarla.
- Enviar los pedidos al sistema ERP que la organización haya configurado.
- Permitir a la organización supervisar la actividad comercial de su equipo en campo.
- Mantener la seguridad del servicio, prevenir accesos no autorizados y conservar registros de
  auditoría.
- Cumplir obligaciones legales aplicables.

No utilizamos la información para publicidad, ni la vendemos, ni la cedemos a intermediarios de
datos.

## Con quién se comparte la información

- **Dentro de la organización del usuario.** Los usuarios autorizados de la misma organización
  pueden consultar la información según su rol.
- **Con el sistema ERP configurado por la organización.** Los pedidos generados se envían al ERP
  externo (por ejemplo SyncFreight, Odoo o SAP) que la propia organización haya configurado, con
  los datos necesarios para crearlos.
- **Con proveedores de servicios necesarios para operar.** Utilizamos proveedores de
  infraestructura y alojamiento, servicios de mapas y geocodificación para obtener coordenadas a
  partir de direcciones, servicios de optimización de rutas y servicios de transcripción y análisis
  de audio. Estos proveedores tratan la información únicamente para prestar el servicio contratado
  y bajo obligaciones de confidencialidad.
- **Cuando la ley lo exige.** Podemos divulgar información si una autoridad competente lo requiere
  legítimamente o para proteger derechos, seguridad o integridad del servicio.

## Conservación de los datos

Conservamos la información mientras la organización mantenga activa su cuenta y durante el tiempo
necesario para las finalidades descritas, para cumplir obligaciones legales y contables, y para
resolver controversias.

Los audios y transcripciones se conservan asociados a su visita mientras la organización los
necesite como respaldo de la actividad comercial. La organización puede solicitar la eliminación
de registros concretos o de la totalidad de su información al terminar la relación contractual.

Los registros de auditoría y de trazabilidad de pedidos pueden conservarse por períodos más
largos, ya que constituyen evidencia de las operaciones realizadas.

## Seguridad de la información

Aplicamos medidas técnicas y organizativas para proteger la información almacenada, incluyendo
autenticación de usuarios, control de acceso basado en roles, aislamiento de los datos de cada
organización, cifrado de las contraseñas y cifrado de las comunicaciones.

Ningún sistema es completamente infalible, por lo que no podemos garantizar seguridad absoluta.
Recomendamos usar contraseñas robustas y no compartir las credenciales de acceso.

## Derechos de las personas

Las personas cuyos datos se tratan en SyncDistro pueden solicitar el acceso, la corrección, la
actualización o la eliminación de su información, así como oponerse a determinados tratamientos,
en los términos que permita la legislación aplicable.

- Si eres **usuario de la plataforma** (vendedor, administrador o gerente), dirige tu solicitud al
  administrador de tu organización, que es quien gestiona tu cuenta y tus permisos.
- Si eres **cliente o contacto de un negocio** cuyos datos fueron registrados por un vendedor,
  dirige tu solicitud a la empresa que realizó el registro. También puedes escribirnos y te
  ayudaremos a canalizarla.
- En cualquier caso, puedes contactarnos en la dirección indicada al final de este documento.

## Menores de edad

SyncDistro es una herramienta de uso profesional y no está dirigida a menores de edad. No
recopilamos de forma consciente información de personas menores de 18 años.

## Transferencias internacionales

La información puede almacenarse y procesarse en servidores ubicados en países distintos al de
residencia del usuario. En esos casos adoptamos medidas para que la información mantenga un nivel
de protección equivalente al descrito en esta política.

## Cambios en esta política

Podemos actualizar esta Política de Privacidad para reflejar cambios en el servicio o en la
normativa aplicable. Cuando el cambio sea relevante, lo comunicaremos a través de la plataforma o
por correo electrónico. La fecha de la última actualización aparece al inicio de este documento.

## Contacto

Para consultas sobre esta política, sobre el uso de la ubicación o sobre el tratamiento de datos
personales, escríbenos a **privacidad@syncdistro.com**.
