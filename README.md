# Nimmspiel

Das ist ein kleines Testprogramm zum ausprobieren verschiedener Features von Svelte, insbesondere Reaktivität und die Kommunikation zwischen Komponenten. Es ist in Svelte 4 entwickelt, nutzt also nicht den **runes mode**.

## Voraussetzungen

- Node.js (empfohlen: Version 18 oder höher)
- Ein Paketmanager wie npm (wird mit Node.js mitgeliefert)

## Starten des Spiels

Nach dem Klonen des Repositories kann die Svelte-App gestartet werden:

```bash
git clone https://github.com/grubi/nimmspiel.git
cd nimmspiel
npm install
npm run dev
```

Die Anwendung ist dann im Browser unter http://localhost:5173 erreichbar.

## Spielregeln

**Nimmspiel** wird klassischerweise mit Streichhölzern gespielt. Man legt eine gewisse Anzhal von Hölzchen auf den Tisch (z.B. 50). Zwei Spieler düfen abwechselnd Hölzchen vom Haufen nehmen. Dabei muss der Spieler, der am Zug ist, jeweils mindestens ein Hölzchen nehmen (Aussetzen ist also nicht erlaubt), und er darf auch nur eine maximale Anzhal von Hölchen pro Zug nehmen (z.B. 10).

Der Spieler, der gezwungen ist das letzte Hölzchen zu nehmen, hat verloren. Oder anders gesagt: Der Spieler, der es schafft dass für seinen Gegner nur ein einziges Hölzchen übrig bleibt, gewinnt.