
function evento() {
  const stanza = event.currentTarget;
  const stanzaId = stanza.getAttribute('data-name');
  
  // 1. Gestione estetica della mappa
  // Rimuovi la classe 'attiva' da tutte le stanze
  document.querySelectorAll('.stanza').forEach(s => s.classList.remove('attiva'));
  // Aggiungila a quella appena cliccata
  stanza.classList.add('attiva');

  // 2. Aggiornamento interfaccia audio
  const titolo = document.getElementById('titolo-stanza');
  const wrapper = document.getElementById('player-wrapper');

  // Formatta il nome (es. da 'stanza_1' a 'Stanza 1')
  const nomePulito = stanzaId.replace(/_/g, ' ');
  titolo.innerText = nomePulito;

  // 3. Inserimento player
  wrapper.innerHTML = `
    <audio controls autoplay>
      <source src="audio/${stanzaId}.mp3" type="audio/mpeg">
    </audio>
  `;
}