// source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-105.php
export function translateNumber(inputNumber: number): string {
  // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
  const singleDigits = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  const doubleDigits = [
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const belowOneHundred = [
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  if (inputNumber === 0) return 'Zero';

  // Recursive function to translate the number into words
  function translate(n: number) {
    if (n < 10) {
      return singleDigits[n] + ' ';
    } else if (n < 20) {
      return doubleDigits[n - 10] + ' ';
    } else if (n < 100) {
      const rem = translate(n % 10);
      return belowOneHundred[(n - (n % 10)) / 10 - 2] + ' ' + rem;
    } else if (n < 1000) {
      return (
        singleDigits[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100)
      );
    } else if (n < 1000000) {
      return (
        translate(Math.floor(n / 1000)).trim() +
        ' Thousand ' +
        translate(n % 1000)
      );
    } else if (n < 1000000000) {
      return (
        translate(Math.floor(n / 1000000)).trim() +
        ' Million ' +
        translate(n % 1000000)
      );
    } else {
      return (
        translate(Math.floor(n / 1000000000)).trim() +
        ' Billion ' +
        translate(n % 1000000000)
      );
    }
  }

  // Get the result by translating the given number
  const result = translate(inputNumber);
  return result.trim();
}
