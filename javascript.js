var map = L.map('map').setView([47.25, -122.44], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVzc2ljYWJwbGFuYWxwIiwiYSI6ImNrMndvN2g0cjBoam0zYmw2eXd0bm12bTcifQ.RNICUHzCzEvRkIPxzq_RBg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoiamVzc2ljYWJwbGFuYWxwIiwiYSI6ImNrMndvN2g0cjBoam0zYmw2eXd0bm12bTcifQ.RNICUHzCzEvRkIPxzq_RBg',
}).addTo(map);

var control = L.Routing.control({
    waypoints: [
        L.latLng(47.246587, -122.438830),
        L.latLng(47.318017, -122.542970),
        L.latLng(47.258024, -122.444725)
    ],
     routeWhileDragging: true,
      router: L.Routing.mapbox('pk.eyJ1IjoiamVzc2ljYWJwbGFuYWxwIiwiYSI6ImNrMndvN2g0cjBoam0zYmw2eXd0bm12bTcifQ.RNICUHzCzEvRkIPxzq_RBg'),
      units:'imperial',
      collapsible: true,
      geocoder: L.Control.Geocoder.mapbox('pk.eyJ1IjoiamVzc2ljYWJwbGFuYWxwIiwiYSI6ImNrMndvN2g0cjBoam0zYmw2eXd0bm12bTcifQ.RNICUHzCzEvRkIPxzq_RBg'),

}).addTo(map);

