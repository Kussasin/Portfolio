/* Sprawdzenie poprawnosci wpisanych danych */
function getPoleIf(poleId, obiektRegex) {
  var obiekField = document.querySelector(poleId).value;
  if (!obiektRegex.test(obiekField)) {
    return (undefined);
  } else {
    return (obiekField);
  }
}
/* Pobieranie wpisanych danych oraz wypisanie bledow gdy one istnieja */
function podtwierdz() {
  var name,
    surname,
    email,
    tel,
    adres,
    choose,
    obiektNazw = /^[a-zA-Z]{2,20}$/,
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/,
    obiektPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    obiektAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/,
    data;
  //pobieranie danych od użytkownika
  name = getPoleIf('#name', obiektNazw);
  surname = getPoleIf('#surname', obiektNazw);
  email = getPoleIf('#email', obiektemail);
  tel = getPoleIf('#tel', obiektPhone);
  adres = getPoleIf('#adress', obiektAddress);
  choose = document.querySelector('#choose_flower').value;
  const temp = document.getElementsByName('delivery');
  //gdy danę użytkownika nie zgadzają się z patternem, to wystąpia odpowiedni komunikat
  if (name === undefined) {
    alert("Incorrect name");
  } else if (surname === undefined) {
    alert("Incorrect surname");
  } else if (email === undefined) {
    alert("Incorrect Email");
  } else if (adres === undefined) {
    alert("Incorrect address");
  } else if (tel === undefined) {
    alert("Incorrect Phone number");
  } else {
    //zapisanie danych do zmienej z pózniejszem wyswietlaniem na ekran
    data = "Następujące dane zostaną wysłane:\n";
    data += "Name : " + name + "\n";
    data += "Surname : " + surname + "\n";
    data += "Phone : " + tel + "\n";
    data += "E-mail: " + email + "\n";
    data += "Adress : " + adres + "\n";
    data += "Flower: " + choose + "\n";
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].checked) {
        data += "Delivery method: " + temp[i].value + "\n";
        console.log("123");
      }
    }
    if (window.confirm(data)) {
      setToCart();
      return true;
    } else {
      return false;
    }
  }
  /* Zapisywanie danych do localStorage */
  function setToCart() {
    var item = {};
    item.name = document.querySelector('#name').value;
    item.surname = document.querySelector('#surname').value;
    item.email = document.querySelector('#email').value;
    item.adres = document.querySelector('#adress').value;
    item.choose = document.querySelector('#choose_flower').value;
    item.tel = document.querySelector('#tel').value;
    const temp = document.getElementsByName('delivery');
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].checked) {
        item.deliveryMethod = temp[i].value;
      }
    }
    localStorage.setItem(item.email, JSON.stringify(item));
  }
}
