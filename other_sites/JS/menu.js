//przy wykonaniu danych funkcje będzie zmieniali się następujące style
function openNav() {
  document.querySelector("#myNav").style.width = "100%";
  document.querySelector(".burger").style.visibility = "hidden";
  document.querySelector(".burger").style.transition = "1s;";
}

function closeNav() {
  document.querySelector("#myNav").style.width = "0%";
  document.querySelector(".burger").style.visibility = "visible";

}
