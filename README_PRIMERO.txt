# Vínculo + ElevenLabs (conversación por voz)

Este paquete conserva el prototipo HTML de Vínculo y añade un botón para conversar por voz con un agente de ElevenLabs.

## Antes de empezar
- Necesitas una cuenta de ElevenLabs y acceso a ElevenAgents.
- Crea un agente en el panel de ElevenLabs y configura su idioma en español.
- Diseña o selecciona una voz femenina cálida y pausada desde Voices > My Voices > Add a new voice > Voice Design.
- Asigna esa voz al agente.
- Copia el Agent ID del agente y crea una API key.

## Prompt sugerido para la voz de Vini
Voz femenina adulta, cálida, serena y cercana, en español latinoamericano natural. Ritmo pausado, articulación clara, tono amable y reconfortante. Debe transmitir compañía, respeto y paciencia sin sonar infantil, exageradamente alegre ni artificial. Evita diminutivos excesivos. Habla con frases breves y deja espacio para que la persona mayor responda. Pronuncia con claridad y sin prisa.

## Prompt sugerido para el agente
Eres Vini, el compañero virtual de Vínculo, una aplicación para personas mayores. Hablas en español claro y natural, con calidez, respeto y paciencia. Tu objetivo es conversar, escuchar y acompañar, nunca infantilizar, presionar ni invadir. Haz una pregunta sencilla cada vez y espera la respuesta. Usa frases cortas y evita dar varias instrucciones juntas. No afirmes que eres una persona ni sustituyas a familiares, amistades o profesionales. Si la persona expresa peligro inmediato, riesgo de hacerse daño o una emergencia médica, anímala a contactar a una persona de confianza y a los servicios de emergencia locales. No inventes que puedes llamar o enviar mensajes desde la aplicación. Si no entiendes, pide que repita con amabilidad.

## Instalación en Windows
1. Instala Node.js LTS desde https://nodejs.org si todavía no lo tienes.
2. Abre esta carpeta en el Explorador.
3. Duplica `.env.example` y renombra la copia a `.env`.
4. Abre `.env` con el Bloc de notas y pega tu API Key y Agent ID. No compartas ese archivo ni publiques la clave.
5. Abre una terminal dentro de esta carpeta (en el Explorador: clic en la barra de dirección, escribe `cmd` y Enter).
6. Ejecuta:
   ```bash
   npm install
   npm start
   ```
7. Abre `http://localhost:3000` en Chrome o Edge.
8. Entra a la pantalla de chat, pulsa “Hablar con Vini” y permite el micrófono.

## Importante
- No abras `public/index.html` con doble clic: para usar el agente debes abrir la dirección localhost.
- La clave API está solo en el servidor, no en el HTML.
- El navegador debe permitir el micrófono y tener conexión a internet.
- La conversación depende de la configuración y créditos/plan de ElevenLabs.
- El prototipo conserva el chat de texto original; el botón de conversación hablada usa el agente de ElevenLabs.
- El agente de voz es independiente del chat de texto simulado que ya existía. Para que ambos compartan el mismo contexto y respuestas, habría que conectar el agente con una base de conocimiento o herramientas propias en una fase posterior.
- Este paquete es una base de integración. No puede conectarse hasta que completes el Agent ID y la API Key, y configures el agente/voz en tu cuenta.

Documentación:
- WebSocket y conversaciones en tiempo real: https://elevenlabs.io/docs/eleven-agents/libraries/web-sockets
- Autenticación de agentes: https://elevenlabs.io/docs/eleven-agents/customization/authentication
- Diseño de voz: https://elevenlabs.io/docs/eleven-creative/voices/voice-design/
