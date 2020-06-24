import React from "react";
import PropTypes from "prop-types";

export default function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          className="mb-2 mx-sm-3"
          type="text"
          data-test="input-box"
          placeholder="enter guess"
          onChange={(e) => setCurrentGuess(e.target.value)}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
