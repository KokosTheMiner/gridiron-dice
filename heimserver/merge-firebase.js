// Übergangs-Abgleich: holt Heizbuch-Einträge, die noch in der alten Version bei Firebase
// gespeichert wurden, auf den Heimserver. Überschreibt nichts, ergänzt nur fehlende Einträge.
// Aufruf: node merge-firebase.js <Haushalts-Code>
"use strict";
const FB = "https://nfl-tippspiel-df32c-default-rtdb.europe-west1.firebasedatabase.app/tippspiel/heizung";
const LOCAL = "http://127.0.0.1/db/tippspiel/heizung";
const haus = process.argv[2];
if (!haus) { console.error("Haushalts-Code fehlt"); process.exit(1); }

(async () => {
  const get = async u => { const r = await fetch(u); if (!r.ok) throw new Error(u.split("/").slice(-2).join("/") + " " + r.status); return (await r.json()) || {}; };
  const fb = await get(`${FB}/${haus}/e.json`);
  const loc = await get(`${LOCAL}/${haus}/e.json`);
  const neu = {};
  for (const [id, ev] of Object.entries(fb)) if (!(id in loc)) neu[id] = ev;
  const n = Object.keys(neu).length;
  if (n) {
    const r = await fetch(`${LOCAL}/${haus}/e.json`, { method: "PATCH", body: JSON.stringify(neu) });
    if (!r.ok) throw new Error("PATCH " + r.status);
  }
  console.log(new Date().toISOString(), `Firebase ${Object.keys(fb).length}, Heimserver ${Object.keys(loc).length}, nachgeholt ${n}`);
})().catch(e => { console.error(new Date().toISOString(), "Fehler:", e.message); process.exit(1); });
