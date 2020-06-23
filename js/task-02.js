const total = 100;
const ordered = prompt("Бажана кількість");

ordered > total
  ? alert("На складі недостатньо товарів!")
  : alert("Замовлення оформлено, з вами зв\'яжеться менеджер");