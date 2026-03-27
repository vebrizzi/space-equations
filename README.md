# 🚀 Equazione Spaziale

Un gioco didattico pixel-art per imparare le equazioni matematiche. La studentessa deve trovare la formula che descrive il corridoio libero tra gli asteroidi: la navicella vola lungo la traiettoria tracciata, sopravvive se rimane nel corridoio, esplode se lo sbaglia.

---

## File del progetto

```
equazione-spaziale/
├── index.html          # Il gioco
├── config.js           # Configurazione livelli (modificabile)
└── config-editor.html  # Editor visuale per config.js
```

---

## Avvio

Il gioco carica `config.js` via `<script src>`, quindi **non funziona aprendo i file con doppio clic**. Serve un server locale:

```bash
# Nella cartella del progetto:
python3 -m http.server 8080
```

Poi apri `http://localhost:8080/index.html` nel browser.

In alternativa: estensione **Live Server** di VS Code.

---

## Come si gioca

1. Scegli nome e colore della nave nella schermata iniziale
2. Seleziona una missione dalla mappa (ogni livello si sblocca completando il precedente)
3. Nel campo **Y =** scrivi l'equazione che pensi descriva il corridoio verde
4. Premi **📡 TRACCIA** per visualizzare la curva sul campo
5. Se la curva sembra corretta, premi **🚀 LANCIA LA NAVE!**
6. La navicella vola da sinistra a destra lungo la traiettoria:
   - rimane nel corridoio → **missione compiuta** 🎉
   - tocca un asteroide o esce dal corridoio → **esplosione** 💥
   - il timer si azzera prima del lancio → **tempo scaduto** ⏰

Il punteggio dipende dal tempo rimanente e dal numero di tentativi sbagliati. I progressi sono salvati in sessione (non persistenti tra ricariche).

### Sintassi equazioni

| Scrittura | Significato |
|-----------|-------------|
| `X` | variabile (maiuscolo o minuscolo) |
| `^` | potenza — `X^2` = X² |
| `2X` | abbreviazione di `2*X` |
| `3(X+1)` | abbreviazione di `3*(X+1)` |
| `sin(X)` `cos(X)` `tan(X)` | funzioni trigonometriche |
| `sqrt(X)` | radice quadrata |
| `abs(X)` | valore assoluto |
| `log(X)` `ln(X)` | logaritmo naturale |
| `PI` `E` | costanti matematiche |
| `3/X` | le singolarità (es. X=0) sono ignorate automaticamente |

**Esempi validi:** `0` · `X + 1` · `0.3*X^2 - 2` · `2*sin(X)` · `3/X` · `(X-2)^2 - 3` · `sin(X)*X + cos(2*X)`

### Suggerimenti in gioco

- **💡 Tipo di equazione** — rivela il nome del concetto matematico (es. *Retta inclinata*, *Parabola*)
- **🔑 Soluzione** — rivela la formula corretta

---

## Configurare i livelli

### Con il Config Editor (consigliato)

Apri `config-editor.html` nello stesso server locale (`http://localhost:8080/config-editor.html`).

L'editor offre:
- **Lista livelli** a sinistra, con drag & drop per riordinare
- **Editor campi** al centro, con validazione equazione in tempo reale
- **Anteprima corridoio** a destra, aggiornata mentre si scrive
- **Importa** un `config.js` esistente · **Esporta** il nuovo file scaricandolo direttamente

Workflow: modifica i livelli → clicca **💾 ESPORTA CONFIG.JS** → sostituisci il file nella cartella → ricarica il gioco.

### A mano

Apri `config.js` con qualsiasi editor di testo. La struttura:

```js
const GAME_CONFIG = {
  title:           "🚀 EQUAZIONE SPAZIALE",
  subtitle:        "▶ TROVA LA TRAIETTORIA GIUSTA!",
  defaultShipName: "AURORA",

  levels: [
    {
      id: 1,
      name: "MISSIONE 01",       // titolo nella griglia missioni
      subtitle: "ROTTA PIATTA",  // nome nella barra di gioco
      desc: "Descrizione...",    // testo nella griglia missioni
      equation: "0",             // equazione corretta (stringa)
      xRange: [-7, 7],           // [xMin, xMax] del corridoio
      corridorHalfW: 1.2,        // metà larghezza corridoio (unità matematiche)
      timeLimit: 90,             // secondi disponibili
      hint: "Retta orizzontale", // mostrato al 1° click su Suggerimento
      solution: "Y = 0\n\nLa retta è piatta." // mostrato al click su Soluzione
    },
    // ... altri livelli
  ]
};
```

**Regole:**
- `equation` deve essere una **stringa** tra virgolette — non una funzione JS
- `xRange`, `corridorHalfW`, `timeLimit` sono numeri (senza virgolette)
- Usa `\n` nella `solution` per andare a capo
- `id` deve essere univoco; l'ordine nell'array determina l'ordine di gioco

### Calibrare la difficoltà

| `corridorHalfW` | Difficoltà |
|-----------------|------------|
| `1.2` o più | ★☆☆☆☆ Facile |
| `1.0` | ★★★☆☆ Medio |
| `0.8` | ★★★★☆ Difficile |
| `0.6` o meno | ★★★★★ Boss |

Un `xRange` più ampio (`[-7, 7]`) dà più tempo per ragionare; uno stretto (`[-3, 3]`) accelera il volo e riduce il margine di correzione.

### Equazioni per nuovi livelli

```
Facile      0  ·  2.5  ·  X  ·  2*X - 1
Medio       X^2  ·  0.3*X^2 - 2  ·  (X-2)^2 - 3  ·  2*sin(X)
Difficile   3/X  ·  sqrt(X) - 1  ·  0.3*X^3 - 1.5*X
Boss        sin(X)*X*0.5 + cos(X*0.7)  ·  sin(2*X)*4/(X^2+1)
```

---

## Risoluzione problemi

| Problema | Soluzione |
|----------|-----------|
| Il gioco non si carica | Stai aprendo il file con doppio clic. Usa `python3 -m http.server 8080` e apri `localhost:8080` |
| "Equazione non valida" | Controlla la sintassi: usa `X` come variabile, `^` per le potenze. Testa in `config-editor.html` per il feedback in tempo reale |
| La navicella esplode subito | La traiettoria entra immediatamente in un asteroide. Guarda il corridoio verde e avvicina l'equazione al suo centro |
| Il corridoio non è visibile | L'equazione produce valori fuori dall'area visibile. Controlla `xRange` e che i valori di Y siano ragionevoli nell'intervallo |
| Il livello non si sblocca | I progressi sono in sessione: si azzerano al ricaricamento della pagina. Completa il livello precedente nella sessione corrente |
| `config.js` non viene letto | Il file deve chiamarsi esattamente `config.js` e trovarsi nella stessa cartella di `index.html` |

---

## Tecnologie

Tutto vanilla — nessuna dipendenza, nessun bundler.

- **`index.html`** — HTML + CSS + Canvas API + JavaScript
- **`config.js`** — file di configurazione JS puro, caricato via `<script src>`
- **`config-editor.html`** — HTML + CSS + Canvas API + JavaScript, standalone

Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (Google Fonts, richiede connessione internet).
