const algorithmA = require('./algorithm');

//Test 1: testing all correct letters
test('Correct guess', () => {
  const guessedWord = 'CYKLA';
  const correctWord = 'CYKLA';
  const feedback = algorithmA(guessedWord, correctWord);
  expect(feedback).toEqual([
    { letter: 'C', result: 'correct' },
    { letter: 'Y', result: 'correct' },
    { letter: 'K', result: 'correct' },
    { letter: 'L', result: 'correct' },
    { letter: 'A', result: 'correct' },
  ]);
});

//Test 2: testing a totally different word with two misplaced letters and one correct.
test('Incorrect guess', () => {
  const guessedWord = 'HALLÅ';
  const correctWord = 'CYKLA';
  const feedback = algorithmA(guessedWord, correctWord);
  expect(feedback).toEqual([
    { letter: 'H', result: 'incorrect' },
    { letter: 'A', result: 'misplaced' },
    { letter: 'L', result: 'incorrect' },
    { letter: 'L', result: 'correct' },
    { letter: 'Å', result: 'incorrect' },
  ]);
});

//Test 3: Incorrect guess
test('Incorrect guess, only one misplaced letter', () => {
  const guessedWord = 'CAKLA';
  const correctWord = 'CYKLA';
  const feedback = algorithmA(guessedWord, correctWord);
  expect(feedback).toEqual([
    { letter: 'C', result: 'correct' },
    { letter: 'A', result: 'incorrect' },
    { letter: 'K', result: 'correct' },
    { letter: 'L', result: 'correct' },
    { letter: 'A', result: 'correct' },
  ]);
});

//Test 4: testing the same word but two misplaced letters
test('Incorrect guess, two misplaced letters', () => {
  const guessedWord = 'SMION';
  const correctWord = 'SIMON';
  const feedback = algorithmA(guessedWord, correctWord);
  expect(feedback).toEqual([
    { letter: 'S', result: 'correct' },
    { letter: 'M', result: 'misplaced' },
    { letter: 'I', result: 'misplaced' },
    { letter: 'O', result: 'correct' },
    { letter: 'N', result: 'correct' },
  ]);
});

//Test 5: testing where the guessed word is all incorrect
test('Incorrect guess, all incorrect letters', () => {
  const guessedWord = 'XXXXX';
  const correctWord = 'SIMON';
  const feedback = algorithmA(guessedWord, correctWord);
  expect(feedback).toEqual([
    { letter: 'X', result: 'incorrect' },
    { letter: 'X', result: 'incorrect' },
    { letter: 'X', result: 'incorrect' },
    { letter: 'X', result: 'incorrect' },
    { letter: 'X', result: 'incorrect' },
  ]);
});
