const country = prompt('країна доставки');
let price;
let message;


switch (country.toLowerCase()) {
  case 'китай':
    price = 150;
    break;

  case 'чілі':
    price = 250;
    break;

  case 'австралія':
    price = 270;
    break;

  case 'індія':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;
    
    
    
    default: message = 'доставка не доступна';
        
}

if (price !== undefined) {
  message = 'доставка в ${сountry} коштує ${price} кредитів';
}

alert(message);