
let mapa;

function initMap() {
  var posPeru = { lat: -11.980489, lng: -77.091474 };
    mapa = new google.maps.Map(document.getElementById("map"), {
        center: posPeru,
        zoom: 6,
        disableDefaultUI: true
    });
    google.maps.event.addListener(mapa, "click", function (event) {
        // alert("Latitud = " + event.latLng.lat() + " - Longitud: " + event.latLng.lng());
        // var marcador = new google.maps.Marker({
        //     position: event.latLng,
        //     map: mapa,
        //     label: ''
        // });
    });

    
    // var geojson = JSON.parse(jsonData);
    mapa.data.loadGeoJson("https://raw.githubusercontent.com/ivallejo/Mapa/master/lima.json");

}


