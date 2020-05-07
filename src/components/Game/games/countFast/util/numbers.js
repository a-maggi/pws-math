const shuffleNumbers = (numbers) => {
  const shuffledNumbers = [...numbers];
  for (let i = shuffledNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
  }

  return shuffledNumbers;
}

const orderNumbers = (n) => {
  let startNumber = Math.floor(Math.random() * 90 + 10);
  let arrayNumbers = []
  let i = startNumber;
  while (i <= startNumber + n){
    arrayNumbers.push(i);
    i += 1;
  }
  return arrayNumbers;
}

export { shuffleNumbers, orderNumbers };