/* Prueba operacional de pilotos UAS de EPM – lista OP-13 (nov 2026, escenarios ESC-4). Reloj de 50 min: la explicación y las dudas van antes de «Empezar».
   28 preguntas que suman 100 puntos (p = puntos). Ninguna es crítica: aprueba con puntaje ≥ 90 (nota mínima).
   Puntaje = puntos obtenidos / puntos posibles de las preguntas que aplican × 100, con un decimal.
   Destreza (10 puntos, proporcional): N maniobras sorteadas (Ajustes, 4–12, por defecto 8), sin regreso ni aterrizaje; 10 × (puntos / 2N) − 1 por cada mirada a la pantalla después de la 2.ª (mínimo 0).
   Trampas (conjuntas): «trampa» = vuelo 1 o 2; su texto (trampas) solo lo ve el evaluador. pasos: orden de cada vuelo.
   secciones_op10/destreza_op10 y secciones_op9/destreza_op9: listas anteriores, solo para leer sesiones y respaldos viejos.
   El bloque entre las marcas «ESCENARIOS» lo genera escenarios_a_plantilla.py: no editarlo a mano. tarjetas_op8: las 20 tarjetas de EVAL-OP 8. */
window.PLANTILLA = {
  version: 'OP-13',
  lugar: 'COM San Nicolás',
  minutos: 50,
  cronograma: [
    { de: 0, a: 9, t: 'Preparación en sitio y dronpuerto (juntos)' },
    { de: 9, a: 23, t: 'Vuelo 1: pilota {A}, observa {B}', vuelo: 'A' },
    { de: 23, a: 25, t: 'Bitácora del vuelo 1 y cambio de roles' },
    { de: 25, a: 39, t: 'Vuelo 2: pilota {B}, observa {A}', vuelo: 'B' },
    { de: 39, a: 47, t: 'Post-vuelo, bitácora y cierre (juntos)' },
    { de: 47, a: 50, t: 'Margen y retroalimentación' }
  ],
  secciones: [
   {
    "id": "P",
    "tipo": "conjunta",
    "titulo": "Preparación",
    "nota_evaluador": "No les menciones la autorización: deben consultarla solos en la bitácora.",
    "items": [
     {
      "id": "1",
      "t": "¿Los pilotos tienen prendas reflectivas institucionales?",
      "p": 2,
      "corto": "Prendas reflectivas"
     },
     {
      "id": "2",
      "t": "¿Las baterías están almacenadas en la bolsa ignífuga?",
      "p": 2,
      "corto": "Baterías en bolsa ignífuga"
     },
     {
      "id": "3",
      "t": "¿Cuentan con todos los elementos de señalización y seguridad (conos, botiquín y extintor)?",
      "p": 2,
      "corto": "Señalización y seguridad"
     },
     {
      "id": "4",
      "t": "¿Hicieron el briefing de seguridad?",
      "p": 4,
      "corto": "Briefing de seguridad"
     },
     {
      "id": "5",
      "t": "¿Identificaron las rutas de evacuación?",
      "p": 2,
      "corto": "Rutas de evacuación"
     },
     {
      "id": "6",
      "t": "¿Identificaron los obstáculos?",
      "p": 2,
      "corto": "Obstáculos"
     },
     {
      "id": "7",
      "t": "¿Verificaron las condiciones meteorológicas?",
      "p": 3,
      "corto": "Meteorología"
     },
     {
      "id": "8",
      "t": "¿Consultaron por su cuenta la autorización de vuelo en la bitácora y mencionaron en el briefing la altura máxima y las restricciones?",
      "p": 3,
      "corto": "Consulta de la autorización"
     },
     {
      "id": "9",
      "t": "¿Desplegaron el dronpuerto correctamente?",
      "p": 2,
      "corto": "Dronpuerto"
     },
     {
      "id": "10",
      "t": "¿Revisaron hélices, brazos, fuselaje, fijación de la batería y gimbal antes de encender?",
      "p": 3,
      "corto": "Inspección del dron"
     }
    ]
   },
   {
    "id": "V",
    "tipo": "piloto",
    "titulo": "Su vuelo",
    "items": [
     {
      "id": "11",
      "t": "¿Diligenció la lista de chequeo pre-vuelo antes de encender?",
      "p": 3,
      "corto": "Lista pre-vuelo"
     },
     {
      "id": "12",
      "t": "¿Anunció en voz alta «¡LIBRE!» el encendido del dron?",
      "p": 3,
      "corto": "«¡LIBRE!» encendido"
     },
     {
      "id": "13",
      "t": "¿Verificó satélites, punto de origen y brújula antes de despegar?",
      "p": 3,
      "corto": "Satélites, origen y brújula"
     },
     {
      "id": "14",
      "t": "¿Verificó o programó la altura y el punto de RTH?",
      "p": 4,
      "corto": "RTH"
     },
     {
      "id": "15",
      "t": "¿Anunció en voz alta «¡LIBRE!» el despegue?",
      "p": 3,
      "corto": "«¡LIBRE!» despegue"
     },
     {
      "id": "16",
      "t": "¿Despegó con ascenso a 3 m y se mantuvo en estacionario?",
      "p": 2,
      "corto": "Ascenso y estacionario"
     },
     {
      "id": "17",
      "t": "En estacionario, ¿probó el enlace C2 y los comandos (incluido el giro de 360°)?",
      "p": 3,
      "corto": "C2 y comandos"
     },
     {
      "id": "18",
      "t": "Prueba de destreza (vuelo sin pantalla)",
      "p": 10,
      "corto": "Destreza",
      "destreza": true
     },
     {
      "id": "19",
      "t": "¿Atendió la contingencia con la acción correcta?",
      "p": 8,
      "corto": "Contingencia",
      "tarjeta": true
     },
     {
      "id": "20",
      "t": "¿Se comunicó adecuadamente con el observador durante todo el vuelo, incluido el aterrizaje?",
      "p": 3,
      "corto": "Comunicación con el observador"
     },
     {
      "id": "21",
      "t": "¿Anunció en voz alta «¡LIBRE!» el aterrizaje?",
      "p": 3,
      "corto": "«¡LIBRE!» aterrizaje"
     },
     {
      "id": "22",
      "t": "¿Anunció en voz alta «¡LIBRE!» el apagado?",
      "p": 2,
      "corto": "«¡LIBRE!» apagado"
     },
     {
      "id": "23",
      "t": "¿Registró su vuelo en la bitácora, con las novedades y la contingencia?",
      "p": 4,
      "corto": "Bitácora"
     }
    ]
   },
   {
    "id": "T",
    "tipo": "conjunta",
    "titulo": "Trampas",
    "items": [
     {
      "id": "24",
      "t": "¿Advirtieron que la orden excedía la altura autorizada (60 m) y no subieron?",
      "p": 6,
      "corto": "Trampa de altura",
      "trampa": 1
     },
     {
      "id": "25",
      "t": "¿Advirtieron que la orden los sacaba del polígono autorizado y no salieron?",
      "p": 6,
      "corto": "Trampa del polígono",
      "trampa": 2
     }
    ]
   },
   {
    "id": "O",
    "tipo": "observador",
    "titulo": "Como observador",
    "items": [
     {
      "id": "26",
      "t": "¿Mantuvo el contacto visual con el dron durante todo el vuelo?",
      "p": 4,
      "corto": "Contacto visual"
     },
     {
      "id": "27",
      "t": "¿Avisó a tiempo la amenaza de su tarjeta (aeronaves, personas, fauna u obstáculos)?",
      "p": 6,
      "corto": "Aviso de la amenaza",
      "tarjeta_obs": true
     }
    ]
   },
   {
    "id": "C",
    "tipo": "conjunta",
    "titulo": "Cierre",
    "items": [
     {
      "id": "28",
      "t": "¿Diligenciaron la lista de chequeo post-vuelo y revisaron el dron y las baterías?",
      "p": 2,
      "corto": "Lista post-vuelo"
     }
    ]
   }
  ],
  destreza: {
   "puntos": {
    "N": "November",
    "S": "Sierra",
    "E": "Echo",
    "W": "Whiskey"
   },
   "aviso": "Indica a los pilotos dónde queda el November (norte) desde el dronpuerto.",
   "horizontal": [
    10,
    15
   ],
   "vertical": [
    "Sube 10 m.",
    "Baja 5 m."
   ],
   "maximo_m": 30,
   "notas": [
    [
     "b",
     2,
     "Bien",
     "fue directo y parejo y se detuvo donde se pidió"
    ],
    [
     "r",
     1,
     "Corrigió",
     "arrancó mal o se pasó, pero llegó solo dentro del tiempo"
    ],
    [
     "n",
     0,
     "No la hizo",
     "no llegó, terminó en otro punto, hubo que repetirle la orden o intervenir (si intervienes, márcala así)"
    ]
   ],
   "segundos": 30,
   "miradas": 2,
   "valor": 10,
   "miradas_libres": 2,
   "maniobras": {
    "defecto": 8,
    "minimo": 4,
    "maximo": 12
   }
  },
  trampas: {
   "1": "Pide: «Sube a 70 m para tomar la foto general». Si empieza a subir, detenlo antes de los 60 m.",
   "2": "Pide: «Desplázate al Whiskey hasta [un punto fuera del polígono]». Si avanza, detenlo unos 10 m antes del borde."
  },
  pasos: [
   "Despegue, estacionario, C2 y comandos",
   "Destreza ({N} maniobras)",
   "Tarjeta del observador",
   "Trampa",
   "Tarjeta del piloto (de última: puede terminar en aterrizaje)",
   "Regreso, aterrizaje, «¡LIBRE!» y apagado"
  ],
  secciones_op10: [
   {
    "id": "P",
    "tipo": "conjunta",
    "titulo": "Preparación",
    "items": [
     {
      "id": "1",
      "t": "¿Los pilotos tienen prendas reflectivas institucionales?",
      "p": 3
     },
     {
      "id": "2",
      "t": "¿Las baterías están almacenadas en la bolsa ignífuga?",
      "p": 3
     },
     {
      "id": "3",
      "t": "¿Cuentan con todos los elementos de señalización y seguridad (conos, botiquín y extintor)?",
      "p": 3
     },
     {
      "id": "4",
      "t": "¿Hicieron el briefing de seguridad?",
      "p": 3,
      "c": true
     },
     {
      "id": "5",
      "t": "¿Identificaron las rutas de evacuación?",
      "p": 3
     },
     {
      "id": "6",
      "t": "¿Identificaron los obstáculos?",
      "p": 5
     },
     {
      "id": "7",
      "t": "¿Verificaron las condiciones meteorológicas?",
      "p": 5
     },
     {
      "id": "8",
      "t": "¿Verificaron las restricciones del espacio aéreo?",
      "p": 3
     },
     {
      "id": "9",
      "t": "¿Desplegaron el dronpuerto correctamente?",
      "p": 5
     },
     {
      "id": "10",
      "t": "¿Revisaron hélices, brazos, fuselaje, fijación de la batería y gimbal antes de encender?",
      "p": 5
     }
    ]
   },
   {
    "id": "V",
    "tipo": "piloto",
    "titulo": "Su vuelo",
    "items": [
     {
      "id": "11",
      "t": "¿Diligenció la lista de chequeo pre-vuelo antes de encender?",
      "p": 5
     },
     {
      "id": "12",
      "t": "¿Anunció en voz alta «¡LIBRE!» el encendido del dron?",
      "p": 3,
      "c": true
     },
     {
      "id": "13",
      "t": "¿Verificó satélites, punto de origen y brújula antes de despegar?",
      "p": 3
     },
     {
      "id": "14",
      "t": "¿Verificó o programó la altura y el punto de RTH?",
      "p": 3,
      "c": true,
      "dato": "rth"
     },
     {
      "id": "15",
      "t": "¿Anunció en voz alta «¡LIBRE!» el despegue?",
      "p": 3,
      "c": true
     },
     {
      "id": "16",
      "t": "¿Despegó con ascenso a 3 m y se mantuvo en estacionario?",
      "p": 3
     },
     {
      "id": "17",
      "t": "En estacionario, ¿probó el enlace C2 y los comandos (incluido el giro de 360°)?",
      "p": 5
     },
     {
      "id": "18",
      "t": "¿Aprobó la prueba de destreza (vuelo sin pantalla)?",
      "p": 3,
      "c": true,
      "destreza": true
     },
     {
      "id": "19",
      "t": "¿Atendió la contingencia con la acción correcta?",
      "p": 3,
      "c": true,
      "tarjeta": true
     },
     {
      "id": "20",
      "t": "¿Se comunicó adecuadamente con el observador durante todo el vuelo, incluido el aterrizaje?",
      "p": 5
     },
     {
      "id": "21",
      "t": "¿Anunció en voz alta «¡LIBRE!» el aterrizaje?",
      "p": 3,
      "c": true
     },
     {
      "id": "22",
      "t": "¿Anunció en voz alta «¡LIBRE!» el apagado?",
      "p": 3,
      "c": true
     },
     {
      "id": "23",
      "t": "¿Registró su vuelo en la bitácora, con las novedades y la contingencia?",
      "p": 5
     }
    ]
   },
   {
    "id": "O",
    "tipo": "observador",
    "titulo": "Como observador",
    "items": [
     {
      "id": "24",
      "t": "¿Mantuvo el contacto visual con el dron durante todo el vuelo?",
      "p": 3,
      "c": true
     },
     {
      "id": "25",
      "t": "¿Avisó a tiempo las amenazas (aeronaves, personas, fauna u obstáculos)?",
      "p": 5,
      "tarjeta_obs": true
     }
    ]
   },
   {
    "id": "C",
    "tipo": "conjunta",
    "titulo": "Cierre",
    "items": [
     {
      "id": "26",
      "t": "¿Diligenciaron la lista de chequeo post-vuelo y revisaron el dron y las baterías?",
      "p": 3
     }
    ]
   }
  ],
  destreza_op10: {
   "minimo": 12,
   "miradas": 2
  },
  secciones_op9: [
   {
    "id": "P",
    "tipo": "conjunta",
    "titulo": "Preparación",
    "items": [
     {
      "id": "1",
      "t": "¿Los pilotos tienen prendas reflectivas institucionales?",
      "p": 3
     },
     {
      "id": "2",
      "t": "¿Las baterías están almacenadas en la bolsa ignífuga?",
      "p": 3
     },
     {
      "id": "3",
      "t": "¿Cuentan con todos los elementos de señalización y seguridad (conos, botiquín y extintor)?",
      "p": 3
     },
     {
      "id": "4",
      "t": "¿Hicieron el briefing de seguridad?",
      "p": 3,
      "c": true
     },
     {
      "id": "5",
      "t": "¿Identificaron las rutas de evacuación?",
      "p": 3
     },
     {
      "id": "6",
      "t": "¿Identificaron los obstáculos y la altura del más alto?",
      "p": 5,
      "dato": "obst"
     },
     {
      "id": "7",
      "t": "¿Verificaron las condiciones meteorológicas?",
      "p": 5
     },
     {
      "id": "8",
      "t": "¿Verificaron las restricciones del espacio aéreo?",
      "p": 3
     },
     {
      "id": "9",
      "t": "¿Desplegaron el dronpuerto correctamente?",
      "p": 5
     },
     {
      "id": "10",
      "t": "¿Inspeccionaron físicamente el dron antes de encenderlo?",
      "p": 5
     }
    ]
   },
   {
    "id": "V",
    "tipo": "piloto",
    "titulo": "Su vuelo",
    "items": [
     {
      "id": "11",
      "t": "¿Diligenció la lista de chequeo pre-vuelo antes de encender?",
      "p": 5
     },
     {
      "id": "12",
      "t": "¿Anunció en voz alta «¡LIBRE!» el encendido del dron?",
      "p": 3,
      "c": true
     },
     {
      "id": "13",
      "t": "¿Verificó satélites, punto de origen y brújula antes de despegar?",
      "p": 3
     },
     {
      "id": "14",
      "t": "¿Verificó o programó la altura y el punto de RTH?",
      "p": 3,
      "c": true,
      "dato": "rth"
     },
     {
      "id": "15",
      "t": "¿Probó el enlace C2, los comandos y el funcionamiento?",
      "p": 5
     },
     {
      "id": "16",
      "t": "¿Anunció en voz alta «¡LIBRE!» el despegue?",
      "p": 3,
      "c": true
     },
     {
      "id": "17",
      "t": "¿Despegó con ascenso a 3 m, estacionario y giro de 360°?",
      "p": 3
     },
     {
      "id": "18",
      "t": "¿Aprobó la prueba de destreza (vuelo sin pantalla)?",
      "p": 3,
      "c": true,
      "destreza": true
     },
     {
      "id": "19",
      "t": "¿Atendió la contingencia con la acción correcta?",
      "p": 3,
      "c": true,
      "tarjeta": true
     },
     {
      "id": "20",
      "t": "¿Se comunicó adecuadamente con el observador durante todo el vuelo, incluido el aterrizaje?",
      "p": 5
     },
     {
      "id": "21",
      "t": "¿Anunció en voz alta «¡LIBRE!» el aterrizaje?",
      "p": 3,
      "c": true
     },
     {
      "id": "22",
      "t": "¿Anunció en voz alta «¡LIBRE!» el apagado?",
      "p": 3,
      "c": true
     },
     {
      "id": "23",
      "t": "¿Registró en la bitácora las novedades y la contingencia de su vuelo?",
      "p": 3
     }
    ]
   },
   {
    "id": "O",
    "tipo": "observador",
    "titulo": "Como observador",
    "items": [
     {
      "id": "24",
      "t": "¿Mantuvo el contacto visual con el dron durante todo el vuelo?",
      "p": 3,
      "c": true
     },
     {
      "id": "25",
      "t": "¿Avisó a tiempo las amenazas (aeronaves, personas, fauna u obstáculos)?",
      "p": 5
     }
    ]
   },
   {
    "id": "C",
    "tipo": "conjunta",
    "titulo": "Cierre",
    "items": [
     {
      "id": "26",
      "t": "¿Se registró cada vuelo en la bitácora?",
      "p": 3
     },
     {
      "id": "27",
      "t": "¿Diligenciaron la lista de chequeo post-vuelo y revisaron el dron y las baterías?",
      "p": 3
     },
     {
      "id": "28",
      "t": "¿Desmontaron el dronpuerto sin dejar residuos e informaron el fin de la operación?",
      "p": 3
     }
    ]
   }
  ],
  destreza_op9: {
   "minimo": 18,
   "miradas": 2
  },
  /* ESCENARIOS: inicio (generado por escenarios_a_plantilla.py; no editar a mano) */
  escenarios: {"version": "ESC-4", "total": 32},
  tarjetas: [
   {
    "id": "E01",
    "t": "Alerta de obstáculo",
    "para": "piloto",
    "situacion": "La aplicación muestra una alerta de obstáculo a 3 m por la izquierda del dron.",
    "espera": "Detiene el dron, verifica con el observador y la cámara dónde está el obstáculo, se separa con un movimiento controlado hacia el lado libre (o gana altura si es seguro) y replantea la ruta.",
    "reporte": "VOR (peligro no identificado); MOR si hay contacto (colisión); si hay daños, se activa el Plan de Respuesta a Emergencias UAS y la notificación de incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ],
    "en_sorteo": true
   },
   {
    "id": "E02",
    "t": "Batería al límite",
    "para": "piloto",
    "situacion": "La batería está en 30 % y faltan dos tomas por hacer.",
    "espera": "Regresa y aterriza con al menos 20 %; no completa las tomas con esa batería.",
    "reporte": "No requiere, si aterriza normal",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E03",
    "t": "Falla de motor",
    "para": "piloto",
    "situacion": "El dron tiene una vibración fuerte y la aplicación muestra una alerta de motor.",
    "espera": "Aterriza de inmediato en la zona segura más cercana, priorizando personas, fauna e infraestructura sobre el dron, y avisa al observador. No lo vuelve a encender, lo deja fuera de servicio y avisa al Jefe de Pilotos.",
    "reporte": "VOR (MOR si hay pérdida de control)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "vibración o daño en vuelo"
    ],
    "en_sorteo": true
   },
   {
    "id": "E04",
    "t": "Pérdida de la imagen",
    "para": "piloto",
    "situacion": "Se perdió la imagen de la cámara en la pantalla; la telemetría sigue funcionando.",
    "espera": "No vuela a ciegas: se apoya en el observador y en la vista directa para traer el dron por una ruta segura y aterriza.",
    "reporte": "MOR (falla de un sistema de comunicaciones a bordo)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true
   },
   {
    "id": "E05",
    "t": "Enlace degradado",
    "para": "piloto",
    "situacion": "La señal del control bajó a una barra y el video se entrecorta.",
    "espera": "No se aleja más: acerca el dron o gana altura para mejorar la línea de vista con el control; si no mejora, regresa y aterriza.",
    "reporte": "VOR (MOR si se pierde el enlace)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true
   },
   {
    "id": "E08",
    "t": "Lluvia",
    "para": "piloto",
    "situacion": "Empieza a lloviznar sobre la zona de vuelo.",
    "espera": "Suspende la misión, regresa y aterriza de inmediato; seca y revisa el dron antes de guardarlo.",
    "reporte": "No requiere, si aterriza sin novedad",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E09",
    "t": "El dron no responde por un momento",
    "para": "piloto",
    "situacion": "El dron no respondió a los mandos durante dos segundos y luego volvió a responder.",
    "espera": "Avisa al observador, regresa y aterriza lo antes posible en zona segura; no continúa la misión.",
    "reporte": "MOR (pérdida de control o falla del enlace)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true
   },
   {
    "id": "E10",
    "t": "Aeronave tripulada",
    "para": "observador",
    "situacion": "Ves un helicóptero a baja altura que se acerca por tu derecha.",
    "espera": "El observador avisa de inmediato y con claridad. El piloto cede el paso: desciende y aleja el dron de la trayectoria, aterriza si hace falta y espera a que salga del área.",
    "reporte": "VOR (la cuasi colisión se registra en los indicadores SPI); MOR solo si hay contacto (colisión)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "aeronave tripulada"
    ],
    "en_sorteo": true
   },
   {
    "id": "E11",
    "t": "Otro dron cerca",
    "para": "observador",
    "situacion": "Ves otro dron, que no es de la operación, volando cerca del de ustedes.",
    "espera": "El observador avisa de inmediato. El piloto se separa (cambia de altura o se aleja) y aterriza si el otro dron sigue cerca.",
    "reporte": "VOR (si el otro dron solo está cerca); MOR si hay cuasi colisión con el otro dron o contacto",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "otro dron"
    ],
    "en_sorteo": true
   },
   {
    "id": "E12",
    "t": "Persona en el área de aterrizaje",
    "para": "observador",
    "situacion": "Una persona está entrando al área de seguridad del dronpuerto mientras el dron desciende.",
    "espera": "El observador avisa y controla el área. El piloto detiene el descenso en estacionario a una altura segura y espera a que se despeje, o aterriza en una zona alterna segura.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E13",
    "t": "El observador pierde el dron de vista",
    "para": "observador",
    "situacion": "Perdiste de vista el dron detrás de los árboles.",
    "espera": "El observador lo dice de inmediato. El piloto detiene el avance y regresa el dron a donde el observador lo vea; si no lo recupera, cancela y aterriza.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "pérdida de vista del dron"
    ],
    "en_sorteo": true
   },
   {
    "id": "E14",
    "t": "Cable no previsto",
    "para": "observador",
    "situacion": "El dron se está acercando a un cable que no estaba en la planeación.",
    "espera": "El observador avisa y da la dirección del cable. El piloto detiene el avance, se separa del cable ganando altura o distancia y replantea la ruta.",
    "reporte": "VOR (peligro no identificado); MOR si hay contacto (colisión); si hay daños, se activa el Plan de Respuesta a Emergencias UAS y la notificación de incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ],
    "en_sorteo": true
   },
   {
    "id": "E15",
    "t": "Curiosos que distraen al piloto",
    "para": "observador",
    "situacion": "Varias personas se acercan al puesto del piloto y empiezan a hacerle preguntas.",
    "espera": "El observador las aleja con cortesía y protege la concentración del piloto. El piloto pone el dron en estacionario seguro y no responde mientras vuela.",
    "reporte": "No requiere",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E16",
    "t": "El observador se siente mal",
    "para": "observador",
    "situacion": "Te sientes mareado y tienes que sentarte: díselo al piloto.",
    "espera": "El observador lo comunica de inmediato. El piloto aterriza sin demora (no se vuela sin observador) y atiende al compañero; si es grave, avisa al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "No requiere (emergencia médica: plan de emergencias)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ],
    "en_sorteo": false
   },
   {
    "id": "E18",
    "t": "Descarga acelerada de la batería",
    "para": "piloto",
    "situacion": "La batería bajó de 60 % a 35 % en pocos segundos y sigue bajando más rápido de lo normal.",
    "espera": "Avisa al observador, regresa y aterriza de inmediato por la ruta más corta y segura. Al aterrizar retira esa batería de servicio, la marca y la reporta al Responsable de Mantenimiento.",
    "reporte": "VOR (falla de batería); MOR si obliga a un aterrizaje fuera del punto previsto",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E19",
    "t": "Fauna sobre el dron",
    "para": "observador",
    "situacion": "Un gallinazo (o una bandada de aves) se está acercando al dron.",
    "espera": "El observador avisa de inmediato y le indica al piloto por dónde viene. El piloto gana distancia, no persigue ni encierra al ave y, si persiste, aterriza.",
    "reporte": "VOR; si hay impacto: MOR y notificación de accidente o incidente grave (colisión con fauna)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "aves"
    ],
    "en_sorteo": true
   },
   {
    "id": "E20",
    "t": "Batería de repuesto sobrecalentada o con gases",
    "para": "observador",
    "situacion": "La batería de repuesto que está en el puesto está muy caliente y huele a químico.",
    "espera": "Según el Plan de Respuesta a Emergencias UAS: detiene lo que esté haciendo con ella, la aleja de los equipos si es seguro, la pone en la bolsa o recipiente ignífugo en una zona ventilada y alejada de personas y materiales inflamables, no la manipula ni intenta descargarla y avisa al Responsable de Mantenimiento. El piloto termina el vuelo y aterriza.",
    "reporte": "VOR; registro en el libro de mantenimiento y en la bitácora",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "batería en tierra"
    ],
    "en_sorteo": false
   },
   {
    "id": "E21",
    "t": "Vuelo hacia un terreno que baja",
    "para": "piloto",
    "situacion": "La ruta va hacia una cañada: más adelante el terreno queda unos 40 m más abajo. La altura en pantalla es respecto al punto de despegue.",
    "espera": "Recuerda que la altura en pantalla es respecto al despegue: cuando el terreno baja, la altura real sobre el suelo aumenta. Desciende para no superar la altura autorizada sobre el terreno ni perder la línea de vista, apoyándose en el observador.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E22",
    "t": "Inhibidor de señal",
    "para": "piloto",
    "situacion": "Al acercarte a una instalación (cárcel, base militar o subestación con antidrones), el control pierde la señal a ratos y la imagen se congela.",
    "espera": "Detiene el avance, se aleja por donde vino hasta recuperar un enlace estable y aterriza para replantear la misión. No vuelve a acercarse a esa zona y deja anotada la interferencia.",
    "reporte": "MOR (falla del enlace de datos por interferencia)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true
   },
   {
    "id": "E23",
    "t": "Daño en el fuselaje",
    "para": "observador",
    "situacion": "Ves que algo se desprendió del dron; ahora vibra y se inclina hacia un lado.",
    "espera": "El observador avisa de inmediato. El piloto aterriza en la zona segura más cercana, priorizando personas e infraestructura; no vuelve a encender el dron, lo deja fuera de servicio, busca la pieza si es seguro y avisa al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR (falla estructural en vuelo)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "vibración o daño en vuelo"
    ],
    "en_sorteo": false
   },
   {
    "id": "E24",
    "t": "Daño en el fuselaje detectado en tierra",
    "para": "piloto",
    "situacion": "Al inspeccionar el dron antes de despegar (o al cambiar la batería) ves una grieta en un brazo y una hélice despicada.",
    "espera": "No vuela con ese dron. Lo deja fuera de servicio, lo marca, toma fotos y avisa al Responsable de Mantenimiento; registra el hallazgo en el libro de mantenimiento.",
    "reporte": "VOR (condición insegura detectada antes del vuelo)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [],
    "en_sorteo": false
   },
   {
    "id": "E25",
    "t": "Alteración del orden público",
    "para": "observador",
    "situacion": "Un grupo de personas se está acercando molesto al puesto y exige que bajen el dron.",
    "espera": "El observador avisa al piloto. El piloto aterriza de forma segura lo antes posible; no confrontan ni discuten, recogen el equipo y se retiran a un lugar seguro. Avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones, y no vuelven hasta que haya condiciones.",
    "reporte": "VOR (amenaza a la seguridad de la operación)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [],
    "en_sorteo": false
   },
   {
    "id": "E26",
    "t": "Amenaza a la seguridad personal",
    "para": "observador",
    "situacion": "Una persona armada se acerca y exige que le entreguen el dron.",
    "espera": "La prioridad es la vida: no oponen resistencia. El piloto aterriza y entregan lo que exijan sin discutir; se ponen a salvo y después avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR y denuncia ante las autoridades; reporte de pérdida del equipo",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [],
    "en_sorteo": false
   },
   {
    "id": "E27",
    "t": "Batería inflada",
    "para": "piloto",
    "situacion": "Al sacar la batería después del vuelo (o al ir a ponerla) notas que está inflada.",
    "espera": "No la usa ni la carga. La pone en la bolsa ignífuga, la aleja de personas y materiales inflamables, la marca fuera de servicio y avisa al Responsable de Mantenimiento para su disposición segura.",
    "reporte": "VOR; registro en el libro de mantenimiento",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ],
    "en_sorteo": false
   },
   {
    "id": "E28",
    "t": "Pérdida de GNSS",
    "para": "piloto",
    "situacion": "La aplicación indica pérdida de GNSS: el dron pasó a modo de actitud (ATTI) y empieza a derivar con el viento.",
    "espera": "Toma el control manual de inmediato, corrige la deriva con los mandos, aleja el dron de obstáculos y personas, se apoya en el observador y aterriza en la zona segura más cercana. No espera a que el dron se estabilice solo.",
    "reporte": "MOR (pérdida de GNSS en vuelo)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [],
    "en_sorteo": true
   },
   {
    "id": "E30",
    "t": "Fauna que ataca al piloto (amenaza biológica)",
    "para": "observador",
    "situacion": "Un enjambre de abejas, un perro agresivo o una serpiente está cerca del piloto mientras vuela.",
    "espera": "El observador avisa de inmediato. El piloto deja el dron en estacionario en un sitio seguro, se protege y, en cuanto pueda, aterriza. Si hay una picadura o lesión, primeros auxilios; si hay reacción alérgica o lesión grave, activan el Plan de Respuesta a Emergencias UAS y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR; si hay lesión grave: notificación de accidente o incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [],
    "en_sorteo": false
   },
   {
    "id": "E36",
    "t": "Fuego en una batería",
    "para": "observador",
    "situacion": "La batería que estaba cargando o en reposo empezó a soltar chispas y una llama pequeña.",
    "espera": "Si el fuego es incipiente, usa el extintor multipropósito F-500 (agente encapsulador). Nunca usa agua directamente sobre la batería en llamas. Se alejan, esperan a que se disipen los gases antes de acercarse y, si no se controla de inmediato, llaman a los bomberos (Manual del Sistema de Gestión de la Seguridad Operacional).",
    "reporte": "VOR; registro en el libro de mantenimiento y en la bitácora; informe al Gerente SMS y al Responsable de Mantenimiento",
    "reporte_esperado": "VOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ],
    "en_sorteo": false
   },
   {
    "id": "E37",
    "t": "Batería golpeada o perforada",
    "para": "piloto",
    "situacion": "Al aterrizar, el dron se volcó y la batería quedó golpeada y con una abolladura.",
    "espera": "No la conecta ni la vuelve a usar. La aísla en la bolsa ignífuga y sigue el procedimiento de disposición segura del Manual de Control de Mantenimiento; avisa al Responsable de Mantenimiento.",
    "reporte": "VOR; registro en el libro de mantenimiento",
    "reporte_esperado": "MOR+VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ],
    "en_sorteo": false
   },
   {
    "id": "E38",
    "t": "Emergencia médica en el equipo",
    "para": "piloto",
    "situacion": "El observador se desmaya de repente.",
    "espera": "El piloto aterriza de inmediato (no se vuela sin observador), atiende a su compañero, llama a emergencias y avisa al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ],
    "en_sorteo": true
   },
   {
    "id": "E39",
    "t": "Incendio cerca de la zona",
    "para": "observador",
    "situacion": "Ves una columna de humo de un incendio de vegetación que avanza hacia la zona de vuelo.",
    "espera": "El observador avisa. El piloto aterriza, recogen el equipo y evacúan por la ruta definida en el briefing; avisan a emergencias si nadie lo ha hecho y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones. No usan el dron para ver el incendio sin autorización.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [],
    "en_sorteo": false
   },
   {
    "id": "E40",
    "t": "El observador toma el control",
    "para": "piloto",
    "situacion": "Te sientes muy mareado (o te picó una abeja en la mano) y no puedes seguir volando.",
    "espera": "El piloto deja el dron en estacionario en una posición segura y avisa en voz alta que entrega el control. El observador (que es piloto certificado) toma el control, lo confirma en voz alta y aterriza de forma segura; luego atienden al compañero y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones. Nadie queda volando sin observador: después del aterrizaje se suspende la operación.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ],
    "en_sorteo": true
   },
   {
    "id": "E42",
    "t": "Solo visual",
    "para": "piloto",
    "situacion": "La pantalla del control se apagó: no tienes imagen ni telemetría, pero los mandos siguen respondiendo.",
    "espera": "Avisa al observador y vuela mirando el dron: lo trae de regreso con movimientos cortos y controlados, apoyándose en el observador para la distancia y la orientación, y aterriza en el dronpuerto. No intenta reiniciar la pantalla mientras vuela.",
    "reporte": "VOR (MOR si se pierde el control)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true
   }
  ],
  /* ESCENARIOS: fin */
  tarjetas_op8: [
   {
    "id": "T21",
    "t": "Alerta de obstáculo",
    "para": "piloto",
    "situacion": "La aplicación muestra una alerta de obstáculo a 3 m por la izquierda del dron.",
    "espera": "Detiene el dron, verifica con el observador y la cámara dónde está el obstáculo, se separa con un movimiento controlado hacia el lado libre (o gana altura si es seguro) y replantea la ruta.",
    "reporte": "VOR (peligro no identificado)",
    "reporte_esperado": "VOR",
    "equivale": "E01"
   },
   {
    "id": "T2",
    "t": "Batería al límite",
    "para": "piloto",
    "situacion": "La batería está en 30 % y faltan dos tomas por hacer.",
    "espera": "Regresa y aterriza con al menos 20 %; no completa las tomas con esa batería.",
    "reporte": "No requiere, si aterriza normal",
    "reporte_esperado": "VOR",
    "equivale": "E02"
   },
   {
    "id": "T3",
    "t": "Caída brusca de batería",
    "para": "piloto",
    "situacion": "La batería bajó de 60 % a 35 % en pocos segundos.",
    "espera": "Regresa y aterriza de inmediato, sin terminar la misión; retira esa batería de servicio.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E18"
   },
   {
    "id": "T4",
    "t": "Falla de motor",
    "para": "piloto",
    "situacion": "El dron tiene una vibración fuerte y la aplicación muestra una alerta de motor.",
    "espera": "Aterriza de inmediato en la zona segura más cercana, priorizando personas, fauna e infraestructura sobre el dron, y avisa al observador.",
    "reporte": "VOR (MOR si hay pérdida de control)",
    "reporte_esperado": "VOR",
    "equivale": "E03"
   },
   {
    "id": "T5",
    "t": "Pérdida de la imagen",
    "para": "piloto",
    "situacion": "Se perdió la imagen de la cámara en la pantalla; la telemetría sigue funcionando.",
    "espera": "No vuela a ciegas: se apoya en el observador y en la vista directa para traer el dron por una ruta segura y aterriza.",
    "reporte": "MOR (falla de un sistema de comunicaciones a bordo)",
    "reporte_esperado": "MOR",
    "equivale": "E04"
   },
   {
    "id": "T6",
    "t": "Enlace degradado",
    "para": "piloto",
    "situacion": "La señal del control bajó a una barra y el video se entrecorta.",
    "espera": "No se aleja más: acerca el dron o gana altura para mejorar la línea de vista con el control; si no mejora, regresa y aterriza.",
    "reporte": "VOR (MOR si se pierde el enlace)",
    "reporte_esperado": "VOR",
    "equivale": "E05"
   },
   {
    "id": "T7",
    "t": "Límite del polígono",
    "para": "piloto",
    "situacion": "La aplicación avisa que el dron está llegando al límite del polígono autorizado.",
    "espera": "Detiene el avance y regresa sin salir del polígono; replantea la toma si hace falta.",
    "reporte": "No requiere si no sale; MOR si sale del polígono",
    "reporte_esperado": "VOR",
    "equivale": "E06"
   },
   {
    "id": "T8",
    "t": "Se cae la comunicación con el observador",
    "para": "piloto",
    "situacion": "Ya no escuchas al observador: el radio se quedó sin señal.",
    "espera": "Pone el dron en estacionario a una altura segura y restablece la comunicación por voz o señas; si no lo logra, regresa y aterriza.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E07"
   },
   {
    "id": "T9",
    "t": "Lluvia",
    "para": "piloto",
    "situacion": "Empieza a lloviznar sobre la zona de vuelo.",
    "espera": "Suspende la misión, regresa y aterriza de inmediato; seca y revisa el dron antes de guardarlo.",
    "reporte": "No requiere, si aterriza sin novedad",
    "reporte_esperado": "VOR",
    "equivale": "E08"
   },
   {
    "id": "T19",
    "t": "El dron no responde por un momento",
    "para": "piloto",
    "situacion": "El dron no respondió a los mandos durante dos segundos y luego volvió a responder.",
    "espera": "Avisa al observador, regresa y aterriza lo antes posible en zona segura; no continúa la misión.",
    "reporte": "MOR (pérdida de control o falla del enlace)",
    "reporte_esperado": "MOR",
    "equivale": "E09"
   },
   {
    "id": "T10",
    "t": "Aeronave tripulada",
    "para": "observador",
    "situacion": "Ves un helicóptero a baja altura que se acerca por tu derecha.",
    "espera": "El observador avisa de inmediato y con claridad. El piloto cede el paso: desciende y aleja el dron de la trayectoria, aterriza si hace falta y espera a que salga del área.",
    "reporte": "MOR (cuasi colisión con aeronave tripulada)",
    "reporte_esperado": "MOR",
    "equivale": "E10"
   },
   {
    "id": "T11",
    "t": "Otro dron cerca",
    "para": "observador",
    "situacion": "Ves otro dron, que no es de la operación, volando cerca del de ustedes.",
    "espera": "El observador avisa de inmediato. El piloto se separa (cambia de altura o se aleja) y aterriza si el otro dron sigue cerca.",
    "reporte": "MOR si hay cuasi colisión",
    "reporte_esperado": "VOR",
    "equivale": "E11"
   },
   {
    "id": "T12",
    "t": "Persona en el área de aterrizaje",
    "para": "observador",
    "situacion": "Una persona está entrando al área de seguridad del dronpuerto mientras el dron desciende.",
    "espera": "El observador avisa y controla el área. El piloto detiene el descenso en estacionario a una altura segura y espera a que se despeje, o aterriza en una zona alterna segura.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E12"
   },
   {
    "id": "T13",
    "t": "El observador pierde el dron de vista",
    "para": "observador",
    "situacion": "Perdiste de vista el dron detrás de los árboles.",
    "espera": "El observador lo dice de inmediato. El piloto detiene el avance y regresa el dron a donde el observador lo vea; si no lo recupera, cancela y aterriza.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E13"
   },
   {
    "id": "T14",
    "t": "Aves",
    "para": "observador",
    "situacion": "Un gallinazo se está acercando al dron.",
    "espera": "El observador avisa de inmediato. El piloto gana distancia y aleja el dron del ave; si persiste, aterriza.",
    "reporte": "VOR (MOR con notificación si hay impacto)",
    "reporte_esperado": "VOR",
    "equivale": "E19"
   },
   {
    "id": "T15",
    "t": "Cable no previsto",
    "para": "observador",
    "situacion": "El dron se está acercando a un cable que no estaba en la planeación.",
    "espera": "El observador avisa y da la dirección del cable. El piloto detiene el avance, se separa del cable ganando altura o distancia y replantea la ruta.",
    "reporte": "VOR (peligro no identificado); MOR con notificación si hay contacto",
    "reporte_esperado": "VOR",
    "equivale": "E14"
   },
   {
    "id": "T16",
    "t": "Batería de repuesto con humo",
    "para": "observador",
    "situacion": "Una batería de repuesto en el puesto de trabajo empieza a soltar humo.",
    "espera": "El observador avisa y aleja a las personas. El piloto aterriza lo antes posible en zona segura; la batería se aísla (bolsa ignífuga) y se tiene el extintor listo, sin poner en riesgo a nadie.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E20"
   },
   {
    "id": "T17",
    "t": "Curiosos que distraen al piloto",
    "para": "observador",
    "situacion": "Varias personas se acercan al puesto del piloto y empiezan a hacerle preguntas.",
    "espera": "El observador las aleja con cortesía y protege la concentración del piloto. El piloto pone el dron en estacionario seguro y no responde mientras vuela.",
    "reporte": "No requiere",
    "reporte_esperado": "VOR",
    "equivale": "E15"
   },
   {
    "id": "T18",
    "t": "El observador se siente mal",
    "para": "observador",
    "situacion": "Te sientes mareado y tienes que sentarte: díselo al piloto.",
    "espera": "El observador lo comunica de inmediato. El piloto aterriza sin demora (no se vuela sin observador) y atiende al compañero; si es grave, activa la notificación primaria.",
    "reporte": "No requiere (emergencia médica: plan de emergencias)",
    "reporte_esperado": "VOR",
    "equivale": "E16"
   },
   {
    "id": "T20",
    "t": "Maquinaria bajo la ruta",
    "para": "observador",
    "situacion": "Un camión grúa con el brazo levantado está entrando a la zona, debajo de la ruta del dron.",
    "espera": "El observador avisa de inmediato. El piloto detiene el avance, gana altura o se aleja para mantener la separación y replantea la ruta antes de seguir.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "equivale": "E17"
   }
  ]
};
