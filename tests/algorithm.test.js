test('Correct guess', () => {
    const correctWord = "CYKLA";
    const guessedWord = "CYKLA";
    const feedback = generateFeedback(correctWord, guessedWord);
    const expectedFeedback = [
        { letter: 'C', result: 'correct' },
        { letter: 'Y', result: 'correct' },
        { letter: 'K', result: 'correct' },
        { letter: 'L', result: 'correct' },
        { letter: 'A', result: 'correct' },
    ];
    
})