/**
 * ═══════════════════════════════════════════════════════════════
 *  EQUAZIONE SPAZIALE — config.js
 *  Modifica questo file per personalizzare il gioco.
 *  NON modificare index.html salvo per cambiare il tema grafico.
 * ═══════════════════════════════════════════════════════════════
 */

const GAME_CONFIG = {

  /* ─────────────────────────────────────────────────────────────
     IMPOSTAZIONI GENERALI
  ───────────────────────────────────────────────────────────── */
  title:           "🚀 EQUAZIONE SPAZIALE",
  subtitle:        "▶ TROVA LA TRAIETTORIA GIUSTA PER ATTRAVERSARE IL CORRIDOIO!",
  defaultShipName: "AURORA",

  /* ─────────────────────────────────────────────────────────────
     LIVELLI
     Puoi aggiungere, rimuovere o modificare qualsiasi livello.
     L'ordine nell'array determina l'ordine di gioco.

     Campi per ogni livello:
     ┌───────────────┬──────────────────────────────────────────────────────────────────┐
     │ id            │ Numero intero unico (1, 2, 3…).                                  │
     │ name          │ Titolo breve nella griglia missioni. Es: "MISSIONE 01"            │
     │ subtitle      │ Nome mostrato in cima al gioco.  Es: "ROTTA PIATTA"              │
     │ desc          │ Descrizione nella griglia missioni.                               │
     │ equation      │ Equazione corretta come STRINGA. Sintassi:                        │
     │               │   Variabile: X (maiuscolo o minuscolo)                            │
     │               │   Operatori: + - * / ^ (potenza)                                  │
     │               │   Funzioni:  sin(X) cos(X) tan(X) sqrt(X) abs(X) log(X) ln(X)   │
     │               │   Costanti:  PI  E                                                │
     │               │   Scorciatoie: 2X = 2*X,  3(X+1) = 3*(X+1)                      │
     │               │   Singolarità (es. 3/X): gestite automaticamente.                 │
     │ xRange        │ [xMin, xMax] — intervallo orizzontale visibile.                   │
     │ corridorHalfW │ Metà larghezza corridoio in unità matematiche.                   │
     │               │   Consigliato: 0.7–1.2  (più basso = più difficile)              │
     │ timeLimit     │ Secondi per completare la missione.                               │
     │ hint          │ Tipo/nome dell'equazione. Mostrato al 1° click su Suggerimento.   │
     │ solution      │ Soluzione completa. Usa \n per andare a capo.                     │
     └───────────────┴──────────────────────────────────────────────────────────────────┘

     ESEMPI RAPIDI:
       "0"                  → retta orizzontale sull'asse X
       "2.5"                → retta orizzontale a quota 2.5
       "X"                  → retta con pendenza 1
       "2*X - 1"            → retta con pendenza 2, intercetta -1
       "X^2"                → parabola semplice
       "0.3*X^2 - 2"        → parabola con vertice in basso
       "(X-2)^2 - 3"        → parabola traslata
       "2*sin(X)"           → sinusoide
       "3/X"                → iperbole (singolarità in X=0 ignorata)
       "sqrt(X)"            → radice quadrata (solo X≥0)
       "0.3*X^3 - 1.5*X"   → cubica
       "sin(X)*X + cos(2*X)"→ funzione composita
  ───────────────────────────────────────────────────────────── */
  levels: [

    {
      id: 1,
      name: "MISSIONE 01",
      subtitle: "ROTTA PIATTA",
      desc: "Vola lungo una retta orizzontale. Il corridoio è dritto come un raggio laser.",
      equation: "0",
      xRange: [-7, 7],
      corridorHalfW: 1.2,
      timeLimit: 90,
      hint: "Retta orizzontale",
      solution: "Y = 0\n\nLa Y rimane sempre 0:\nuna retta perfettamente piatta."
    },

    {
      id: 2,
      name: "MISSIONE 02",
      subtitle: "ROTTA INCLINATA",
      desc: "Il corridoio sale diagonalmente. Segui l'inclinazione!",
      equation: "X",
      xRange: [-6, 6],
      corridorHalfW: 1.1,
      timeLimit: 90,
      hint: "Retta inclinata (pendenza 1)",
      solution: "Y = X\n\nOgni unità a destra, sali di una unità."
    },

    {
      id: 3,
      name: "MISSIONE 03",
      subtitle: "PENDENZA DOPPIA",
      desc: "Salita ripida! La pendenza è doppia e la rotta è spostata.",
      equation: "2*X - 1",
      xRange: [-4, 4],
      corridorHalfW: 1.0,
      timeLimit: 100,
      hint: "Retta con pendenza e intercetta",
      solution: "Y = 2*X - 1\n\nPendenza 2, intercetta -1 sull'asse Y."
    },

    {
      id: 4,
      name: "MISSIONE 04",
      subtitle: "ARCO PARABOLICO",
      desc: "Il corridoio curva! Non è più dritto: segui la parabola.",
      equation: "0.3*X^2 - 2",
      xRange: [-5, 5],
      corridorHalfW: 1.1,
      timeLimit: 110,
      hint: "Parabola",
      solution: "Y = 0.3*X^2 - 2\n\nParabola con vertice in (0, -2)."
    },

    {
      id: 5,
      name: "MISSIONE 05",
      subtitle: "ARCO TRASLATO",
      desc: "L'arco è spostato lateralmente. Il vertice non è più all'origine!",
      equation: "(X-2)^2 - 3",
      xRange: [-2, 6],
      corridorHalfW: 1.1,
      timeLimit: 120,
      hint: "Parabola traslata",
      solution: "Y = (X-2)^2 - 3\n\nVertice in (2, -3)."
    },

    {
      id: 6,
      name: "MISSIONE 06",
      subtitle: "ONDA SINUSOIDALE",
      desc: "Il corridoio ondeggia come un serpente cosmico!",
      equation: "2*sin(X)",
      xRange: [-6, 6],
      corridorHalfW: 1.0,
      timeLimit: 130,
      hint: "Sinusoide",
      solution: "Y = 2*sin(X)\n\nAmpiezza 2, periodo 2π (~6.28)."
    },

    {
      id: 7,
      name: "MISSIONE 07",
      subtitle: "ZONA RISTRETTA",
      desc: "Corridoio stretto! Massima precisione richiesta.",
      equation: "0.5*X^2 - X",
      xRange: [-3, 5],
      corridorHalfW: 0.85,
      timeLimit: 130,
      hint: "Parabola con termine lineare",
      solution: "Y = 0.5*X^2 - X\n\nVertice in (1, -0.5)."
    },

    {
      id: 8,
      name: "MISSIONE 08",
      subtitle: "CAMPO IPERBOLICO",
      desc: "Una forza gravitazionale divide lo spazio in due. Scegli un lato!",
      equation: "3/X",
      xRange: [-6, 6],
      corridorHalfW: 1.0,
      timeLimit: 140,
      hint: "Iperbole",
      solution: "Y = 3/X\n\nPassi dal ramo destro (X positivo)\no sinistro (X negativo).\nX = 0 è una zona proibita!"
    },

    {
      id: 9,
      name: "MISSIONE 09",
      subtitle: "ONDA SMORZATA",
      desc: "Il corridoio pulsa sempre meno. Resta al centro!",
      equation: "sin(2*X) * 4 / (X^2 + 1)",
      xRange: [-5, 5],
      corridorHalfW: 0.9,
      timeLimit: 150,
      hint: "Funzione smorzata",
      solution: "Y = sin(2*X) * 4/(X^2+1)\n\nL'ampiezza si riduce\nallontanandosi dall'origine."
    },

    {
      id: 10,
      name: "MISSIONE 10",
      subtitle: "BOSS: ROTTA IMPOSSIBILE",
      desc: "Solo le navigatrici più abili arrivano in fondo. Buona fortuna!",
      equation: "sin(X)*X*0.5 + cos(X*0.7)",
      xRange: [-5, 5],
      corridorHalfW: 0.85,
      timeLimit: 180,
      hint: "Funzione composita avanzata",
      solution: "Y = X*sin(X)*0.5 + cos(X*0.7)\n\nCombina oscillazione lineare\ncrescente e coseno modulato."
    }

  ]

};
