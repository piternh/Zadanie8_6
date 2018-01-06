var a = 2;
var b = 3;
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);

if (value > 0) {
  console.log('Wynik dodatny');
} else if (value < 0) {
  console.log('Wynik ujemny');
} else if (value == 0) {
  console.log('Wynik jest równy zeru');
}