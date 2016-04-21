// GoogleMap
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 45.043396, lng: 38.944506},
    zoom: 18
  });
  var marker = new google.maps.Marker({
     position: {lat: 45.043396, lng: 38.944506},
     map: map,
     title:"NЁRDS DESIGN STUDIO"
  });
}

// popUp
(function() {
  var link = document.querySelector(".btn-popup");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".btn-close");
  var uName = popup.querySelector("[name=name]");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    uName.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });
})();

