# IPLACEX - Captacion de postulantes en terreno

Aplicacion web para actividades presenciales de admision.

**Flujo:** QR -> formulario -> juego (ruleta 10x10) -> numero de concurso ->
WhatsApp -> el lead queda registrado automaticamente en el registro central.

## Archivos
- `index.html` - experiencia del postulante + panel privado de gestion
- `config.js` - configuracion (URL del registro central, WhatsApp, carreras)
- `qr.html` - generador del codigo QR de la actividad
- `assets/` - identidad visual

## Panel de gestion
Se accede agregando `#admin` a la direccion del sitio.
Las credenciales se validan en el servidor; no estan en este repositorio.
