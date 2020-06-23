const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('пароль');

if (message === null) {
    message = 'скасовано користувачем';
   
} else if (message === ADMIN_PASSWORD) {
    message = 'вхід дозволено';
 } else {
     message = 'вхід дозволено';
 }





alert(message);