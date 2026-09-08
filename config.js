/* =====================================================================
   IPLACEX · Captación en terreno — CONFIGURACIÓN
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para poner la plataforma
   en marcha. Después de desplegar el backend (ver docs/INSTRUCCIONES.md),
   pega aquí la URL de la aplicación web de Google Apps Script.
   ===================================================================== */
window.IPLACEX_CONFIG = {

  // 1) URL de la app web de Apps Script (termina en /exec).
  //    Mientras esté vacía, la plataforma funciona en MODO LOCAL de prueba
  //    (guarda en el propio teléfono) y el panel lo advierte claramente.
  BACKEND_URL: "https://script.google.com/macros/s/AKfycbzHel8-pMOhxkdCiNMHhgDKe59QEI_EJxmKAABpHOZa7K1nn8LdKexyZcXtIW-zqj-4/exec",

  // 2) WhatsApp de destino de la ejecutiva (formato internacional, sin +).
  WHATSAPP: "56949683594",

  // 3) Rango de números del sorteo (pool). El backend entrega un número
  //    ÚNICO tomado de este rango; ningún participante recibe el mismo.
  NUMERO_MIN: 1,
  NUMERO_MAX: 9999,

  // 4) Texto de la actividad (aparece en el encabezado del formulario).
  ACTIVIDAD: "Admisión IPLACEX",

  // 4b) Nombre del/la ejecutivo/a que recibe y gestiona los datos.
  //     Se muestra al postulante en la autorización de datos (Ley 19.628 / 21.719).
  EJECUTIVA: "Sandra Pérez",

  // 5) Carreras sugeridas (autocompletado del campo "carrera de interés").
  CARRERAS: [
    "Técnico en Enfermería",
    "Técnico en Administración",
    "Técnico en Educación de Párvulos",
    "Ingeniería en Administración",
    "Ingeniería en Informática",
    "Ingeniería en Prevención de Riesgos",
    "Contador Auditor",
    "Trabajo Social",
    "Psicopedagogía",
    "Derecho",
    "Contabilidad General",
    "Técnico en Trabajo Social",
    "Técnico Jurídico",
    "Técnico en Contabilidad"
  ]
};
