// Example data for Urdu phrases
const urduPhrases = [
    { text: "Hello", translation: "سلام", audio: "salam.mp3" },
    { text: "Thank you", translation: "شکریہ", audio: "shukria.mp3" },
    { text: "How are you?", translation: "آپ کیسے ہیں؟", audio: "apkesehain.mp3" },
    { text: "Goodbye", translation: "الوداع", audio: "alvida.mp3" },
];

// Function to display Urdu phrases
function displayPhrases() {
    const phrasesList = document.getElementById('phrases-list');

    urduPhrases.forEach((phrase, index) => {
        const phraseItem = document.createElement('div');
        phraseItem.classList.add('phrase');
        phraseItem.textContent = `${phrase.text} (${phrase.translation})`;
        phraseItem.addEventListener('click', () => playAudio(index));
        phrasesList.appendChild(phraseItem);
    });
}

// Function to play audio
function playAudio(index) {
    const audio = document.getElementById('audio');
    const source = document.getElementById('audio-source');

    source.src = urduPhrases[index].audio;
    audio.load();
    audio.play();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayPhrases();
});

