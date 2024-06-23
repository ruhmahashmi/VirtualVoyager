// Background Music Controls
document.getElementById('play-pause').addEventListener('click', function() {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause';
    } else {
        audio.pause();
        this.textContent = 'Play';
    }
});

document.getElementById('stop').addEventListener('click', function() {
    var audio = document.getElementById('bg-music');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('play-pause').textContent = 'Play';
});

// Initialize the map centered on Pakistan
var map = L.map('map').setView([30.3753, 69.3451], 5); // Coordinates of Pakistan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5,
    maxZoom: 18
}).addTo(map);

// Example data for landmarks in Pakistan
var landmarks = [
    {
        name: "Badshahi Mosque",
        location: [31.5889, 74.3100],
        info: "The Badshahi Mosque is a Mughal era mosque in Lahore, Pakistan.",
        image: "bmosque.jpg"
    },
    {
        name: "Minar-e-Pakistan",
        location: [31.5925, 74.3096],
        info: "Minar-e-Pakistan is a national monument located in Lahore, Pakistan.",
        image: "minar.jpeg"
    },
    {
        name: "Quaid-e-Azam's Mausoleum",
        location: [24.8733, 67.0350],
        info: "Mazar-e-Quaid, also known as the Jinnah Mausoleum, is the final resting place of Quaid-e-Azam Muhammad Ali Jinnah.",
        image: "quaid.jpg"
    },
    {
        name: "Faisal Mosque",
        location: [33.7294, 73.0379],
        info: "The Faisal Mosque is the largest mosque in Pakistan, located in the capital city of Islamabad.",
        image: "faisalmosque.jpg"
    },
    {
        name: "Mohenjo-daro",
        location: [27.3294, 68.1389],
        info: "Mohenjo-daro is an archaeological site in the province of Sindh, Pakistan. Built around 2500 BCE, it was one of the largest settlements of the ancient Indus Valley Civilization.",
        image: "md.jpg"
    },
    {
        name: "Shalimar Gardens",
        location: [31.5887, 74.3911],
        info: "The Shalimar Gardens are a Mughal garden complex located in Lahore, Pakistan. They are listed as a UNESCO World Heritage Site.",
        image: "shalimargarden.jpg"
    },
    {
        name: "K2",
        location: [35.8808, 76.5158],
        info: "K2, also known as Mount Godwin-Austen or Chhogori, is the second-highest mountain in the world, located in the Karakoram range in Pakistan.",
        image: 'k2.jpg"
    },
    {
        name: "Rohtas Fort",
        location: [32.9697, 73.5958],
        info: "Rohtas Fort is a historical garrison fort located near the city of Jhelum in Punjab, Pakistan. It was built by the Afghan king Sher Shah Suri.",
        image: "rohtasfort.jpg"
    }
];

// Add markers for landmarks
landmarks.forEach(function(landmark) {
    var marker = L.marker(landmark.location).addTo(map);

    // Add hover-over tooltip
    marker.bindTooltip(landmark.name);

    // Add click event to show more info
    marker.on('click', function() {
        var popupContent = `<h3>${landmark.name}</h3>
                            <p>${landmark.info}</p>
                            <img src="${landmark.image}" alt="${landmark.name}" style="width: 100%; height: auto;">`;
        marker.bindPopup(popupContent).openPopup();
    });
});

// JavaScript for automatic slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex = (slideIndex + 1) % slideCount;
    slides[slideIndex].style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds (5000ms)
}

showSlides(); // Initial call to start the slideshow
