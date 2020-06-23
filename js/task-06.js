
let input;
let total = 0;

do {
  input = prompt('введіть число');

  Number.isNaN(Number(input))

    ? alert('це не число')

    : (total += Number(input));

} while (input !== null);


alert(`сума ${total}`);
