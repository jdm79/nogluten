

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function initMap(pos) {
  let map;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: pos.coords.latitude, lng: pos.coords.longitude},
      zoom: 15
    });
}
