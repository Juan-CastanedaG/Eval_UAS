/* Prueba operacional de pilotos UAS de EPM – lista OP-16 (nov 2026, escenarios ESC-4 con modelo por roles).
   OP-16: cada escenario dice a quién se le muestra (mostrar_a), quién responde y se evalúa (responde), cuándo (momento: antes_del_vuelo,
   en_vuelo, cambio_de_bateria), si el ejercicio sigue (continua) y si entra al sorteo. Cada persona responde uno como piloto (pregunta 19,
   8 puntos) y otro como observador (pregunta 27, 6 puntos). t_op15/corto_op15: textos de esas dos preguntas para las sesiones OP-15.
   Reloj de 50 min por defecto (Administración: 30–120, minutos_rango; Reloj de 50 min por defecto (Administración: 30–120, minutos_rango;
   el cronograma se escala en proporción): la explicación y las dudas van antes de «Empezar».
   OP-15: la pregunta 1 (prenda reflectiva) es «por_piloto»: aunque Preparación sea conjunta, cada piloto se califica por su cuenta (mismos 2 puntos
   para cada uno). t_op13 es su texto anterior: las sesiones OP-11 a OP-13 la siguen viendo y marcando como antes (conjunta). La lista es la misma de OP-13.
   28 preguntas que suman 100 puntos (p = puntos). Ninguna es crítica: aprueba con puntaje ≥ 90 (nota mínima).
   Puntaje = puntos obtenidos / puntos posibles de las preguntas que aplican × 100, con un decimal.
   Destreza (10 puntos, proporcional): N comandos sorteados (Administración, 4–12, por defecto 8). OP-16: cada comando = girar + mover, sin distancias
   (horizontal, vertical y maximo_m solo quedan para leer sesiones viejas); puntos del comando = max(0, 2 − correcciones − penalizaciones),
   destreza = 10 × suma / 2N; segundos = límite del comando completo (Administración, 5–30, por defecto 10). OP-11 a OP-15: −1 por cada mirada después de la 2.ª.
   Trampas (conjuntas): «trampa» = vuelo 1 o 2; su texto (trampas) solo lo ve el evaluador. pasos: orden de cada vuelo.
   secciones_op10/destreza_op10 y secciones_op9/destreza_op9: listas anteriores, solo para leer sesiones y respaldos viejos.
   El bloque entre las marcas «ESCENARIOS» lo genera escenarios_a_plantilla.py: no editarlo a mano. tarjetas_op8: las 20 tarjetas de EVAL-OP 8. */
window.PLANTILLA = {
  version: 'OP-16',
  lugar: 'COM San Nicolás',
  minutos: 50,
  minutos_rango: { minimo: 30, maximo: 120 },
  cronograma: [
    { de: 0, a: 9, t: 'Preparación en sitio y dronpuerto (juntos)' },
    { de: 9, a: 23, t: 'Vuelo 1: pilota {A}, observa {B} (destreza y misión en el orden sorteado)', vuelo: 'A' },
    { de: 23, a: 25, t: 'Bitácora del vuelo 1, cambio de batería y de roles' },
    { de: 25, a: 39, t: 'Vuelo 2: pilota {B}, observa {A} (destreza y misión en el orden sorteado)', vuelo: 'B' },
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
      "t": "¿El piloto tiene prenda reflectiva institucional?",
      "p": 2,
      "corto": "Prenda reflectiva",
      "por_piloto": true,
      "t_op13": "¿Los pilotos tienen prendas reflectivas institucionales?",
      "corto_op13": "Prendas reflectivas"
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
      "t": "¿Atendió su escenario de emergencia como piloto con la acción correcta?",
      "p": 8,
      "corto": "Escenario como piloto",
      "t_op15": "¿Atendió la contingencia con la acción correcta?",
      "corto_op15": "Contingencia",
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
      "t": "Misión del vuelo 1: ¿el piloto o el observador detectó que no se podía hacer con la autorización (altura o polígono) y no la ejecutaron?",
      "p": 6,
      "corto": "Misión trampa del vuelo 1",
      "trampa": 1,
      "mision": true,
      "t_op15": "¿Advirtieron que la orden excedía la altura autorizada (60 m) y no subieron?",
      "corto_op15": "Trampa de altura"
     },
     {
      "id": "25",
      "t": "Misión del vuelo 2: ¿el piloto o el observador detectó que no se podía hacer con la autorización (altura o polígono) y no la ejecutaron?",
      "p": 6,
      "corto": "Misión trampa del vuelo 2",
      "trampa": 2,
      "mision": true,
      "t_op15": "¿Advirtieron que la orden los sacaba del polígono autorizado y no salieron?",
      "corto_op15": "Trampa del polígono"
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
      "t": "¿Atendió su escenario de emergencia como observador con la acción correcta (aviso a tiempo, control del área o toma del control)?",
      "p": 6,
      "corto": "Escenario como observador",
      "t_op15": "¿Avisó a tiempo la amenaza de su tarjeta (aeronaves, personas, fauna u obstáculos)?",
      "corto_op15": "Aviso de la amenaza",
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
   "segundos": 10,
   "miradas": 2,
   "valor": 10,
   "miradas_libres": 2,
   "maniobras": {
    "defecto": 8,
    "minimo": 4,
    "maximo": 12
   }
  },
  /* OP-16: la trampa de cada vuelo es una misión imposible con la autorización (hasta 60 m y dentro del polígono). Se sortea una por vuelo, distinta
     en los dos vuelos de la prueba. Aprueban los dos (pareja) si el piloto o el observador la detecta y no la ejecutan. trampas: las de OP-15 y anteriores. */
  misiones: {
   "a": { "t": "Foto ortogonal a 90 m", "leer": "Misión: toma una foto ortogonal del COM San Nicolás a 90 m de altura.", "motivo": "altura", "limite": "La autorización es hasta 60 m: no se puede subir a 90 m.", "detener": "Si empiezan a subir por encima de 60 m, detén el ejercicio de inmediato." },
   "b": { "t": "Foto de frente a 250 m", "leer": "Misión: toma una foto de frente al COM San Nicolás a 250 m de distancia y 60 m de altura.", "motivo": "polígono", "limite": "A 250 m del COM el dron queda fuera del polígono autorizado.", "detener": "Si empiezan a alejarse hacia el borde del polígono, detén el ejercicio unos 10 m antes del borde." }
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
  escenarios: {"version": "ESC-4", "total": 42},
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
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
    "familias": [
     "batería en vuelo"
    ],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
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
    "familias": [
     "clima adverso"
    ],
    "en_sorteo": true,
    "mostrar_a": "cualquiera",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E10",
    "t": "Aeronave tripulada",
    "para": "observador",
    "situacion": "Ves un helicóptero a baja altura que se acerca por el {PUNTO}, {ALTURA}.",
    "espera": "El observador avisa de inmediato y con claridad, con la referencia acordada («helicóptero por el {PUNTO}, {ALTURA}»), y mantiene a la vista la aeronave y el dron. El piloto confirma, mantiene el control del dron sin maniobras bruscas y siguen las indicaciones del observador hasta que la aeronave salga del área; lo anotan en la bitácora. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (la cuasi colisión se registra en los indicadores SPI); MOR solo si hay contacto (colisión)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "aeronave tripulada"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta",
    "direccion": true,
    "nota_evaluador": "El helicóptero es imaginario. Se evalúa la comunicación del observador; no se califica ninguna maniobra evasiva del piloto."
   },
   {
    "id": "E11",
    "t": "Otro dron cerca",
    "para": "observador",
    "situacion": "Ves otro dron, que no es de la operación, volando cerca del de ustedes por el {PUNTO}, {ALTURA}: díselo al piloto.",
    "espera": "El observador avisa de inmediato con la referencia cardinal acordada (p. ej. «otro dron por el {PUNTO}, {ALTURA}»). El piloto se separa hacia el lado contrario y aterriza si el otro dron sigue cerca. Criterios de comunicación del observador: 1) avisa de inmediato indicando dirección y altura con la referencia cardinal acordada; 2) si el piloto no le entiende, reformula con claridad (otra referencia, p. ej. «a tu derecha», o le dice hacia dónde mover el dron) hasta confirmar que entendió; 3) si el piloto mueve el dron hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (si el otro dron solo está cerca); MOR si hay cuasi colisión con el otro dron o contacto",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "otro dron"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta",
    "direccion": true,
    "nota_evaluador": "Si el piloto no reacciona o se mueve hacia el otro dron, observa cómo lo corrige el observador."
   },
   {
    "id": "E12",
    "t": "Persona en el área de aterrizaje",
    "para": "observador",
    "situacion": "Una persona está entrando al área de seguridad del dronpuerto por el {PUNTO} mientras el dron desciende.",
    "espera": "El observador avisa con la referencia acordada («persona entrando por el {PUNTO}») y controla el área. El piloto confirma, detiene el descenso en estacionario a una altura segura y espera a que se despeje, o aterriza en una zona alterna segura. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "MOR (coordinación deficiente: terceros en el área durante la operación) y VOR",
    "reporte_esperado": "MOR+VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "terceros en el área"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta",
    "direccion": true
   },
   {
    "id": "E13",
    "t": "El observador pierde el dron de vista",
    "para": "observador",
    "situacion": "Perdiste de vista el dron detrás de los árboles.",
    "espera": "El observador lo dice de inmediato. El piloto detiene el avance, le dice dónde está el dron con la referencia acordada (punto cardinal y altura, con el mapa y la telemetría) y lo regresa a donde el observador lo vea; el observador confirma en voz alta cuando lo recupera. Si no lo recupera, cancelan y aterrizan. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "pérdida de vista del dron"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
   },
   {
    "id": "E14",
    "t": "Cable no previsto",
    "para": "observador",
    "situacion": "Imagina que el dron se está acercando a un cable que no estaba en la planeación, por el {PUNTO}, {ALTURA}.",
    "espera": "El observador avisa con la referencia acordada («cable por el {PUNTO}, {ALTURA}») y le indica hacia dónde separarse. El piloto confirma, detiene el avance, se separa del cable hacia el lado contrario y replantea la ruta. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (peligro no identificado); MOR si hay contacto (colisión); si hay daños, se activa el Plan de Respuesta a Emergencias UAS y la notificación de incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta",
    "direccion": true,
    "nota_evaluador": "El cable es imaginario: descríbeselo al observador. Si el piloto se mueve hacia el cable, observa cómo lo corrige el observador."
   },
   {
    "id": "E15",
    "t": "Curiosos que distraen al piloto",
    "para": "observador",
    "situacion": "Varias personas se acercan al puesto del piloto y empiezan a hacerle preguntas.",
    "espera": "El observador las aleja con cortesía y protege la concentración del piloto. El piloto pone el dron en estacionario seguro y no responde mientras vuela.",
    "reporte": "MOR (coordinación deficiente: terceros en el área durante la operación) y VOR",
    "reporte_esperado": "MOR+VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "terceros en el área"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
   },
   {
    "id": "E16",
    "t": "El observador se siente mal",
    "para": "piloto",
    "situacion": "Te sientes mareado y tienes que sentarte: díselo al piloto.",
    "espera": "El observador lo comunica de inmediato. El piloto aterriza sin demora (no se vuela sin observador) y atiende al compañero; si es grave, avisa al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "No requiere (emergencia médica: plan de emergencias)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "juan"
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
    "familias": [
     "batería en vuelo"
    ],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E19",
    "t": "Fauna sobre el dron",
    "para": "observador",
    "situacion": "Dos gallinazos se acercan al dron por el {PUNTO}, {ALTURA}: díselo al piloto.",
    "espera": "El observador avisa de inmediato con la referencia cardinal acordada (p. ej. «gallinazos por el {PUNTO}, {ALTURA}»). El piloto gana distancia hacia el lado contrario, no persigue ni encierra a las aves y, si persisten, aterriza. Criterios de comunicación del observador: 1) avisa de inmediato indicando dirección y altura con la referencia cardinal acordada; 2) si el piloto no le entiende, reformula con claridad (otra referencia, p. ej. «a tu derecha», o le dice hacia dónde mover el dron) hasta confirmar que entendió; 3) si el piloto mueve el dron hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR; si hay impacto: MOR y notificación de accidente o incidente grave (colisión con fauna)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "aves"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta",
    "direccion": true,
    "nota_evaluador": "Si el piloto no reacciona o se mueve hacia el lado de las aves, observa cómo lo corrige el observador."
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
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "juan"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
     "vibración o daño en vuelo",
     "daño en el fuselaje"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
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
    "familias": [
     "daño en el fuselaje"
    ],
    "en_sorteo": true,
    "mostrar_a": "cualquiera",
    "responde": "quien_lo_ve",
    "momento": [
     "cambio_de_bateria",
     "antes_del_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "juan"
   },
   {
    "id": "E25",
    "t": "Alteración del orden público",
    "para": "piloto",
    "situacion": "Un grupo de personas se está acercando molesto al puesto y exige que bajen el dron.",
    "espera": "El observador avisa al piloto. El piloto aterriza de forma segura lo antes posible; no confrontan ni discuten, recogen el equipo y se retiran a un lugar seguro. Avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones, y no vuelven hasta que haya condiciones.",
    "reporte": "VOR (amenaza a la seguridad de la operación)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "seguridad física"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "juan"
   },
   {
    "id": "E26",
    "t": "Amenaza a la seguridad personal",
    "para": "piloto",
    "situacion": "Una persona armada se acerca y exige que le entreguen el dron.",
    "espera": "La prioridad es la vida: no oponen resistencia. El piloto aterriza y entregan lo que exijan sin discutir; se ponen a salvo y después avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR y denuncia ante las autoridades; reporte de pérdida del equipo",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "seguridad física"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "juan"
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
    "en_sorteo": true,
    "mostrar_a": "cualquiera",
    "responde": "quien_lo_ve",
    "momento": [
     "cambio_de_bateria",
     "antes_del_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "juan"
   },
   {
    "id": "E28",
    "t": "Pérdida de GNSS",
    "para": "piloto",
    "situacion": "La aplicación indica pérdida de GNSS: el dron pasó a modo de actitud (ATTI) y empieza a derivar con el viento.",
    "espera": "Anuncia en voz alta «Tomando control manual», corrige la deriva con los mandos, aleja el dron de obstáculos y personas y aterriza en la zona segura más cercana. Le pide al observador que le indique la deriva y la distancia a los obstáculos con la referencia acordada y confirma cada indicación. No espera a que el dron se estabilice solo.",
    "reporte": "MOR (pérdida de GNSS en vuelo)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E30",
    "t": "Fauna que ataca al piloto (amenaza biológica)",
    "para": "observador",
    "situacion": "Un enjambre de abejas, un perro agresivo o una serpiente está cerca del piloto mientras vuela.",
    "espera": "El observador avisa de inmediato al piloto con la referencia acordada. El piloto deja el dron en estacionario seguro y entrega el control en voz alta; el observador (piloto certificado) toma el control, lo confirma en voz alta («Tengo el control») y aterriza de forma segura. Luego atienden al compañero (primeros auxilios; si hay reacción alérgica o lesión grave, Plan de Respuesta a Emergencias UAS) y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones.",
    "reporte": "VOR; si hay lesión grave: notificación de accidente o incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "piloto incapacitado"
    ],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "juan"
   },
   {
    "id": "E36",
    "t": "Fuego en una batería",
    "para": "piloto",
    "situacion": "La batería que estaba cargando o en reposo empezó a soltar chispas y una llama pequeña.",
    "espera": "Si el fuego es incipiente, usa el extintor multipropósito F-500 (agente encapsulador). Nunca usa agua directamente sobre la batería en llamas. Se alejan, esperan a que se disipen los gases antes de acercarse y, si no se controla de inmediato, llaman a los bomberos (Manual del Sistema de Gestión de la Seguridad Operacional).",
    "reporte": "VOR; registro en el libro de mantenimiento y en la bitácora; informe al Gerente SMS y al Responsable de Mantenimiento",
    "reporte_esperado": "VOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ],
    "en_sorteo": false,
    "mostrar_a": "cualquiera",
    "responde": "quien_lo_ve",
    "momento": [
     "cambio_de_bateria",
     "antes_del_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": false,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "cualquiera",
    "responde": "quien_lo_ve",
    "momento": [
     "cambio_de_bateria"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "marca": "propuesta"
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
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E39",
    "t": "Incendio cerca de la zona",
    "para": "piloto",
    "situacion": "Ves una columna de humo de un incendio de vegetación que avanza hacia la zona de vuelo.",
    "espera": "El observador avisa. El piloto aterriza, recogen el equipo y evacúan por la ruta definida en el briefing; avisan a emergencias si nadie lo ha hecho y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones. No usan el dron para ver el incendio sin autorización.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "evacuación"
    ],
    "en_sorteo": true,
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E40",
    "t": "El observador toma el control",
    "para": "observador",
    "situacion": "Te sientes muy mareado (o te picó una abeja en la mano) y no puedes seguir volando.",
    "espera": "El piloto deja el dron en estacionario en una posición segura y dice en voz alta que entrega el control. El observador (que es piloto certificado) toma el control, lo confirma en voz alta («Tengo el control») y el piloto lo suelta solo después de oír la confirmación. El observador aterriza de forma segura; luego atienden al compañero y avisan al Jefe de Pilotos, que se encarga de las demás comunicaciones. Nadie queda volando sin observador: después del aterrizaje se suspende la operación.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "piloto incapacitado",
     "tripulante indispuesto"
    ],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E42",
    "t": "Solo visual",
    "para": "piloto",
    "situacion": "La pantalla del control se apagó: no tienes imagen ni telemetría, pero los mandos siguen respondiendo.",
    "espera": "Avisa al observador y vuela mirando el dron: lo trae de regreso con movimientos cortos y controlados. Le pide al observador que lo guíe en distancia y orientación con la referencia acordada y repite cada indicación antes de mover. Aterriza en el dronpuerto. No intenta reiniciar la pantalla mientras vuela.",
    "reporte": "VOR (MOR si se pierde el control)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "enlace, imagen o pantalla"
    ],
    "en_sorteo": true,
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "marca": "propuesta"
   },
   {
    "id": "E49",
    "t": "Tormenta eléctrica cerca",
    "para": "piloto",
    "situacion": "Escuchas un trueno y ves relámpagos hacia el oriente: díselo al piloto.",
    "espera": "El observador avisa de inmediato y el piloto confirma. El piloto suspende la misión, regresa por la ruta más corta y segura y aterriza. Apagan y recogen el equipo y se resguardan lejos de torres y estructuras altas. No vuelven a volar hasta que pase la tormenta y lo anotan en la bitácora. Comunicación: avisa de inmediato con la referencia acordada; el que recibe repite o confirma (comunicación cerrada); si no le entienden, reformula hasta confirmar; si el otro se mueve hacia el lado equivocado, lo corrige de inmediato.",
    "reporte": "VOR (condición meteorológica adversa)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "clima adverso"
    ],
    "mostrar_a": "observador",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Cartilla UAS, 4.6.2 (condiciones climáticas adversas: aterrizaje); Manual de Operaciones, 4.6.2"
   },
   {
    "id": "E51",
    "t": "Batería baja en el control remoto",
    "para": "piloto",
    "situacion": "El control remoto muestra 15 % de batería y baja rápido: si se apaga, pierdes el enlace con el dron.",
    "espera": "Avisa al observador (que confirma), deja la tarea, regresa y aterriza de inmediato, antes de que el control se apague. No cambia la batería del control con el dron en el aire. Lo anota en la bitácora.",
    "reporte": "VOR (MOR si se pierde el enlace)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "batería del control"
    ],
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Cartilla UAS, 4.6.3 (falla del control remoto: causa batería); Manual de Operaciones, emergencias"
   },
   {
    "id": "E55",
    "t": "Batería muy caliente al retirarla",
    "para": "piloto",
    "situacion": "Al sacar la batería del vuelo 1 notas que está muy caliente al tacto y empieza a deformarse.",
    "espera": "No la carga ni la vuelve a usar caliente. La deja enfriar a la sombra, en un sitio ventilado, sobre una superficie no inflamable y lejos de materiales inflamables, y usa otra batería para el vuelo siguiente. Si se infla, huele o sigue calentándose, la pone en la bolsa ignífuga y avisa al Responsable de Mantenimiento.",
    "reporte": "VOR; registro en el libro de mantenimiento si queda fuera de servicio",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ],
    "mostrar_a": "cualquiera",
    "responde": "quien_lo_ve",
    "momento": [
     "cambio_de_bateria"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Plan de Respuesta a Emergencias UAS (baterías de litio); Manual de Control de Mantenimiento (baterías)"
   },
   {
    "id": "E59",
    "t": "Cortada en la mano durante el alistamiento",
    "para": "observador",
    "situacion": "Te cortaste la mano con el borde de una hélice y estás sangrando bastante: díselo a tu compañero.",
    "espera": "El compañero detiene el alistamiento y se asegura de que el dron esté apagado. Presta primeros auxilios con el botiquín: presión sobre la herida, limpieza y vendaje. Si la lesión es grave, activa el Plan de Respuesta a Emergencias UAS y avisa al Jefe de Pilotos. Solo siguen si el lesionado queda apto para volar.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "lesión en tierra"
    ],
    "mostrar_a": "piloto",
    "responde": "observador",
    "momento": [
     "cambio_de_bateria",
     "antes_del_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Plan de Respuesta a Emergencias UAS, 2.2 (lesión a personas) y 2.1 (activación); Cartilla UAS (botiquín en el área de operación)"
   },
   {
    "id": "E60",
    "t": "Viento fuerte en altura",
    "para": "piloto",
    "situacion": "La aplicación avisa de viento fuerte en altura: el dron casi no avanza al regresar y la batería baja rápido.",
    "espera": "Si es seguro, baja a una altura con menos viento. Regresa por la ruta más corta, cuida que le quede batería para aterrizar con al menos 20 % y suspende la misión. Si tiene que aterrizar fuera del punto previsto, sin daños, lo anota en la bitácora y hace el VOR.",
    "reporte": "VOR; si aterriza fuera del punto por viento sin daños: bitácora y VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "viento"
    ],
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Cartilla UAS, 4.6.2 (viento mayor que el límite: aterrice); regla de Juan R6 (aterrizaje fuera del punto por viento)"
   },
   {
    "id": "E61",
    "t": "Personas debajo de la ruta del dron",
    "para": "observador",
    "situacion": "Un grupo de trabajadores sale a caminar por el {PUNTO}, justo por debajo de donde está el dron.",
    "espera": "El observador avisa de inmediato y dice dónde están («personas por el {PUNTO}, debajo del dron»). El piloto confirma y mueve el dron para no quedar encima de ellas, hacia el lado contrario, y espera en estacionario seguro. Siguen cuando se hayan alejado. Personas primero. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "MOR (coordinación deficiente: terceros en el área durante la operación) y VOR",
    "reporte_esperado": "MOR+VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "terceros en el área"
    ],
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "direccion": true,
    "nuevo": true,
    "fuente": "Cartilla UAS (proteja en este orden: personas, fauna, infraestructura, UAS) y sección 5, evento 11; decisión de Juan del 19-nov"
   },
   {
    "id": "E62",
    "t": "Pierde la orientación del dron",
    "para": "piloto",
    "situacion": "Ya no sabes hacia dónde apunta la nariz del dron y, al mover los mandos, se aleja hacia los árboles.",
    "espera": "Deja el dron en estacionario de inmediato y se lo dice al observador, que le confirma dónde está el dron y hacia dónde apunta con la referencia acordada. Se reorienta con el indicador de rumbo del mapa o con la cámara, o con un movimiento corto y suave mirando cómo responde, y el observador le confirma si va bien. Si no se recupera, aterriza en la zona segura más cercana. Comunicación: avisa de inmediato con la referencia acordada; el que recibe repite o confirma (comunicación cerrada); si no le entienden, reformula hasta confirmar; si el otro se mueve hacia el lado equivocado, lo corrige de inmediato.",
    "reporte": "VOR (MOR si se pierde el control)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "orientación"
    ],
    "mostrar_a": "piloto",
    "responde": "piloto",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "nuevo": true,
    "fuente": "Cartilla UAS, 4.6.6 (orientación: brújula externa y cámara)"
   },
   {
    "id": "E63",
    "t": "Cometa cerca de la zona de vuelo",
    "para": "observador",
    "situacion": "El viento acerca al dron una cometa que elevan unos niños, por el {PUNTO} de la zona de vuelo, {ALTURA}: díselo al piloto.",
    "espera": "El observador avisa con la referencia cardinal acordada y dice dónde está la cometa y a qué altura respecto al dron. El piloto se mantiene lejos de la cometa y de su cuerda y cambia la ruta; si la cometa sigue acercándose, aterriza. Lo anota en la bitácora. Criterios de comunicación del observador: 1) avisa de inmediato indicando dirección y altura con la referencia cardinal acordada; 2) si el piloto no le entiende, reformula con claridad (otra referencia, p. ej. «a tu derecha», o le dice hacia dónde mover el dron) hasta confirmar que entendió; 3) si el piloto mueve el dron hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (peligro en vuelo: bitácora y VOR; contacto en vuelo: bitácora y VOR, y notificación si hay daños)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ],
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "direccion": true,
    "nota_evaluador": "Si el piloto no reacciona o se mueve hacia la cometa, observa cómo lo corrige el observador.",
    "nuevo": true,
    "fuente": "Regla de Juan R2 (contacto en vuelo con obstáculo: bitácora + VOR); Cartilla UAS, 4.7 C"
   },
   {
    "id": "E68",
    "t": "El piloto se mueve hacia el obstáculo",
    "para": "observador",
    "situacion": "Imagina una estructura por el {PUNTO} del dron, {ALTURA}, a {DIST}, y el dron va hacia ella: avísale al piloto.",
    "espera": "El observador avisa con la referencia acordada. Si el piloto se mueve hacia la estructura, lo detiene de inmediato («¡Alto!») y le corrige con claridad hacia dónde ir; confirma que el piloto entendió (comunicación cerrada) antes de que siga. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (peligro no identificado)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ],
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": true,
    "requiere_aterrizar": false,
    "en_sorteo": true,
    "marca": "juan",
    "direccion": true,
    "nota_evaluador": "La estructura es imaginaria. Pídele en voz baja al piloto, antes de mostrar la tarjeta, que cuando reciba el aviso haga un movimiento corto hacia el lado equivocado. Evalúas cómo lo corrige el observador.",
    "nuevo": true,
    "fuente": "Manual de Operaciones, funciones del observador; regla de Juan R2"
   },
   {
    "id": "E69",
    "t": "El observador guía el aterrizaje junto a una antena",
    "para": "observador",
    "situacion": "Imagina que, mientras el dron baja al dronpuerto, va a quedar a {DIST} de una antena por el {PUNTO}: guía al piloto.",
    "espera": "El observador le avisa al piloto con la referencia acordada y lo guía con indicaciones cortas («alto», «hacia el ...», «baja») hasta un descenso vertical seguro sobre el landing pad. El piloto repite cada indicación. Si el dron se va hacia la antena, el observador lo detiene y corrige de inmediato. Comunicación: avisa de inmediato con la referencia acordada (punto cardinal y altura); si el otro no le entiende, reformula (otra referencia, p. ej. «a tu derecha», o hacia dónde mover el dron) hasta confirmar; usa comunicación cerrada (el que recibe repite o confirma); si el otro se mueve hacia el lado equivocado, lo corrige de inmediato y con claridad.",
    "reporte": "VOR (peligro); con contacto en el aterrizaje: MOR (colisión con obstáculo durante el aterrizaje)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "guía de aterrizaje"
    ],
    "mostrar_a": "observador",
    "responde": "observador",
    "momento": [
     "en_vuelo"
    ],
    "continua": false,
    "requiere_aterrizar": true,
    "en_sorteo": true,
    "marca": "juan",
    "direccion": true,
    "nota_evaluador": "La antena es imaginaria: descríbesela al observador. Si el piloto se mueve hacia ella, observa cómo lo corrige el observador.",
    "nuevo": true,
    "fuente": "Cartilla UAS sección 5, evento 1 (colisión durante el aterrizaje); regla de Juan R4"
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
