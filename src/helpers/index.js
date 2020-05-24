export function getLetterMatchCount(guessedWord, secretWord) {
  const splittedSecretWord = secretWord.split("");
  const splittedGuessedWord = guessedWord.split("");

  const numberOfCorrectLetters = splittedSecretWord.filter((letter) =>
    splittedGuessedWord.includes(letter)
  ).length;

  return numberOfCorrectLetters;
}
