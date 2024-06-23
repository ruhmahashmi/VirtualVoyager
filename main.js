// main.js

// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Centered at [latitude, longitude], zoom level 2

// Add OpenStreetMap tile layer as base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define countries with their coordinates and URLs
const countries = [
    { name: 'United States', coords: [37.0902, -95.7129], url: 'countries/usa.html' },
    { name: 'Canada', coords: [56.1304, -106.3468], url: 'countries/canada.html' },
    { name: 'Brazil', coords: [-14.235, -51.9253], url: 'countries/Brazil.html' },
    { name: 'United Kingdom', coords: [55.3781, -3.4360], url: 'countries/uk.html' },
    { name: 'Germany', coords: [51.1657, 10.4515], url: 'countries/germany.html' },
    { name: 'France', coords: [46.6034, 1.8883], url: 'countries/France.html' },
    { name: 'India', coords: [20.5937, 78.9629], url: 'countries/india.html' },
    { name: 'China', coords: [35.8617, 104.1954], url: 'countries/china.html' },
    { name: 'Australia', coords: [-25.2744, 133.7751], url: 'countries/australia.html   ' },
    { name: 'Japan', coords: [36.2048, 138.2529], url: 'https://en.wikipedia.org/wiki/Japan' },
    { name: 'Russia', coords: [61.5240, 105.3188], url: 'countries/Russia.html' },
    { name: 'South Africa', coords: [-30.5595, 22.9375], url: 'https://en.wikipedia.org/wiki/South_Africa' },
    { name: 'Mexico', coords: [23.6345, -102.5528], url: 'https://en.wikipedia.org/wiki/Mexico' },
    { name: 'Argentina', coords: [-38.4161, -63.6167], url: 'https://en.wikipedia.org/wiki/Argentina' },
    { name: 'Italy', coords: [41.8719, 12.5674], url: 'https://en.wikipedia.org/wiki/Italy' },
    { name: 'Spain', coords: [40.4637, -3.7492], url: 'https://en.wikipedia.org/wiki/Spain' },
    { name: 'Egypt', coords: [26.8206, 30.8025], url: 'https://en.wikipedia.org/wiki/Egypt' },
    { name: 'Saudi Arabia', coords: [23.8859, 45.0792], url: 'https://en.wikipedia.org/wiki/Saudi_Arabia' },
    { name: 'Nigeria', coords: [9.0820, 8.6753], url: 'https://en.wikipedia.org/wiki/Nigeria' },
    { name: 'Kenya', coords: [-0.0236, 37.9062], url: 'https://en.wikipedia.org/wiki/Kenya' },
    { name: 'Afghanistan', coords: [33.93911, 67.709953], url: 'https://en.wikipedia.org/wiki/Afghanistan' },
    { name: 'Albania', coords: [41.1533, 20.1683], url: 'https://en.wikipedia.org/wiki/Albania' },
    { name: 'Algeria', coords: [28.0339, 1.6596], url: 'https://en.wikipedia.org/wiki/Algeria' },
    { name: 'Andorra', coords: [42.5063, 1.5218], url: 'https://en.wikipedia.org/wiki/Andorra' },
    { name: 'Angola', coords: [-11.2027, 17.8739], url: 'https://en.wikipedia.org/wiki/Angola' },
    { name: 'Antigua and Barbuda', coords: [17.0608, -61.7964], url: 'https://en.wikipedia.org/wiki/Antigua_and_Barbuda' },
    { name: 'Armenia', coords: [40.0691, 45.0382], url: 'https://en.wikipedia.org/wiki/Armenia' },
    { name: 'Austria', coords: [47.5162, 14.5501], url: 'https://en.wikipedia.org/wiki/Austria' },
    { name: 'Azerbaijan', coords: [40.1431, 47.5769], url: 'https://en.wikipedia.org/wiki/Azerbaijan' },
    { name: 'Bahamas', coords: [25.0343, -77.3963], url: 'https://en.wikipedia.org/wiki/The_Bahamas' },
    { name: 'Bahrain', coords: [25.9304, 50.6378], url: 'https://en.wikipedia.org/wiki/Bahrain' },
    { name: 'Bangladesh', coords: [23.685, 90.3563], url: 'https://en.wikipedia.org/wiki/Bangladesh' },
    { name: 'Barbados', coords: [13.1939, -59.5432], url: 'https://en.wikipedia.org/wiki/Barbados' },
    { name: 'Belarus', coords: [53.7098, 27.9534], url: 'https://en.wikipedia.org/wiki/Belarus' },
    { name: 'Belgium', coords: [50.5039, 4.4699], url: 'https://en.wikipedia.org/wiki/Belgium' },
    { name: 'Belize', coords: [17.1899, -88.4976], url: 'https://en.wikipedia.org/wiki/Belize' },
    { name: 'Benin', coords: [9.3077, 2.3158], url: 'https://en.wikipedia.org/wiki/Benin' },
    { name: 'Bhutan', coords: [27.5142, 90.4336], url: 'https://en.wikipedia.org/wiki/Bhutan' },
    { name: 'Bolivia', coords: [-16.2902, -63.5887], url: 'https://en.wikipedia.org/wiki/Bolivia' },
    { name: 'Bosnia and Herzegovina', coords: [43.9159, 17.6791], url: 'https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina' },
    { name: 'Botswana', coords: [-22.3285, 24.6849], url: 'https://en.wikipedia.org/wiki/Botswana' },
    { name: 'Brunei', coords: [4.5353, 114.7277], url: 'https://en.wikipedia.org/wiki/Brunei' },
    { name: 'Bulgaria', coords: [42.7339, 25.4858], url: 'https://en.wikipedia.org/wiki/Bulgaria' },
    { name: 'Burkina Faso', coords: [12.2383, -1.5616], url: 'https://en.wikipedia.org/wiki/Burkina_Faso' },
    { name: 'Burundi', coords: [-3.3731, 29.9189], url: 'https://en.wikipedia.org/wiki/Burundi' },
    { name: 'Cabo Verde', coords: [16.5388, -23.0418], url: 'https://en.wikipedia.org/wiki/Cape_Verde' },
    { name: 'Cambodia', coords: [12.5657, 104.991], url: 'https://en.wikipedia.org/wiki/Cambodia' },
    { name: 'Cameroon', coords: [7.3697, 12.3547], url: 'https://en.wikipedia.org/wiki/Cameroon' },
    { name: 'Central African Republic', coords: [6.6111, 20.9394], url: 'https://en.wikipedia.org/wiki/Central_African_Republic' },
    { name: 'Chad', coords: [15.4542, 18.7322], url: 'https://en.wikipedia.org/wiki/Chad' },
    { name: 'Chile', coords: [-35.6751, -71.543], url: 'https://en.wikipedia.org/wiki/Chile' },
    { name: 'Colombia', coords: [4.5709, -74.2973], url: 'https://en.wikipedia.org/wiki/Colombia' },
    { name: 'Comoros', coords: [-11.6455, 43.3333], url: 'https://en.wikipedia.org/wiki/Comoros' },
    { name: 'Congo', coords: [-0.228, 15.8277], url: 'https://en.wikipedia.org/wiki/Republic_of_the_Congo' },
    { name: 'Costa Rica', coords: [9.7489, -83.7534], url: 'https://en.wikipedia.org/wiki/Costa_Rica' },
    { name: 'Pakistan', coords: [30.3753, 69.3451], url: 'countries/pakistan.html' },
    { name: 'Panama', coords: [8.5379, -80.7821], url: 'https://en.wikipedia.org/wiki/Panama' },
    { name: 'Papua New Guinea', coords: [-6.314993, 143.95555], url: 'https://en.wikipedia.org/wiki/Papua_New_Guinea' },
    { name: 'Paraguay', coords: [-23.4425, -58.4438], url: 'https://en.wikipedia.org/wiki/Paraguay' },
    { name: 'Peru', coords: [-9.1900, -75.0152], url: 'https://en.wikipedia.org/wiki/Peru' },
    { name: 'Philippines', coords: [12.8797, 121.7740], url: 'https://en.wikipedia.org/wiki/Philippines' },
    { name: 'Poland', coords: [51.9194, 19.1451], url: 'https://en.wikipedia.org/wiki/Poland' },
    { name: 'Portugal', coords: [39.3999, -8.2245], url: 'https://en.wikipedia.org/wiki/Portugal' },
    { name: 'Qatar', coords: [25.3548, 51.1839], url: 'https://en.wikipedia.org/wiki/Qatar' },
    { name: 'Romania', coords: [45.9432, 24.9668], url: 'https://en.wikipedia.org/wiki/Romania' },
    { name: 'Rwanda', coords: [-1.9403, 29.8739], url: 'https://en.wikipedia.org/wiki/Rwanda' },
    { name: 'Saint Kitts and Nevis', coords: [17.357822, -62.782998], url: 'https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis' },
    { name: 'Saint Lucia', coords: [13.9094, -60.9789], url: 'https://en.wikipedia.org/wiki/Saint_Lucia' },
    { name: 'Saint Vincent and the Grenadines', coords: [13.252817, -61.197596], url: 'https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines' },
    { name: 'Samoa', coords: [-13.7590, -172.1046], url: 'https://en.wikipedia.org/wiki/Samoa' },
    { name: 'San Marino', coords: [43.9424, 12.4578], url: 'https://en.wikipedia.org/wiki/San_Marino' },
    { name: 'Sao Tome and Principe', coords: [0.1864, 6.6131], url: 'https://en.wikipedia.org/wiki/Sao_Tome_and_Principe' },
    { name: 'Senegal', coords: [14.4974, -14.4524], url: 'https://en.wikipedia.org/wiki/Senegal' },
    { name: 'Serbia', coords: [44.0165, 21.0059], url: 'https://en.wikipedia.org/wiki/Serbia' },
    { name: 'Seychelles', coords: [-4.6796, 55.4919], url: 'https://en.wikipedia.org/wiki/Seychelles' },
    { name: 'Sierra Leone', coords: [8.4606, -11.7799], url: 'https://en.wikipedia.org/wiki/Sierra_Leone' },
    { name: 'Singapore', coords: [1.3521, 103.8198], url: 'https://en.wikipedia.org/wiki/Singapore' },
    { name: 'Slovakia', coords: [48.6690, 19.6990], url: 'https://en.wikipedia.org/wiki/Slovakia' },
    { name: 'Slovenia', coords: [46.1512, 14.9955], url: 'https://en.wikipedia.org/wiki/Slovenia' },
    { name: 'Solomon Islands', coords: [-9.6457, 160.1562], url: 'https://en.wikipedia.org/wiki/Solomon_Islands' },
    { name: 'Somalia', coords: [5.1521, 46.1996], url: 'https://en.wikipedia.org/wiki/Somalia' },
    { name: 'South Korea', coords: [35.9078, 127.7669], url: 'https://en.wikipedia.org/wiki/South_Korea' },
    { name: 'South Sudan', coords: [6.8769, 31.3069], url: 'https://en.wikipedia.org/wiki/South_Sudan' },
    { name: 'Sri Lanka', coords: [7.8731, 80.7718], url: 'https://en.wikipedia.org/wiki/Sri_Lanka' },
    { name: 'Sudan', coords: [12.8628, 30.2176], url: 'https://en.wikipedia.org/wiki/Sudan' },
    { name: 'Suriname', coords: [3.9193, -56.0278], url: 'https://en.wikipedia.org/wiki/Suriname' },
    { name: 'Sweden', coords: [60.1282, 18.6435], url: 'https://en.wikipedia.org/wiki/Sweden' },
    { name: 'Switzerland', coords: [46.8182, 8.2275], url: 'https://en.wikipedia.org/wiki/Switzerland' },
    { name: 'Syria', coords: [34.8021, 38.9968], url: 'https://en.wikipedia.org/wiki/Syria' },
    { name: 'Tajikistan', coords: [38.8610, 71.2761], url: 'https://en.wikipedia.org/wiki/Tajikistan' },
    { name: 'Tanzania', coords: [-6.3690, 34.8888], url: 'https://en.wikipedia.org/wiki/Tanzania' },
    { name: 'Thailand', coords: [15.8700, 100.9925], url: 'https://en.wikipedia.org/wiki/Thailand' },
    { name: 'Timor-Leste', coords: [-8.8742, 125.7275], url: 'https://en.wikipedia.org/wiki/Timor-Leste' },
    { name: 'Togo', coords: [8.6195, 0.8248], url: 'https://en.wikipedia.org/wiki/Togo' },
    { name: 'Tonga', coords: [-21.1784, -175.1982], url: 'https://en.wikipedia.org/wiki/Tonga' },
    { name: 'Trinidad and Tobago', coords: [10.6918, -61.2225], url: 'https://en.wikipedia.org/wiki/Trinidad_and_Tobago' },
    { name: 'Tunisia', coords: [33.8869, 9.5375], url: 'https://en.wikipedia.org/wiki/Tunisia' },
    { name: 'Turkey', coords: [38.9637, 35.2433], url: 'https://en.wikipedia.org/wiki/Turkey' },
    { name: 'Turkmenistan', coords: [38.9697, 59.5563], url: 'https://en.wikipedia.org/wiki/Turkmenistan' },
    { name: 'Tuvalu', coords: [-7.1095, 177.6493], url: 'https://en.wikipedia.org/wiki/Tuvalu' },
    { name: 'Uganda', coords: [1.3733, 32.2903], url: 'https://en.wikipedia.org/wiki/Uganda' },
    { name: 'Ukraine', coords: [48.3794, 31.1656], url: 'https://en.wikipedia.org/wiki/Ukraine' },
    { name: 'United Arab Emirates', coords: [23.4241, 53.8478], url: 'https://en.wikipedia.org/wiki/United_Arab_Emirates' },
    { name: 'Uruguay', coords: [-32.5228, -55.7658], url: 'https://en.wikipedia.org/wiki/Uruguay' },
    { name: 'Uzbekistan', coords: [41.3775, 64.5853], url: 'https://en.wikipedia.org/wiki/Uzbekistan' },
    { name: 'Vanuatu', coords: [-15.3767, 166.9592], url: 'https://en.wikipedia.org/wiki/Vanuatu' },
    { name: 'Vatican City', coords: [41.9029, 12.4534], url: 'https://en.wikipedia.org/wiki/Vatican_City' },
    { name: 'Venezuela', coords: [6.4238, -66.5897], url: 'https://en.wikipedia.org/wiki/Venezuela' },
    { name: 'Vietnam', coords: [14.0583, 108.2772], url: 'https://en.wikipedia.org/wiki/Vietnam' },
    { name: 'Yemen', coords: [15.5527, 48.5164], url: 'https://en.wikipedia.org/wiki/Yemen' },
    { name: 'Zambia', coords: [-13.1339, 27.8493], url: 'https://en.wikipedia.org/wiki/Zambia' },
    { name: 'Zimbabwe', coords: [-19.0154, 29.1549], url: 'https://en.wikipedia.org/wiki/Zimbabwe' },
    { name: 'North Korea', coords: [40.3399, 127.5101], url: 'https://en.wikipedia.org/wiki/North_Korea' },
    { name: 'Ireland', coords: [53.1424, -7.6921], url: 'https://en.wikipedia.org/wiki/Ireland' },
    { name: 'Norway', coords: [60.472, 8.4689], url: 'https://en.wikipedia.org/wiki/Norway' },
    { name: 'Finland', coords: [61.9241, 25.7482], url: 'https://en.wikipedia.org/wiki/Finland' },
    { name: 'Denmark', coords: [56.2639, 9.5018], url: 'https://en.wikipedia.org/wiki/Denmark' },
    { name: 'Croatia', coords: [45.1, 15.2], url: 'https://en.wikipedia.org/wiki/Croatia' },
    { name: 'Hungary', coords: [47.1625, 19.5033], url: 'https://en.wikipedia.org/wiki/Hungary' },
    { name: 'Greece', coords: [39.0742, 21.8243], url: 'https://en.wikipedia.org/wiki/Greece' },
    { name: 'Czech Republic', coords: [49.8175, 15.473], url: 'https://en.wikipedia.org/wiki/Czech_Republic' },
    { name: 'Netherlands', coords: [52.1326, 5.2913], url: 'https://en.wikipedia.org/wiki/Netherlands' },
    { name: 'Swaziland', coords: [-26.5225, 31.4659], url: 'https://en.wikipedia.org/wiki/Eswatini' },
    { name: 'Kuwait', coords: [29.3759, 47.9774], url: 'https://en.wikipedia.org/wiki/Kuwait' },
    { name: 'Indonesia', coords: [-0.7893, 113.9213], url: 'https://en.wikipedia.org/wiki/Indonesia' },
    { name: 'Singapore', coords: [1.3521, 103.8198], url: 'https://en.wikipedia.org/wiki/Singapore' },
    { name: 'Malaysia', coords: [4.2105, 101.9758], url: 'https://en.wikipedia.org/wiki/Malaysia' },
    { name: 'Mongolia', coords: [46.8625, 103.8467], url: 'https://en.wikipedia.org/wiki/Mongolia' },
    { name: 'Nepal', coords: [28.3949, 84.124], url: 'https://en.wikipedia.org/wiki/Nepal' },
    { name: 'Sri Lanka', coords: [7.8731, 80.7718], url: 'https://en.wikipedia.org/wiki/Sri_Lanka' },
    { name: 'Myanmar', coords: [21.9162, 95.956], url: 'https://en.wikipedia.org/wiki/Myanmar' },
    { name: 'Laos', coords: [19.8563, 102.4955], url: 'https://en.wikipedia.org/wiki/Laos' },
    { name: 'Kyrgyzstan', coords: [41.2044, 74.7661], url: 'https://en.wikipedia.org/wiki/Kyrgyzstan' },
    { name: 'Kazakhstan', coords: [48.0196, 66.9237], url: 'https://en.wikipedia.org/wiki/Kazakhstan' },
    { name: 'Jordan', coords: [30.5852, 36.2384], url: 'https://en.wikipedia.org/wiki/Jordan' },
    { name: 'Iraq', coords: [33.2232, 43.6793], url: 'https://en.wikipedia.org/wiki/Iraq' },
    { name: 'Iran', coords: [32.4279, 53.688], url: 'https://en.wikipedia.org/wiki/Iran' },
    { name: 'Palestine', coords: [31.0461, 34.8516], url: 'https://en.wikipedia.org/wiki/Israel' },
    { name: 'Lebanon', coords: [33.8547, 35.8623], url: 'https://en.wikipedia.org/wiki/Lebanon' },
    { name: 'Oman', coords: [21.4735, 55.9754], url: 'https://en.wikipedia.org/wiki/Oman' },
    { name: 'Palestine', coords: [31.9522, 35.2332], url: 'https://en.wikipedia.org/wiki/State_of_Palestine' },
    { name: 'Syria', coords: [34.8021, 38.9968], url: 'https://en.wikipedia.org/wiki/Syria' },
    { name: 'Taiwan', coords: [23.6978, 120.9605], url: 'https://en.wikipedia.org/wiki/Taiwan' },
    { name: 'United Arab Emirates', coords: [23.4241, 53.8478], url: 'https://en.wikipedia.org/wiki/United_Arab_Emirates' },
    { name: 'Vietnam', coords: [14.0583, 108.2772], url: 'https://en.wikipedia.org/wiki/Vietnam' },
    { name: 'Yemen', coords: [15.5527, 48.5164], url: 'https://en.wikipedia.org/wiki/Yemen' },
    { name: 'Zambia', coords: [-13.1339, 27.8493], url: 'https://en.wikipedia.org/wiki/Zambia' },
    { name: 'Zimbabwe', coords: [-19.0154, 29.1549], url: 'https://en.wikipedia.org/wiki/Zimbabwe' }
    // Add more countries as needed
];


// Add a draggable marker with popup to the map
const marker = L.marker([0, 0], { draggable: true }).addTo(map);

// Function to update marker coordinates and popup content
function updateMarker(latlng) {
    marker.setLatLng(latlng);
    const nearestCountry = findNearestCountry(latlng);

    // Bind popup to marker on click
    marker.bindPopup(`
        <div class="popup-container">
            <h3>${nearestCountry.name}</h3>
            <div class="popup-content">
                <p>Welcome to ${nearestCountry.name}!</p>
                <p>Explore more about this country:</p>
                <a href="${nearestCountry.url}" target="_blank">Let's explore!</a>
            </div>
        </div>
    `);

    // Open popup when marker is clicked
    marker.on('click', function() {
        this.openPopup();
    });
}


// Function to find nearest country based on marker position
function findNearestCountry(latlng) {
    let nearestCountry = countries[0];
    let minDistance = Infinity;

    countries.forEach(country => {
        const distance = map.distance(latlng, country.coords);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCountry = country;
        }
    });

    return nearestCountry;
}

// Initial marker position and popup
updateMarker(map.getCenter());

// Event listener for marker dragend
marker.on('dragend', function(event) {
    const markerLatLng = marker.getLatLng();
    updateMarker(markerLatLng);
});
// Search bar functionality
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim().toLowerCase();
        const country = countries.find(c => c.name.toLowerCase() === query);

        if (country) {
            map.setView(country.coords, 5); // Adjust zoom level as necessary
            updateMarkerAndOpenPopup(country.coords, country);
        } else {
            alert('Country not found');
        }
    }
});

// Function to update marker coordinates and open popup
function updateMarkerAndOpenPopup(latlng, country) {
    marker.setLatLng(latlng);

    // Bind popup content
    marker.bindPopup(`
        <div class="popup-container">
            <h3>${country.name}</h3>
            <div class="popup-content">
                <p>Welcome to ${country.name}!</p>
                <p>Explore more about this country:</p>
                <a href="${country.url}" target="_blank">Let's explore!</a>
            </div>
        </div>
    `);

    // Open popup
    marker.openPopup();

    // Set map view to the marker's location
    map.setView(latlng, 5); // Adjust zoom level as necessary
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('question-form');
    const questionInput = document.getElementById('question');
    const chatbox = document.getElementById('chatbox');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const question = questionInput.value.trim();
        if (question === '') return;

        const apiUrl = `/query?input=${encodeURIComponent(question)}`;

        console.log('Sending request to:', apiUrl); // Log the request URL

        fetch(apiUrl)
            .then(response => {
                console.log('Received response:', response); // Log the response object
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received from API:', data); // Log the response data
                const answer = parseWolframResponse(data);
                appendMessage(question, answer);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                appendMessage(question, 'Error fetching data. Please try again.');
            });

        questionInput.value = '';
    });

    function parseWolframResponse(data) {
        try {
            console.log('Parsing response data:', data); // Log the data being parsed
            if (data && data.queryresult && data.queryresult.pods && data.queryresult.pods.length > 0) {
                return data.queryresult.pods[0].subpods[0].plaintext;
            } else {
                throw new Error('Invalid data structure');
            }
        } catch (error) {
            console.error('Error parsing Wolfram response:', error);
            return 'Unable to retrieve answer. Please try again.';
        }
    }

    function appendMessage(question, answer) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'message';
        questionDiv.innerHTML = `<strong>You:</strong> ${question}`;
        chatbox.appendChild(questionDiv);

        const answerDiv = document.createElement('div');
        answerDiv.className = 'message';
        answerDiv.innerHTML = `<strong>Chatbot:</strong> ${answer}`;
        chatbox.appendChild(answerDiv);

        chatbox.scrollTop = chatbox.scrollHeight;
    }
});
