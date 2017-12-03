$("#mainslider").slick({
	arrows: false
});


$("#products, #tshirts").slick({
	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1
});



var map;
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {  
    center: new google.maps.LatLng(-12.029017,-77.1031831), 
    zoom: 8
  };
  map = new google.maps.Map(mapCanvas, mapOptions);
}

myMap();

var coords = {
  'ARE': '-16.4039671,-71.5740311',
  'LI': '-12.029017,-77.1031831',
  'TRU': '-8.1166658,-79.0546353'
};


function changeMap(city) {
  var c = coords[city].split(',');
  map.setCenter(new google.maps.LatLng(c[0], c[1]));
}