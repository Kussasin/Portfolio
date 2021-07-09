//Sprawdzenie na poprawność wpisania dannych
function getPoleIf(poleId, obiektRegex) {
  var obiekField = document.querySelector(poleId).value;
  if (!obiektRegex.test(obiekField)) {
    return (undefined);
  } else {
    return (obiekField);
  }
}
class User {
  //tworzę domyśkny construktor
  constructor(name = "", surname = "", email = "", yourMail = "") {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.yourMail = yourMail;
  }
}
//gdy strona(drzewo DOM) będzie załadowana to będzie wykonywana następna część kodu
document.addEventListener('DOMContentLoaded', () => {
  //Po kliknięciu na prycisk z id #podtwierdz wykona się następująca część kodu
  document.getElementById("podtwierdz").addEventListener("click", () => {
    //przydzielam znaczenie z klasy do zmienej
    let user = new User(),
      data,
      //walidacja
      obiektNazw = /^[a-zA-Z]{2,20}$/,
      obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    //przepisuje do zmienych dane z pól wejśowych o podanym id
    user.name = getPoleIf('#firstName', obiektNazw);
    user.surname = getPoleIf('#surname', obiektNazw);
    user.email = getPoleIf('#email', obiektemail);
    user.yourMail = document.querySelector('#exampleFormControlTextarea1').value;
    //przepisuję do stałej zmienej dane z localStorage
    const storagedUsers = localStorage.getItem("users");
    //tworzę listę
    let users = [];
    //gdy zmiena nie jest pusta,to analizuję ją
    if (storagedUsers) {
      users = JSON.parse(storagedUsers);
    }
    const userName = user.name;
    const userEmail = user.email;
    //gdy wpisano niepoprawne dane, to wystąpia odpowiedni komunikat
    if (user.name === undefined) {
      alert("Proszę wpisać poprawne imię");
    } else if (user.surname === undefined) {
      alert("Niepoprawne nazwisko");
    } else if (user.email === undefined) {
      alert("Niepoprawny Email");
    } else {
      //sprawdzam czy istnieją już takie dane w localStorage
      const duplicateName = users.find(u => u.name === userName);
      const duplicateEmail = users.find(u => u.email === userEmail);
      //gdy dane istnieją to występuję odpowiedni komunikat
      if (duplicateName) {
        alert("Istnieje już product z taką nazwą!");
      } else if (duplicateEmail) {
        alert("Istnieje już użytkownik o podanym emailu!");
        //gdy nie istnieją to zapisuje dane do zmienej "data"
      } else {
        data = "Następujące dane zostaną wysłane:\n";
        data += "Imię : " + user.name + "\n";
        data += "Nazwisko : " + user.surname + "\n";
        data += "Email: " + user.email + "\n";
        data += "Twoja wiadomość: " + user.yourMail + "\n";
        //gdy dane zostały przyjęte i użytkownik nacisną "OK", to zapisujemy danę do localStorage
        if (window.confirm(data)) {
          //Zapisywanie listy z danymo do localStorage
          localStorage.setItem("users", JSON.stringify([user, ...users]));
          return true;
        } else {
          return false;
        }
      }
    }

  });
});
