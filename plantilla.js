/* Prueba operacional de pilotos UAS de EPM – lista OP-9 (nov 2026).
   28 preguntas de sí o no: 8 de 5 puntos y 20 de 3 puntos = 100. 9 críticas (si fallan, no aprueba).
   tipo de sección: conjunta (una respuesta para la pareja), piloto (su vuelo), observador (vuelo del compañero).
   La pregunta de destreza se responde sola con la prueba de vuelo sin pantalla (8 órdenes dictadas, 3 criterios cada una):
   aprueba con 18 de 24 puntos, máximo 2 miradas a la pantalla y sin intervención de seguridad.
   Tarjetas de contingencia: los 43 escenarios (ESC-1), con reporte esperado, clase y tiempo. El bloque entre las marcas
   «ESCENARIOS» lo genera escenarios_a_plantilla.py: no editarlo a mano. tarjetas_op8 son las 20 tarjetas de EVAL-OP 8,
   solo para leer sesiones o respaldos viejos (no se sortean). */
window.PLANTILLA = {
  version: 'OP-9',
  lugar: 'COM San Nicolás',
  minutos: 60,
  cronograma: [
    { de: 0, a: 3, t: 'Explicación de la prueba' },
    { de: 3, a: 15, t: 'Preparación en sitio y dronpuerto (juntos)' },
    { de: 15, a: 29, t: 'Vuelo 1: pilota {A}, observa {B}' },
    { de: 29, a: 31, t: 'Bitácora del vuelo 1 y cambio de roles' },
    { de: 31, a: 45, t: 'Vuelo 2: pilota {B}, observa {A}' },
    { de: 45, a: 55, t: 'Post-vuelo, bitácora y cierre (juntos)' },
    { de: 55, a: 60, t: 'Margen y retroalimentación' }
  ],
  secciones: [
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
  destreza: {
   "tipos": [
    [
     "nariz",
     "Nariz hacia el piloto"
    ],
    [
     "lado",
     "Nariz de lado"
    ],
    [
     "guinada",
     "Guiñada"
    ],
    [
     "alabeo",
     "Alabeo"
    ],
    [
     "cabeceo",
     "Cabeceo"
    ],
    [
     "altura",
     "Altura"
    ],
    [
     "regreso",
     "Regreso"
    ]
   ],
   "final": "Aterriza en el TLOF con la nariz hacia ti.",
   "ordenes": {
    "nariz": [
     "Nariz hacia ti. Desplázate 10 m a tu derecha.",
     "Nariz hacia ti. Desplázate 10 m a tu izquierda.",
     "Nariz hacia ti. Aléjate 15 m en línea recta."
    ],
    "lado": [
     "Nariz a tu derecha. Avanza 10 m hacia el frente.",
     "Nariz a tu izquierda. Vuelve sobre el dronpuerto.",
     "Nariz a tu derecha. Desplázate 10 m hacia ti."
    ],
    "guinada": [
     "Gira la nariz 90° a la derecha, sin desplazarte.",
     "Gira la nariz hacia ti, sin desplazarte.",
     "Gira la nariz hacia un punto de referencia que te indique, sin desplazarte."
    ],
    "alabeo": [
     "Alabeo: desplázate 5 m a la derecha del dron, sin girar la nariz.",
     "Alabeo: desplázate 5 m a la izquierda del dron, sin girar la nariz."
    ],
    "cabeceo": [
     "Cabeceo: avanza 10 m hacia donde apunta la nariz.",
     "Cabeceo: retrocede 10 m sin girar la nariz."
    ],
    "altura": [
     "Sube 10 m y detente.",
     "Baja 5 m y detente, sin desplazarte.",
     "Sube 5 m mientras giras la nariz 90°."
    ],
    "regreso": [
     "Vuelve sobre el dronpuerto con la nariz al frente.",
     "Vuelve sobre el dronpuerto con la nariz hacia ti."
    ]
   },
   "criterios": [
    "Arrancó hacia el lado correcto",
    "Movimiento suave, sin oscilar",
    "Terminó donde se le pidió"
   ],
   "minimo": 18,
   "miradas": 2
  },
  /* ESCENARIOS: inicio (generado por escenarios_a_plantilla.py; no editar a mano) */
  escenarios: {"version": "ESC-1", "total": 43},
  tarjetas: [
   {
    "id": "E01",
    "t": "Alerta de obstáculo",
    "para": "piloto",
    "situacion": "La aplicación muestra una alerta de obstáculo a 3 m por la izquierda del dron.",
    "espera": "Detiene el dron, verifica con el observador y la cámara dónde está el obstáculo, se separa con un movimiento controlado hacia el lado libre (o gana altura si es seguro) y replantea la ruta.",
    "reporte": "VOR (peligro no identificado)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ]
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
    "familias": []
   },
   {
    "id": "E03",
    "t": "Falla de motor",
    "para": "piloto",
    "situacion": "El dron tiene una vibración fuerte y la aplicación muestra una alerta de motor.",
    "espera": "Aterriza de inmediato en la zona segura más cercana, priorizando personas, fauna e infraestructura sobre el dron, y avisa al observador.",
    "reporte": "VOR (MOR si hay pérdida de control)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "vibración o daño en vuelo"
    ]
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
    ]
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
    ]
   },
   {
    "id": "E06",
    "t": "Límite del polígono",
    "para": "piloto",
    "situacion": "La aplicación avisa que el dron está llegando al límite del polígono autorizado.",
    "espera": "Detiene el avance y regresa sin salir del polígono; replantea la toma si hace falta.",
    "reporte": "No requiere si no sale; MOR si sale del polígono",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": []
   },
   {
    "id": "E07",
    "t": "Se cae la comunicación con el observador",
    "para": "piloto",
    "situacion": "Ya no escuchas al observador: el radio se quedó sin señal.",
    "espera": "Pone el dron en estacionario a una altura segura y restablece la comunicación por voz o señas; si no lo logra, regresa y aterriza.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": []
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
    "familias": []
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
    ]
   },
   {
    "id": "E10",
    "t": "Aeronave tripulada",
    "para": "observador",
    "situacion": "Ves un helicóptero a baja altura que se acerca por tu derecha.",
    "espera": "El observador avisa de inmediato y con claridad. El piloto cede el paso: desciende y aleja el dron de la trayectoria, aterriza si hace falta y espera a que salga del área.",
    "reporte": "MOR (cuasi colisión con aeronave tripulada)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "aeronave tripulada"
    ]
   },
   {
    "id": "E11",
    "t": "Otro dron cerca",
    "para": "observador",
    "situacion": "Ves otro dron, que no es de la operación, volando cerca del de ustedes.",
    "espera": "El observador avisa de inmediato. El piloto se separa (cambia de altura o se aleja) y aterriza si el otro dron sigue cerca.",
    "reporte": "MOR si hay cuasi colisión",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "otro dron"
    ]
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
    "familias": []
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
    ]
   },
   {
    "id": "E14",
    "t": "Cable no previsto",
    "para": "observador",
    "situacion": "El dron se está acercando a un cable que no estaba en la planeación.",
    "espera": "El observador avisa y da la dirección del cable. El piloto detiene el avance, se separa del cable ganando altura o distancia y replantea la ruta.",
    "reporte": "VOR (peligro no identificado); MOR con notificación si hay contacto",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ]
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
    "familias": []
   },
   {
    "id": "E16",
    "t": "El observador se siente mal",
    "para": "observador",
    "situacion": "Te sientes mareado y tienes que sentarte: díselo al piloto.",
    "espera": "El observador lo comunica de inmediato. El piloto aterriza sin demora (no se vuela sin observador) y atiende al compañero; si es grave, activa la notificación primaria.",
    "reporte": "No requiere (emergencia médica: plan de emergencias)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ]
   },
   {
    "id": "E17",
    "t": "Maquinaria bajo la ruta",
    "para": "observador",
    "situacion": "Un camión grúa con el brazo levantado está entrando a la zona, debajo de la ruta del dron.",
    "espera": "El observador avisa de inmediato. El piloto detiene el avance, gana altura o se aleja para mantener la separación y replantea la ruta antes de seguir.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ]
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
    "familias": []
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
    ]
   },
   {
    "id": "E20",
    "t": "Batería de repuesto sobrecalentada o con gases",
    "para": "observador",
    "situacion": "La batería de repuesto que está en el puesto está muy caliente y huele a químico.",
    "espera": "Según el PRE: detiene lo que esté haciendo con ella, la aleja de los equipos si es seguro, la pone en la bolsa o recipiente ignífugo en una zona ventilada y alejada de personas y materiales inflamables, no la manipula ni intenta descargarla y avisa al Responsable de Mantenimiento. El piloto termina el vuelo y aterriza.",
    "reporte": "VOR; registro en el libro de mantenimiento y en la bitácora",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "batería en tierra"
    ]
   },
   {
    "id": "E21",
    "t": "Vuelo con desnivel del terreno",
    "para": "piloto",
    "situacion": "La ruta va hacia una ladera: el terreno sube unos 40 m más adelante. La altura en pantalla es respecto al punto de despegue.",
    "espera": "Recuerda que la altura en pantalla es respecto al despegue y no al terreno de abajo. Gana altura antes de llegar a la ladera para mantener separación con el terreno y los obstáculos, se apoya en el observador y, al bajar la ladera, controla no superar 122 m sobre el terreno.",
    "reporte": "No requiere, si mantiene la separación",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": []
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
    ]
   },
   {
    "id": "E23",
    "t": "Daño en el fuselaje",
    "para": "piloto",
    "situacion": "El observador ve que algo se desprendió del dron y ahora vibra y se inclina hacia un lado.",
    "espera": "Aterriza de inmediato en la zona segura más cercana, priorizando personas e infraestructura. No vuelve a encender el dron: lo deja fuera de servicio, busca la pieza si es seguro y avisa al Responsable de Mantenimiento.",
    "reporte": "MOR (falla estructural en vuelo)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "vibración o daño en vuelo"
    ]
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
    "familias": []
   },
   {
    "id": "E25",
    "t": "Alteración del orden público",
    "para": "observador",
    "situacion": "Un grupo de personas se está acercando molesto al puesto y exige que bajen el dron.",
    "espera": "El observador avisa al piloto. El piloto aterriza de forma segura lo antes posible; no confrontan ni discuten, recogen el equipo y se retiran a un lugar seguro. Informan al jefe y no vuelven hasta que haya condiciones.",
    "reporte": "VOR (amenaza a la seguridad de la operación)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": []
   },
   {
    "id": "E26",
    "t": "Amenaza a la seguridad personal",
    "para": "observador",
    "situacion": "Una persona armada se acerca y exige que le entreguen el dron.",
    "espera": "La prioridad es la vida: no oponen resistencia. El piloto aterriza y entregan lo que exijan sin discutir; se ponen a salvo y después avisan a las autoridades y al jefe.",
    "reporte": "VOR y denuncia ante las autoridades; reporte de pérdida del equipo",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": []
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
    ]
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
    "familias": []
   },
   {
    "id": "E29",
    "t": "Acuatizaje",
    "para": "piloto",
    "situacion": "El dron tiene una falla y no va a alcanzar el dronpuerto; debajo hay una quebrada o un tanque de agua.",
    "espera": "Si la caída es inevitable, la dirige a la zona que menos riesgo tenga para las personas (el agua puede ser la mejor opción). Después recupera el dron solo si es seguro y, con la batería sumergida, sigue el PRE: retirarla con guantes aislantes, secarla y dejarla 48 horas en bolsa ignífuga en un lugar no inflamable; queda fuera de servicio.",
    "reporte": "MOR (aterrizaje forzoso / pérdida de la aeronave)",
    "reporte_esperado": "MOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": []
   },
   {
    "id": "E30",
    "t": "Fauna que ataca al piloto (amenaza biológica)",
    "para": "observador",
    "situacion": "Un enjambre de abejas, un perro agresivo o una serpiente está cerca del piloto mientras vuela.",
    "espera": "El observador avisa de inmediato. El piloto deja el dron en estacionario en un sitio seguro, se protege y, en cuanto pueda, aterriza. Si hay una picadura o lesión, primeros auxilios; si hay reacción alérgica o lesión grave, activan el plan de respuesta ante emergencias.",
    "reporte": "VOR; si hay lesión grave: notificación de accidente o incidente grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": []
   },
   {
    "id": "E31",
    "t": "Lesión a una persona",
    "para": "observador",
    "situacion": "El dron cayó y golpeó a una persona que pasaba; está en el suelo y sangra.",
    "espera": "Detienen la operación y apagan el dron. Atienden a la persona (primeros auxilios) y llaman a emergencias; aseguran la zona sin mover los restos más de lo necesario. Avisan al Jefe de Pilotos y al Ejecutivo Responsable, que activan el PRE y el Puesto de Mando Unificado.",
    "reporte": "MOR y notificación de accidente (lesión grave)",
    "reporte_esperado": "MOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": []
   },
   {
    "id": "E32",
    "t": "Colisión con infraestructura o propiedad",
    "para": "piloto",
    "situacion": "El dron golpeó el techo de una casa vecina y cayó en el patio.",
    "espera": "Apaga los motores, asegura la zona y verifica que no haya personas lesionadas. No manipula los restos más de lo necesario, toma fotos y avisa al Jefe de Pilotos para activar el PRE. No negocia daños con el propietario; deja los datos de contacto de EPM.",
    "reporte": "MOR y notificación de incidente grave (daño a propiedad)",
    "reporte_esperado": "MOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": []
   },
   {
    "id": "E33",
    "t": "Colisión con otra UA",
    "para": "observador",
    "situacion": "Ves otro dron que viene directo hacia el de ustedes y no hay tiempo para que lo esquive.",
    "espera": "El observador avisa de inmediato. El piloto intenta evitarlo descendiendo o alejándose; si hay contacto, aterriza o asegura la caída lejos de personas, apaga y asegura la zona. Avisa al Jefe de Pilotos para activar el PRE e intenta identificar al otro operador.",
    "reporte": "MOR y notificación de incidente grave (colisión con otra UA)",
    "reporte_esperado": "MOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "otro dron"
    ]
   },
   {
    "id": "E34",
    "t": "Colisión con aeronave tripulada",
    "para": "observador",
    "situacion": "Un helicóptero aparece a baja altura muy cerca del dron.",
    "espera": "El observador avisa de inmediato. El piloto desciende y se aparta de la trayectoria del helicóptero y aterriza. Si hubo contacto o casi contacto, registran la hora, la posición y el tipo de aeronave y avisan al Jefe de Pilotos para activar el PRE.",
    "reporte": "MOR y notificación de accidente o incidente grave (colisión con aeronave tripulada); MOR si fue cuasi colisión",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "aeronave tripulada"
    ]
   },
   {
    "id": "E35",
    "t": "Colisión con fauna",
    "para": "piloto",
    "situacion": "Un ave golpeó el dron; sigue volando, pero vibra.",
    "espera": "Aterriza de inmediato en la zona segura más cercana. Revisa el dron sin volver a encenderlo, lo deja fuera de servicio hasta la inspección de mantenimiento y avisa al Jefe de Pilotos para activar el PRE.",
    "reporte": "MOR y notificación de incidente grave (colisión con fauna)",
    "reporte_esperado": "MOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": [
     "aves",
     "vibración o daño en vuelo"
    ]
   },
   {
    "id": "E36",
    "t": "Fuego en una batería",
    "para": "observador",
    "situacion": "La batería que estaba cargando o en reposo empezó a soltar chispas y una llama pequeña.",
    "espera": "Si el fuego es incipiente, usa el extintor multipropósito F-500 (agente encapsulador). Nunca usa agua directamente sobre la batería en llamas. Se alejan, esperan a que se disipen los gases antes de acercarse y, si no se controla de inmediato, llaman a los bomberos (Tabla 8 del MSMS).",
    "reporte": "VOR; registro en el libro de mantenimiento y en la bitácora; informe al Gerente SMS y al Responsable de Mantenimiento",
    "reporte_esperado": "VOR",
    "clase": "solo verbal",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ]
   },
   {
    "id": "E37",
    "t": "Batería golpeada o perforada",
    "para": "piloto",
    "situacion": "Al aterrizar, el dron se volcó y la batería quedó golpeada y con una abolladura.",
    "espera": "No la conecta ni la vuelve a usar. La aísla en la bolsa ignífuga y sigue el procedimiento de disposición segura del MCM-EPM-03; avisa al Responsable de Mantenimiento.",
    "reporte": "VOR; registro en el libro de mantenimiento",
    "reporte_esperado": "MOR+VOR",
    "clase": "ejecutable en tierra",
    "tiempo": "no aplica: no es tarjeta de vuelo",
    "familias": [
     "batería en tierra"
    ]
   },
   {
    "id": "E38",
    "t": "Emergencia médica en el equipo",
    "para": "piloto",
    "situacion": "El observador se desmaya de repente.",
    "espera": "El piloto aterriza de inmediato (no se vuela sin observador), atiende a su compañero, llama a emergencias y avisa al jefe.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ]
   },
   {
    "id": "E39",
    "t": "Incendio cerca de la zona",
    "para": "observador",
    "situacion": "Ves una columna de humo de un incendio de vegetación que avanza hacia la zona de vuelo.",
    "espera": "El observador avisa. El piloto aterriza, recogen el equipo y evacúan por la ruta definida en el briefing; avisan a emergencias si nadie lo ha hecho. No usan el dron para ver el incendio sin autorización.",
    "reporte": "VOR",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "alto: aterrizaje y además recoger, evacuar, secar o dejar el dron o la batería fuera de servicio",
    "familias": []
   },
   {
    "id": "E40",
    "t": "El observador toma el control",
    "para": "piloto",
    "situacion": "Te sientes muy mareado (o te picó una abeja en la mano) y no puedes seguir volando.",
    "espera": "El piloto deja el dron en estacionario en una posición segura y avisa en voz alta que entrega el control. El observador (que es piloto certificado con la misma certificación que exige el vuelo) toma el control, lo confirma en voz alta y aterriza de forma segura; luego atienden al compañero. Nadie queda volando sin observador: después del aterrizaje se suspende la operación.",
    "reporte": "VOR; notificación si hay lesión grave",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "medio: termina en aterrizaje; si no es la última tarjeta del vuelo obliga a despegar otra vez",
    "familias": [
     "tripulante indispuesto"
    ]
   },
   {
    "id": "E41",
    "t": "Solo instrumentos",
    "para": "piloto",
    "situacion": "El dron quedó detrás de unos árboles: ni tú ni el observador lo ven. Solo tienes la pantalla.",
    "espera": "No avanza a ciegas: usa la cámara, el mapa y la telemetría (altura, distancia y rumbo al punto de despegue) para devolver el dron por la ruta por donde llegó, subiendo si hace falta para librar los obstáculos, hasta que el observador lo vuelva a ver.",
    "reporte": "VOR (pérdida de contacto visual)",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "pérdida de vista del dron"
    ]
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
    ]
   },
   {
    "id": "E43",
    "t": "Perspectiva engañosa",
    "para": "observador",
    "situacion": "Desde donde estás ves que el dron está muy cerca de la copa de un árbol, aunque desde el puesto del piloto parece estar lejos.",
    "espera": "El observador avisa con la distancia y el lado («a menos de 3 m del árbol, a tu derecha»). El piloto detiene el avance, confirma la separación con la cámara y la posición del observador, y se separa antes de continuar. Ninguno confía solo en la perspectiva desde un punto.",
    "reporte": "VOR si hubo acercamiento peligroso",
    "reporte_esperado": "VOR",
    "clase": "ejecutable en vuelo",
    "tiempo": "bajo: se resuelve en el aire y el vuelo sigue",
    "familias": [
     "obstáculo cercano"
    ]
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
