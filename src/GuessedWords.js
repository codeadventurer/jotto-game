import React from "react";
import PropTypes from "prop-types";

export default function GuessedWords(props) {
  if (props.guessedWords.length === 0) {
    return (
      <div data-test="component-guessed-words">
        <p data-test="guessed-words-instructions">
          Try to get the secret word!
        </p>
      </div>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    return (
      <div data-test="component-guessed-words">
        <div data-test="guessed-words-section">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
