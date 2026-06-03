/* =========================================================
   DATI DEL MUSEO
   Struttura:
   - ogni stanza ha: titolo, categoria, descrizione, audioSrc
   - ogni stanza ha un array "hotspots" con opere/oggetti cliccabili
     ogni hotspot ha: id, titolo, categoria, descrizione, audioSrc
   ========================================================= */
const MUSEUM = {
  it: {
    ui: {
      home: "Planimetria",
      back: "Mappa",
      mapHint: "Clicca su una stanza per entrare e ascoltare l'audioguida",
      mainAudio: "Audioguida principale",
      inRoom: "In questa sala",
      audioError: "Audio non disponibile per questa lingua.",
      noDesc: "Descrizione non ancora disponibile.",
      footerText: "Sito web sviluppato dai volontari del",
      footerTrigger: "Servizio Civile",
      footerSection: "— sezione Cultura",
      bubbleLabel: "",
    },
    rooms: {
      guadagnolo_1: {
        title: "Sala Guadagnolo I",
        category: "Piano Terra — Ala Nord",
        desc: "descrizione non ancora disponibile.",
        audioSrc: "audio/it/guadagnolo_1.mp3",
        hotspots: []
      },
      guadagnolo_2: {
        title: "Sala Guadagnolo II",
        category: "Piano Terra — Ala Nord",
        desc: "descrizione non ancora disponibile.",
        audioSrc: "audio/it/guadagnolo_2.mp3",
        hotspots: []
      },
      stanza_dx_4: {
        title: "Esposizione Moncada II",
        category: "Piano Terra — Ala Est",
        desc: "Seconda sezione dell'esposizione dedicata alla famiglia Moncada, potente casata che dominò Caltanissetta per secoli.",
        audioSrc: "audio/it/stanza_dx_4.mp3",
        hotspots: []
      },
      stanza_dx_3: {
        title: "Esposizione Moncada I",
        category: "Piano Terra — Ala Est",
        desc: "In questa stanza troviamo la storia di Palazzo Moncada. Nel 1650 Luigi Guglielmo Moncada, decise di realizzare a Caltanissetta, una residenza nobiliare degna del suo rango. Il progetto fu ideato dall’architetto palermitano Carlo D’aprile, con la supervisione ai lavori del frate cappuccino Fra Pietro da Genova. L’ambizioso piano, prevedeva la demolizione della vecchia casa padronale, per fare spazio a un isolato barocco con pianta quadrangolare con corte centrale, che occupasse un intero isolato urbano. Il palazzo, progettato sul modello di palazzo Farnese (a Roma), doveva avere una facciata monumentale, con una lunga “balconata sostenuta da grandi mensoloni in pietra, i Gattoni, scolpiti con figure antropomorfe e zoomorfe, simbolo di potere e prestigio. Tuttavia, a causa di tensioni politiche e di una cospirazione antispagnola che coinvolse il Moncada e altri intellettuali siciliani, Luigi Guglielmo venne richiamato alla corte di Madrid e allontanato definitivamente dalla Sicilia. I lavori all’inizio rallentarono, ma nel 1662 si interruppero definitivamente, lasciando il palazzo incompiuto: un simbolo tangibile del sogno di potere e indipendenza del principe, mai realizzato. Nel corso dei secoli, il palazzo cambiò spesso destinazione: \n• nel 1778 fu sede di un orfanotrofio. \n• Dopo il 1892 fu sede della Corte d’Appello e del Tribunale di Caltanissetta. \n• Nel 1915, la principessa Giovanna Moncada Beauffremont, acconsentì alla realizzazione di un Cinematografo nella corte del palazzo, ad opera della famiglia Mandalà. Nel 1916, all’edificio fu riconosciuto il vincolo di interesse storico, ma nonostante ciò nel 1975 il palazzo rischiò la demolizione, per far posto al nuovo edificio delle poste. Così, per abbattere il valore artistico dell’edificio, furono rimossi quasi tutti i mensoloni originali lungo il fronte prospicente Salita Matteotti (fatta eccezione per il primo sul lato sinistro e quelli sul fronte sinistro di Largo Barile). Tuttavia il palazzo non fu abbattuto, grazie all’opposizione del Cav. Michele Mandalà, proprietario del cine-teatro presente nell’edificio. Alla fine del XX secolo, i mensoloni rimossi dalle facciate, furono sostituiti con copie e gli originali, trasferiti nelle sale del palazzo Moncada.",
        audioSrc: "audio/it/stanza_dx_3.mp3",
        hotspots: []
      },
      corridoio_nord: {
        title: "Corridoio Nord",
        category: "Percorso di connessione",
        desc: "Il corridoio nord collega le sale dell'ala est con la galleria centrale. Le pareti ospitano una selezione di stampe e incisioni storiche.",
        audioSrc: "audio/it/corridoio_nord.mp3",
        hotspots: []
      },
      stanza_mattonelle_sx: {
        title: "Stanza delle Mattonelle",
        category: "Piano Terra — Ala Ovest",
        desc: "descrizione non ancora disponibile.",
        audioSrc: "audio/it/stanza_mattonelle_sx.mp3",
        hotspots: []
      },
      ghigliottina: {
        title: "Sala della Ghigliottina",
        category: "Piano Terra — Ala Ovest",
        desc: "descrizione non ancora disponibile.",
        audioSrc: "audio/it/ghigliottina.mp3",
        hotspots: []
      },
      lapidarium: {
        title: "Lapidarium",
        category: "Piano Terra — Ala Ovest",
        desc: "In questa stanza troviamo degli elementi architettonici chiamati “mensoloni”. Sebbene il palazzo sia stato realizzato in calcarenite di Sabucina, i mensoloni, come altre parti intagliate, sono stati realizzati in pietra calcarea dalle cave di Gibil Gabib. I mensoloni, in origine, erano 88. 23 di questi si trovano attualmente sulla facciata del Palazzo in via Palazzo di Paternò; 17 sulla facciata prospiciente Largo Barile; 1 su Salita Matteotti; e 15 esposti in queste sale. Essi rappresentano figure antropomorfe e zoomorfe, ispirate alla mitologia classica, elementi mostruosi e fantastici che, però, non puntano a spaventare l’osservatore bensì a suscitare stupore e meraviglia attraverso simboli che annunciano il potere e la ricchezza del Principe e del suo casato. Vi si trovano, infatti, creature di variegati aspetti come divinità, putti, amorini, satiri, sirene e animali fantastici e reali. Nello specifico: vi sono figure alate con tre teste che rappresentano Zefiro, Noto e Borea, i venti figli del dio Astreo che sorreggono una ghirlanda di frutti, simbolo della ricchezza e del prestigio del principe. Compaiono, poi, un ippocampo, una leonessa e un leone; una figura che tiene in mano un serpente, interpretata come Asclepio: difatti il serpente richiama il potere e le ambizioni della famiglia Moncada. Poi una sirena in contrapposizione a un’arpia, un satiro che suona uno strumento simile a una chitarra, un suonatore di mandolino e uno di zampogna.",
        audioSrc: "audio/it/lapidarium.mp3",
        hotspots: []
      },
      galleria: {
        title: "Galleria",
        category: "Piano Terra — Nucleo centrale",
        desc: "La prima è la Galleria dei Principi Moncada, uno spazio celebrativo dedicato alla Dinastia dei Feudatari che, per circa quattro secoli, ha guidato e influenzato la storia della nostra città. L’ epopea dei Moncada in Sicilia, ebbe inizio nel 1320, anno in cui vi giunsero al seguito del re spagnolo Pietro d’Aragona, che concesse loro la Contea di Augusta. Un punto di svolta, avvenne nel 1407, quando il conte Guglielmo Raimondo Moncada, favorì l’unione matrimoniale tra la regina Maria di Sicilia e il re Martino di Spagna che, grazie a queste nozze, divenne re di Sicilia. Come ricompensa per questo fondamentale supporto diplomatico, i Moncada chiesero e ottennero di scambiare la contea di Augusta - allora flagellata dalla peste e dalle incursioni piratesche - con un feudo, più prospero e ben protetto, nell’entroterra siciliano. Così Il 25 giugno 1407, Caltanissetta passò nelle mani del conte Matteo Moncada. Tra i suoi eredi si distinse Antonio Moncada, colui che commissionò la costruzione della chiesa di San Domenico nel cuore del primo centro abitato, scegliendola come luogo di sepoltura e mausoleo dinastico. Successivamente, l’unione tra sua figlia Contissella e il cugino Guglielmo Raimondo di Paternò unificò i due rami della famiglia Moncada. Sebbene inizialmente la gestione dei feudi avvenisse a distanza da Paternò, nel 1516 una rivolta dei notabili locali, costrinse il conte Antonio ad inviare il figlio Francesco I , che, entrando è il primo raffigurato alla vostra sinistra, a Caltanissetta per risiedervi stabilmente. Qui, egli visse per alcuni anni al Castello di Pietrarossa. Ma, in seguito, fece costruire un nuovo palazzo, nella zona nord dell’antico borgo. (l’attuale quartiere Angeli). Francesco I trasformò la sua dimora in una vera corte rinascimentale, frequentata da artisti, pittori, poeti e musicisti. Per i suoi meriti militari nella difesa del Val di Mazara, contro i Saraceni, Francesco I ricevette dal Re di Spagna il titolo di Principe di Paternò. Alla sua morte, avvenuta nel 1566, il potere passò nelle mani del figlio Cesare, che trovate raffigurato subito dopo Francesco. Egli sposò Aloisia de Luna e Vega raffigurata nella seconda stanza a Destra. il Principe Cesare morì precocemente e Donna Luisa assunse il ruolo di “Tutrice” del figlio Francesco II e di “Governatrice degli Stati Feudali“. Al giovane Francesco II, raffigurato dopo Cesare , la madre, garantì una formazione incentrata sullo studio della cultura classica, delle scienze e delle arti e, un’educazione aristocratica degna di un Principe rinascimentale.Grazie ai successivi matrimoni combinati, come quello tra Francesco II e Maria d’Aragona, le fortune e i possedimenti dei Moncada crebbero enormemente. La coppia ebbe cinque figli ma, nel 1592 a soli 23 anni, Francesco morì e gli succedette il figlio Antonio, raffigurato dopo Francesco II, in seguito padre di Luigi Guglielmo Moncada, duca di Montalto e principe di Paternò, fautore della costruzione del magnifico palazzo che ci ospita. Luigi Guglielmo Moncada, nacque a Collesano nel 1614 e, per molti anni, ricoprì cariche politiche di altissimo prestigio. Fu Presidente del Regno di Sicilia, Viceré di Sardegna e di Valencia ed, in fine, Cardinale laico. L’immagine, entrando a destra troviamo Lo Scudo araldico che è circondato dal Collare dell’Ordine del Toson d’Oro, uno dei più prestigiosi ordini cavallereschi d’Europa e quindi una altissima onorificenza, riservata ai sovrani e ai grandi aristocratici, che si erano distinti per Fedeltà, Valore Militare e Servizio alla Monarchia di Spagna e che sottolinea il prestigio internazionale della casata Moncada. Di questo titolo era stato insignito Antonio Moncada, padre di Luigi, su mandato del re Filippo III di Spagna. Nella parte alta dello stemma araldico, troviamo la Corona Principesca in rappresentanza del titolo di Principi del Sacro Romano Impero e del Regno di Sicilia. Il Blasone fu voluto nel 1657 da Luigi Guglielmo Moncada e include i simboli che rappresentano: *i Moncada di Sicilia; *la discendenza e i legami con la Casa Reale d’Aragona; *l’antica origine nobiliare legata ai Duchi di Baviera.",
        audioSrc: "audio/it/corridoio_centrale.mp3",
        hotspots: []
      },
      bookshop: {
        title: "Bookshop",
        category: "Servizi del museo",
        desc: "Il bookshop del museo offre cataloghi delle collezioni, guide, pubblicazioni scientifiche e una selezione di oggetti di design ispirati alle opere esposte.",
        audioSrc: "audio/it/bookshop.mp3",
        hotspots: []
      },
      ingresso: {
        title: "Ingresso",
        category: "Accoglienza",
        desc: "Benvenuti nella nuova area espositiva di Palazzo Moncada, che ospita la Mostra permanente dedicata al “Lapidarium di Luigi Guglielmo Moncada”, una sezione illustrativa sulle “Città Moncadiane”, e una sulla storia delle principali “Emergenze Architettoniche”, commissionate dalla nobile famiglia, nella città di Caltanissetta tra il Cinquecento e il Seicento.",
        audioSrc: "audio/it/benvenuti.mp3",
        hotspots: []
      }
    }
  },

  en: {
    ui: {
      home: "Floor Plan",
      back: "Map",
      mapHint: "Click on a room to enter and listen to the audio guide",
      mainAudio: "Main audio guide",
      inRoom: "In this room",
      audioError: "Audio not available for this language.",
      noDesc: "Description not yet available.",
      footerText: "Website developed by volunteers of the",
footerTrigger: "Civil Service",
footerSection: "— Culture section",
bubbleLabel: "",
    },
    rooms: {
      guadagnolo_1: {
        title: "Guadagnolo Hall I",
        category: "Ground Floor — North Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/guadagnolo_1.mp3",
        hotspots: []
      },
      guadagnolo_2: {
        title: "Guadagnolo Hall II",
        category: "Ground Floor — North Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/guadagnolo_2.mp3",
        hotspots: []
      },
      stanza_dx_4: {
        title: "Moncada Exhibition II",
        category: "Ground Floor — East Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/stanza_dx_4.mp3",
        hotspots: []
      },
      stanza_dx_3: {
        title: "Moncada Exhibition I",
        category: "Ground Floor — East Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/stanza_dx_3.mp3",
        hotspots: []
      },
      corridoio_nord: {
        title: "North Corridor",
        category: "Connecting passage",
        desc: "Description not yet available.",
        audioSrc: "audio/en/corridoio_nord.mp3",
        hotspots: []
      },
      stanza_mattonelle_sx: {
        title: "Tile Room",
        category: "Ground Floor — West Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/stanza_mattonelle_sx.mp3",
        hotspots: []
      },
      ghigliottina: {
        title: "Guillotine Room",
        category: "Ground Floor — West Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/ghigliottina.mp3",
        hotspots: []
      },
      lapidarium: {
        title: "Lapidarium",
        category: "Ground Floor — West Wing",
        desc: "Description not yet available.",
        audioSrc: "audio/en/lapidarium.mp3",
        hotspots: []
      },
      galleria: {
        title: "Permanent Gallery",
        category: "Ground Floor — Central Core",
        desc: "Description not yet available.",
        audioSrc: "audio/en/galleria.mp3",
        hotspots: []
      },
      bookshop: {
        title: "Bookshop",
        category: "Museum services",
        desc: "Description not yet available.",
        audioSrc: "audio/en/bookshop.mp3",
        hotspots: []
      },
      ingresso: {
        title: "Entrance",
        category: "Welcome",
        desc: "Description not yet available.",
        audioSrc: "audio/en/ingresso.mp3",
        hotspots: []
      }
    }
  }
};

/* =========================================================
   STATO APP
   ========================================================= */
let currentLang = 'it';
let currentRoomId = null;

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
  // Keyboard support per le stanze SVG
  document.querySelectorAll('.room').forEach(el => {
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const onclick = el.getAttribute('onclick');
        if (onclick) eval(onclick);
      }
    });
  });
});

/* =========================================================
   LINGUA
   ========================================================= */
function setLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `btn-${lang}`);
  });
  applyI18n();
  if (currentRoomId) {
    renderRoom(currentRoomId);
  }
}

function applyI18n() {
  const ui = MUSEUM[currentLang].ui;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (ui[key]) el.textContent = ui[key];
  });
}

/* =========================================================
   NAVIGAZIONE
   ========================================================= */
function enterRoom(roomId) {
  const roomData = MUSEUM[currentLang].rooms[roomId];
  if (!roomData) return;

  currentRoomId = roomId;

  // Aggiorna mappa: stanza attiva
  document.querySelectorAll('.room').forEach(r => r.classList.remove('room-active'));
  // Evidenzia tutte le shape corrispondenti (galeria = 3 elementi)
  const targets = document.querySelectorAll(`[onclick*="'${roomId}'"]`);
  targets.forEach(t => t.classList.add('room-active'));

  renderRoom(roomId);
  showView('view-room');
  updateBreadcrumb(roomData.title);
  closeHotspot();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  currentRoomId = null;
  document.querySelectorAll('.room').forEach(r => r.classList.remove('room-active'));
  showView('view-map');
  document.getElementById('nav-sep').style.display = 'none';
  document.getElementById('nav-room').style.display = 'none';
  closeHotspot();
}

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function updateBreadcrumb(title) {
  const sep = document.getElementById('nav-sep');
  const room = document.getElementById('nav-room');
  sep.style.display = 'inline';
  room.style.display = 'inline';
  room.textContent = title;
}

/* =========================================================
   RENDER STANZA
   ========================================================= */
function renderRoom(roomId) {
  const room = MUSEUM[currentLang].rooms[roomId];
  if (!room) return;

  document.getElementById('room-category').textContent = room.category;
  document.getElementById('room-title-h2').textContent = room.title;
  document.getElementById('room-desc-text').textContent = room.desc || MUSEUM[currentLang].ui.noDesc;

  // Audio principale
  const mainBlock = document.getElementById('main-audio-block');
  const mainSrc = document.getElementById('main-audio-src');
  const mainPlayer = document.getElementById('main-audio-player');
  if (room.audioSrc) {
    mainBlock.classList.remove('hidden');
    mainSrc.src = room.audioSrc;
    mainPlayer.load();
  } else {
    mainBlock.classList.add('hidden');
  }

  // Hotspot
  const section = document.getElementById('hotspot-section');
  const grid = document.getElementById('hotspot-grid');
  grid.innerHTML = '';

  if (room.hotspots && room.hotspots.length > 0) {
    section.classList.remove('hidden');
    room.hotspots.forEach(hs => {
      const card = document.createElement('button');
      card.className = 'hotspot-card';
      card.setAttribute('aria-label', hs.title);
      card.innerHTML = `
        <div class="hs-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        </div>
        <div class="hs-text">
          <span class="hs-cat">${hs.category}</span>
          <span class="hs-name">${hs.title}</span>
        </div>
        <svg class="hs-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      `;
      card.addEventListener('click', () => openHotspot(roomId, hs.id));
      grid.appendChild(card);
    });
  } else {
    section.classList.add('hidden');
  }
}

/* =========================================================
   HOTSPOT PANEL
   ========================================================= */
function openHotspot(roomId, hotspotId) {
  const room = MUSEUM[currentLang].rooms[roomId];
  if (!room) return;
  const hs = room.hotspots.find(h => h.id === hotspotId);
  if (!hs) return;

  // Evidenzia card attiva
  document.querySelectorAll('.hotspot-card').forEach(c => c.classList.remove('hs-active'));
  const activeCard = [...document.querySelectorAll('.hotspot-card')]
    .find(c => c.getAttribute('aria-label') === hs.title);
  if (activeCard) activeCard.classList.add('hs-active');

  document.getElementById('hp-category').textContent = hs.category;
  document.getElementById('hp-title').textContent = hs.title;
  document.getElementById('hp-desc').textContent = hs.desc;

  const hpSrc = document.getElementById('hp-audio-src');
  const hpPlayer = document.getElementById('hp-audio-player');
  const hpError = document.getElementById('hp-audio-error');
  const hpWrap = document.querySelector('.hp-audio-wrap');

  if (hs.audioSrc) {
    hpSrc.src = hs.audioSrc;
    hpPlayer.load();
    hpWrap.classList.remove('hidden');
    hpError.classList.add('hidden');
  } else {
    hpWrap.classList.add('hidden');
    hpError.classList.remove('hidden');
  }

  const panel = document.getElementById('hotspot-panel');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
}

function closeHotspot() {
  const panel = document.getElementById('hotspot-panel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.querySelectorAll('.hotspot-card').forEach(c => c.classList.remove('hs-active'));
  // Ferma audio hotspot
  const hpPlayer = document.getElementById('hp-audio-player');
  if (hpPlayer) hpPlayer.pause();
}

/* =========================================================
   FOOTER — tooltip Servizio Civile (tap su mobile)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('sc-trigger');
  if (!trigger) return;
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    trigger.classList.toggle('active');
  });
  document.addEventListener('click', () => {
    trigger.classList.remove('active');
  });
});