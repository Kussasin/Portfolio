/* Pobieranie lokalizacji użytkownika */
function showLocation(position) {
  var latitude = position.coords.latitude,
    longitude = position.coords.longitude;
  var wspolrzedne = new google.maps.LatLng(latitude, longitude);
  var opcjeMapy = {
    zoom: 10,
    center: wspolrzedne,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
}
/* Komunikaty błędów */
function errorHandler(error) {
  var output = document.getElementById("geo");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      output.innerHTML = "Użytkownik nie udostępnił danych.";
      break;
    case error.POSITION_UNAVAILABLE:
      output.innerHTML = "Dane lokalizacyjne niedostępne.";
      break;
    case error.TIMEOUT:
      output.innerHTML = "Przekroczono czas żądania.";
      break;
    case error.UNKNOWN_ERROR:
      output.innerHTML = "Wystąpił nieznany błąd.";
      break;
  }
}
/* Pokazuje aktualna lokalizację urzadzenia */
function getLocation() {
  if (navigator.geolocation) {
    var options = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
  } else {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
  }
}
