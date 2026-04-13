let currentAudio = null;

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.mappa-container');

    container.addEventListener('click', function(e) {

        const target = e.target.closest('[id]'); 
        if (!target) return;

        const stanzaId = target.id;
        console.log("Stanza attiva:", stanzaId);
        
        const displayInfo = document.getElementById('info-stanza');
        displayInfo.innerText = "Stai ascoltando: " + (descrizioni[stanzaId] || "Stanza non identificata");

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        currentAudio = new Audio(`audio/${stanzaId}.mp3`);
        currentAudio.play();

        document.querySelectorAll('.mappa-container [id]').forEach(el => {
            el.classList.remove('stanza-attiva');
        });

        target.classList.add('stanza-attiva');

        currentAudio.onended = function() {
            target.classList.remove('stanza-attiva');
        };
    });
});


const descrizioni = {
    "bookshop": "xxx",
    "sala_1_corridoio": "xxx",
    "sala_2_mensoloni": "I Gattoni",
};

// Nel clic:
displayInfo.innerText = descrizioni[stanzaId] || "Stanza non identificata";