// Создаем карту
var map = L.map('map').setView([58.00917,56.22701], 10);
function findNearestScooter(lat, lng) {
    var nearestScooter = null;
    var minDistance = Infinity;
  
    scooters.forEach(function(scooter) {
      var distance = distanceBetweenPoints(lat, lng, scooter.lat, scooter.lng);
      if (distance < minDistance) {
        minDistance = distance;
        nearestScooter = scooter;
      }
    });
  
    return nearestScooter;
  }
  function openScooterInfo(scooter) {
    // Create a popup with information about the scooter
    var popupContent = `
      <h2>Halten RS-01 Pro</h2>
      <p>Заряд: 0%</p>
    `;
  
    var popup = L.popup()
      .setLatLng([scooter.lat, scooter.lng])
      .setContent(popupContent)
      .openOn(map);
  }
  // Helper function to calculate distance between two points
  function distanceBetweenPoints(lat1, lng1, lat2, lng2) {
    var R = 6371; // Radius of the Earth in kilometers
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLng = (lng2 - lng1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
  }
// Добавляем слой с самокатами
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Добавляем маркеры для самокатов
var scooters = [
    { id: 1, lat: 58.00917, lng: 56.22701, status: '70%' },
    { id: 2, lat: 58.01017, lng: 56.22801, status: '20%' },
    { id: 3, lat: 58.01117, lng: 56.22901, status: '100%' },
    //...
  ];
var scooterMarkers = [];
scooters.forEach(function(scooter) {
    var marker = L.marker([scooter.lat, scooter.lng], {
        icon: L.icon({
          iconUrl: '/kursach/sourse/mark.png', // Use a unique image for each scooter
          iconSize: [30, 20], // Adjust the icon size as needed
          iconAnchor: [12, 41], // Adjust the icon anchor as needed
          pixelPerfect: true
        })
    }).addTo(map)
    .on('click', function() {
       openScooterInfo(scooter); // Open the scooter info popup when clicked
     });
});

// Добавляем функционал для выбора самоката
map.on('click', function(e) {
    // Получаем координаты клика
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    // Ищем ближайший самокат
    var nearestScooter = findNearestScooter(lat, lng);

    // Открываем экран с информацией о самокате
    openScooterInfo(nearestScooter);
});