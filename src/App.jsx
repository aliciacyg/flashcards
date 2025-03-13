import './App.css';
import Card from './Card.jsx';
import Guess from './Guess.jsx';
import React, { useState } from 'react';


const App = () => {
  const initFlashcards = [
    { chinese: "今天", english: "Today" },
    { chinese: "看", english: "To see" },
    { chinese: "小", english: "Small" },
    { chinese: "猫", english: "Cat" },
    { chinese: "狗", english: "Dog" },
    { chinese: "吃", english: "To eat" },
    { chinese: "喝", english: "To drink" },
    { chinese: "水", english: "Water" },
    { chinese: "茶", english: "Tea" },
    { chinese: "咖啡", english: "Coffee" },
    { chinese: "米饭", english: "Rice" },
    { chinese: "面条", english: "Noodles" },
    { chinese: "火", english: "Fire" },
    { chinese: "山", english: "Mountain" },
    { chinese: "大", english: "Big" },
    { chinese: "中", english: "Middle" },
    { chinese: "小", english: "Small" },
    { chinese: "好", english: "Good" },
    { chinese: "不好", english: "Bad" },
    { chinese: "高兴", english: "Happy" },
    { chinese: "伤心", english: "Sad" },
    { chinese: "累", english: "Tired" },
    { chinese: "冷", english: "Cold" },
    { chinese: "热", english: "Hot" },
    { chinese: "忙", english: "Busy" },
    { chinese: "慢", english: "Slow" },
    { chinese: "快", english: "Fast" },
    { chinese: "多", english: "Many" },
    { chinese: "少", english: "Few" },
    { chinese: "对不起", english: "Sorry" },
    { chinese: "谢谢", english: "Thank you" },
    { chinese: "再见", english: "Goodbye" },
    { chinese: "请", english: "Please" },
    { chinese: "不客气", english: "You're welcome" },
    { chinese: "对", english: "Correct" },
    { chinese: "错", english: "Wrong" },
    { chinese: "有", english: "To have" },
    { chinese: "没有", english: "To not have" },
    { chinese: "会", english: "Can" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guessMade, setGuessMade] = useState(false);
  const [flashcards, setFlashcards] = useState(initFlashcards);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Reset flip state when moving to the next card
  const handleNextCard = () => {
    const index = currentIndex + 1;
    // Delay the change to the next card to avoid showing back prematurely
    if (flipped){
      setFlipped(false); 
      setTimeout(() => {
      setCurrentIndex(index);
      }, 600); 
    }
    else {
      setCurrentIndex(index);
    }
    // Reset guess state when moving to next card, re-enables answer submission
    setGuessMade(false);
  };

  const handlePrevCard = () => {
    const index = currentIndex - 1;
    // Delay the change to the next card to avoid showing back prematurely
    if (flipped){
      setFlipped(false); 
      setTimeout(() => {
      setCurrentIndex(index);
      }, 600); 
    }
    else {
      setCurrentIndex(index);
    }
    // Reset guess state when moving to next card, re-enables answer submission
    setGuessMade(false);
  }

  const handleShuffle = () => {
    // Copy the flashcards
    const shuffledCards = [...flashcards];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]; // Swap elements
    }
    setFlashcards(shuffledCards);
    setCurrentIndex(0);
    setFlipped(false);
    setGuessMade(false);
  };

  const handleCorrectGuess = (isCorrect) => {
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setStreak(0);
    }
    // Disable answer submission after a guess is made
    setGuessMade(true);
  };

  // Toggle flip state when card is clicked
  const handleCardClick = () => {
    if (flipped) {
      setGuessMade(true);
    }
    setFlipped(!flipped);
    setStreak(0); // Reset streak when card is flipped
  };

  return (
    <div className="App">
      <h1>Study Mandarin</h1>
      <h2>Take a quick Mandarin lesson. Try to remember the characters!</h2>
      <h3>Number of cards: {flashcards.length}</h3>
      <h4>Current streak: {streak}, Longest streak: {longestStreak}</h4>
      <div className="card-container">
      <Card 
        chinese={flashcards[currentIndex].chinese} 
        english={flashcards[currentIndex].english}
        flipped={flipped}
        onCardClick={handleCardClick} 
      />
      </div>
      <br></br>
      <Guess
      flashcard={flashcards[currentIndex]}
      onCorrectGuess={handleCorrectGuess}
      flipped={flipped}
      guessMade={guessMade}/>
      <div className="button-container">
        <button onClick={handlePrevCard} 
        disabled={currentIndex === 0}>←</button>
        <button onClick={handleNextCard}
        disabled={currentIndex === 38}>→</button>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
      
    </div>
  )
}

export default App