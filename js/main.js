// static coords for location on map
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24, lng: -110.1},
    zoom: 10
  });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: 15
  });
}
