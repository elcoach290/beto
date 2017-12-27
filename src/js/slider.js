


$(".c-buttonmenu").on("click", function(){
  //$(".c-header__navigation").toggleClass("c-header__navigation--visible");
  $("body, html").toggleClass("u-navigation--visible");
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
    zoom: 13
  };
  map = new google.maps.Map(mapCanvas, mapOptions);

  var myLatlng1 = {lat: -12.029017, lng: -77.1031831};
  var marker1 = new google.maps.Marker({
      position: myLatlng1,
      title:"Estamos en Limonta!",
      map: map
  });

  var myLatlng2 = {lat: -8.1178023, lng: -79.0313751};
  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      title:"Estamos en Trujiyork!",
      map: map
  });




//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2811753091696!2d-71.55822788532367!3d-16.410540192781863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a893f8fa445%3A0xda583c7d263bd164!2sPlanta+de+Cervezas+Backus-Arequipa%2C+Fernandini%2C+Arequipa!5e0!3m2!1ses!2spe!4v1513901019510" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

  var myLatlng3 = {lat: -16.410540192781863, lng: -71.55822788532367};
  var marker3 = new google.maps.Marker({
      position: myLatlng3,
      title:"Estamos en Arequipay",
      map: map
  });


}


myMap();

var coords = {
  'LI': '-12.029017,-77.1031831',
  'TRU': '-8.1166658,-79.0546353',
  'ARE': '-16.4039671,-71.5740311'
};


function changeMap(city) {
  var city = this.value;
  var c = coords[city].split(',');
  //alert(c[0]+","+c[1]);
  map.setCenter(new google.maps.LatLng(c[0], c[1]));
}


//, onchange='changeMap(this.value)'
$("#myCity").on("change", changeMap).trigger("change");

