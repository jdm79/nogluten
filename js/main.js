

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

  let marker = new google.maps.Marker({
      position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
      map: map
  });

  // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
  // Add a marker clusterer to manage the markers.
   var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}


var locations = [
        {lat: 51.507, lng: -0.055},
        {lat: 51.514, lng: -0.0549},
        {lat: 51.512, lng: -0.055},
        {lat: 51.509, lng: -0.0558},
        {lat: 51.508, lng: -0.059},

      ]
