import React, { useState, useEffect } from 'react';

const Guess = ({ flashcard, onCorrectGuess, flipped, guessMade }) => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  // Reset guess fields when moving to a new card
  useEffect(() => {
    setMessage('');
    setGuess('');
  }, [flashcard]);
  
  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  // Function to normalize the answer by removing "to" from verbs and converting to lowercase
  const normalizeAnswer = (str) => {
    return str.toLowerCase().replace(/\bto\b/g, '').trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normalize both the guess and the correct answer
    const normalizedGuess = normalizeAnswer(guess);
    const normalizedCorrectAnswer = normalizeAnswer(flashcard.english);
    
    // Check if the guess is correct
    if (normalizedGuess === normalizedCorrectAnswer) {

      setMessage('Correct!');
      onCorrectGuess(true); // Inform parent component that the guess was correct
    } else {
      setMessage('Incorrect');
      onCorrectGuess(false); // Inform parent component that the guess was incorrect
    }

    // Clear the input field after each guess
    setGuess('');
  };

  return (
    <div className="guess-container">
      <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={guess} 
            onChange={handleGuessChange} 
            placeholder="Translate to English" 
            disabled={flipped || guessMade}
          />
        <button type="submit" disabled={flipped || guessMade}>Check Answer</button>
      </form>
      {message && <p>{message}</p>}  {/* Display feedback message */}
    </div>
  );
};

export default Guess;