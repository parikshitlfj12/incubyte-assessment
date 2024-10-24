export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  // Split numbers by the delimiter
  const numberList = numbers.split(delimiter).map(Number);

  // Handle negative numbers
  const negatives = numberList.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numberList.reduce((sum, n) => sum + n, 0);
}
