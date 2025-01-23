// source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-105.php
export function translateNumber(inputNumber: number): string {
  // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
  const single_digit = [
    '',
    'Uno',
    'Dos',
    'Tres',
    'Cuatro',
    'Cinco',
    'Seis',
    'Siete',
    'Ocho',
    'Nueve',
  ];
  const double_digit = [
    'Diez',
    'Once',
    'Doce',
    'Trece',
    'Catorce',
    'Quince',
    'Dieciseis',
    'Diecisiete',
    'Dieciocho',
    'Diecinueve',
  ];
  const below_hundred = [
    'Veinte',
    'Treinta',
    'Cuarenta',
    'Cincuenta',
    'Sesenta',
    'Setenta',
    'Ochenta',
    'Noventa',
  ];

  if (inputNumber === 0) return 'Cero';

  // Recursive function to translate the number into words
  function translate(n: number) {
    let word = '';
    if (n < 10) {
      word = single_digit[n] + ' ';
    } else if (n < 20) {
      word = double_digit[n - 10] + ' ';
    } else if (n < 100) {
      let rem = translate(n % 10);
      word = below_hundred[(n - (n % 10)) / 10 - 2] + ' ' + rem;
    } else if (n < 1000) {
      word =
        single_digit[Math.trunc(n / 100)] + ' Cien(to) ' + translate(n % 100);
    } else if (n < 1000000) {
      word =
        translate(Math.floor(n / 1000)).trim() +
        ' Mil(es) ' +
        translate(n % 1000);
    } else if (n < 1000000000) {
      word =
        translate(Math.floor(n / 1000000)).trim() +
        ' Millon(es) ' +
        translate(n % 1000000);
    } else {
      word =
        translate(Math.floor(n / 1000000000)).trim() +
        ' Mil millon(es) ' +
        translate(n % 1000000000);
    }
    return word;
  }

  // Get the result by translating the given number
  let result = translate(inputNumber);
  return result.trim();
}
