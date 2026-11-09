import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const agentId = process.env.ELEVENLABS_AGENT_ID;
const apiKey = process.env.ELEVENLABS_API_KEY;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/signed-url", async (_req, res) => {
  if (!agentId || !apiKey) {
    return res.status(500).send("Falta configurar ELEVENLABS_AGENT_ID o ELEVENLABS_API_KEY en el archivo .env.");
  }
  try {
    const upstream = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${encodeURIComponent(agentId)}`,
      { headers: { "xi-api-key": apiKey } }
    );
    const data = await upstream.json();
    if (!upstream.ok) {
      return res.status(upstream.status).send(data.detail?.message || data.message || "ElevenLabs no pudo crear la URL firmada.");
    }
    res.json({ signed_url: data.signed_url });
  } catch (error) {
    console.error(error);
    res.status(502).send("No se pudo contactar con ElevenLabs.");
  }
});

app.listen(port, () => {
  console.log(`Vínculo está disponible en http://localhost:${port}`);
});
