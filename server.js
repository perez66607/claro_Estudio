const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname)));

// Cortafuegos Coste 0 €: Límite global de 1.000 peticiones diarias
let globalDailyCalls = 0;
let currentDay = new Date().toDateString();

app.post('/api/generar-ia', async (req, res) => {
  const today = new Date().toDateString();
  if (today !== currentDay) {
    currentDay = today;
    globalDailyCalls = 0;
  }

  if (globalDailyCalls >= 1000) {
    return res.status(429).json({ error: 'Límite gratuito diario alcanzado. Vuelve mañana.' });
  }

  const { text, method, type } = req.body;
  if (!process.env.GEMINI_API_KEY) {
    return res.status(400).json({ error: 'Falta GEMINI_API_KEY en claro.env' });
  }

  globalDailyCalls++;

  const prompt = type === 'mapa'
    ? `Eres un asistente de estudio experto. Genera ÚNICAMENTE código válido de Mermaid.js que empiece por "graph TD" (sin bloques markdown ni explicaciones adicionales) para crear un mapa conceptual claro aplicando la técnica "${method}" sobre estos apuntes:\n\n${text.slice(0, 7000)}`
    : `Eres un asistente de estudio experto. Haz un resumen estructurado, claro y fácil de memorizar aplicando exactamente la estructura de la técnica de estudio "${method}" sobre estos apuntes:\n\n${text.slice(0, 7000)}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!resultText) throw new Error('Respuesta vacía de Gemini');

    res.json({ result: resultText });
  } catch (error) {
    res.status(500).json({ error: 'Error procesando con la IA gratuita.' });
  }
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Servidor de Claro activo en http://localhost:${PORT}`));
}

module.exports = app;