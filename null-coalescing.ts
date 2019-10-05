const val = 0;
const correct = (val !== undefined && val !== null) ? val : 0.5;
const incorrect = val ?? 0.5;
console.log({ correct, incorrect });