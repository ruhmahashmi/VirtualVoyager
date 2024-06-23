
const facts = [
    "Did you know? Japan has over 6,800 islands.",
    "In Iceland, books are exchanged as Christmas Eve presents, then you spend the rest of the night reading them and eating chocolate.",
    "The national animal of Scotland is the unicorn.",
    "India is the world's largest democracy, with over 1.3 billion people.",
    "Mexico City is built on top of an ancient Aztec city, Tenochtitlan.",
    "France produces over 400 types of cheese."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById('fact');
    factElement.textContent = facts[randomIndex];
}


document.getElementById('nextFact').addEventListener('click', displayRandomFact);

displayRandomFact();
