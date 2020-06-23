let country = prompt('країна доставки');
let price;
let countryNotInList;

const caseCountry = country.toLowerCase();

switch (caseCountry) {
  case 'китай':
    price = 100;
    break;

  case 'чілі':
    price = 250;
    break;

  case 'австралія':
    price = 170;
    break;

  case 'індія':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    countryNotInList = true;
    alert('доставка не доступна');
    break;
}

countryNotInList === true
  alert(`доставка в ${caseCountry} коштує ${price} кредитів`);