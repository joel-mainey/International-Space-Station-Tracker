const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS()
{
    const response = await fetch(api_url);
    const data = await response.json();

    const {latitude, longitude, altitude} = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    document.getElementById('alt').textContent = altitude;

    // create a map object via the leaflet JS Libray
    // setView has 2 params lat, long, array and zoom level
    var map = L.map('map').setView([-37, 175], 1);

    const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const tiles = L.tileLayer(tileURL, {attribution});

    tiles.addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);
}