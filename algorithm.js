function algorithmA(correctWord, guessedWord) {
  const feedback = [];

  for (let i = 0; i < guessedWord.length; i++) {
    const guessedLetter = guessedWord[i];
    const correctLetter = correctWord[i];

    if (guessedLetter === correctLetter) {
      feedback.push({ letter: guessedLetter, result: 'correct' });
    } else if (correctWord.includes(guessedLetter)) {
      feedback.push({ letter: guessedLetter, result: 'misplaced' });
    } else {
      feedback.push({ letter: guessedLetter, result: 'incorrect' });
    }
  }

  return feedback;
}

let testA = algorithmA('simon', 'siomn');
let testB = algorithmA('simon', 'simon');
let testC = algorithmA('simon', 'xxxxx');

console.log(testA);
console.log(testB);
console.log(testC);

module.exports = algorithmA;
