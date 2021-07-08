//Pokazuję lokalizację podaną za pomocą współrzędne. Ta centrowanie skali mapy ta wystawiania centrum
function showLocation(position) {
  var wspolrzedne = new google.maps.LatLng('10.024445', '-125.247498');
  var opcjeMapy = {
    zoom: 10,
    center: wspolrzedne,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
}
//gdy wystąpil jakiś błąd to będzie wyświętlany odpowiedni komunikat
function errorHandler(error) {
  let output = document.getElementById("geo");
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
//funkcja używana do uzyskania aktualnej lokalizacji urządzenia,
//gdy nie ma takiej moliwości to pokazujemy odpowiedni komunikat
function getLocation() {
  if (navigator.geolocation) {
    let options = {
      timeout: 60000
    };
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
  } else {
    alert("Twoja przeglądarka nie wspiera geolokalizacji!");
  }
}
