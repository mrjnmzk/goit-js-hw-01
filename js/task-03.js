const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('пароль');

input
  ? input === ADMIN_PASSWORD
    ? (message = 'вхід дозволено')
    : (message = 'невірний пароль!')
  : (message = 'скасовано користувачем!');

alert(message);