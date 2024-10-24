// Main add function
export function add(numbers) {
  if (!numbers) return 0;

  let { updatedNumbers, delimiter } = extractDelimiter(numbers);

  const numArray = splitNumbers(updatedNumbers, delimiter);
  handleNegativeNumbers(numArray);
  return calculateSum(numArray);
}

// Helper function to extract the delimiter and numbers part
function extractDelimiter(numbers) {
  let delimiter = /,|\n/; // Default delimiter (comma or newline)
  let updatedNumbers = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.slice(2, delimiterEnd);
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    updatedNumbers = numbers.slice(delimiterEnd + 1);
  }

  return { updatedNumbers, delimiter };
}

// Helper function to split the string into numbers based on the delimiter
function splitNumbers(numbers, delimiter) {
  return numbers.split(delimiter);
}

// Helper function to handle negative numbers
function handleNegativeNumbers(numArray) {
  const negativeNumbers = numArray.filter((n) => parseInt(n) < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
}

// Helper function to calculate the sum of the numbers
function calculateSum(numArray) {
  return numArray.reduce((acc, curr) => {
    const num = parseInt(curr);
    return isNaN(num) ? acc : acc + num;
  }, 0);
}
