const credits = 23500;
const pricePerDroid = 3000;
let total;
let message;

const input = prompt('кількість');

if (!input) {
  message = 'відміна';
} else if (input > 0) {
  total = input * pricePerDroid;
  if (total > credits) {
    message = 'нема бабла';
  } else {
    let restMoney = credits - total;
    message = `куплено ${input} дроідів, залишок ${restMoney} кредитів.`;
  }
} else {
  message = 'невірне значення';
}

alert(message);

    

