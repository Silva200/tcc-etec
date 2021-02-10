const map = L.map("mapid").setView([-23.6133914,-46.4785374,], 14);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Creat icon
const icon = L.icon({
    iconUrl: "./public/images/logo.jpeg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

// Create popup overLay
const popup = L.popup ({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Você esta aqui! <a href="orphanage.html?id=1" class="choose-orphanage">  </a>')

//Create and add marker
L.marker([-23.6133914,-46.4785374,], {icon})
  .addTo(map)
  .bindPopup(popup)