


$(".c-buttonmenu").on("click", function(){
  $(".c-header__navigation").toggleClass("c-header__navigation--visible");
});



$("#mainslider").slick({
	arrows: false
});




$("#products, #tshirts").slick({
	infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('a.photo').zoom({url: 'images/polera-caveman-big.png'});

// el mapa con select 

var map;
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {  
    center: new google.maps.LatLng(-12.029017,-77.1031831), 
    zoom: 8
  };
  map = new google.maps.Map(mapCanvas, mapOptions);

  var myLatlng1 = {lat: -12.029017, lng: -77.1031831};
  var marker1 = new google.maps.Marker({
      position: myLatlng1,
      title:"Hello World!",
      map: map
  });

  var myLatlng2 = {lat: -8.1178023, lng: -79.0313751};
  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      title:"Hello World!",
      map: map
  });


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