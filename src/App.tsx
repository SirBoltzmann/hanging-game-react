import { useEffect, useState } from 'react';
import  './App.css';
import { HangImage } from './components/HangImage.tsx';
import { letters } from './helpers/letters.ts';
import { getRandomWord } from './helpers/getRandomWord.ts';

function App() {

  const [ word, setWord ] = useState(getRandomWord());
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState(false);
  const [ won, setWon ] = useState(false);

 
  // User Lose
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);


  // User Won
  useEffect(() => {
    const currHiddenWord = hiddenWord.split(' ').join('');
    if (currHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord])

  
  const checkLetter = (letter:string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts( Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArr = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArr[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArr.join(' '));

      const newWord = getRandomWord();

      setWord(newWord);
      setHiddenWord('_ '.repeat(newWord.length));
      setAttempts(0);
      setLose(false);
      setWon(false);
  }

  const newGame = () => {

  }
 
  return (
    <div className='App'>
      {/* Images */}
      <HangImage imageNumber={attempts}/>

      {/* Hidden word */}
      <h3>{hiddenWord}</h3>

      {/* Try counter */}
      <h3>Try: {attempts}</h3>

      {/* Lose and Won message*/}
      {
        (lose) 
        ? <h2>You Lose, this is the word: {word}</h2>
        : ''
      }
      
      {
        (won) 
        ? <h2>You Won!!! Congratulations, you're a nerd haha..!!</h2>
        : ''
      } 

      {/* Letter buttons */}
      {
        letters.map(letter => (
          <button 
            onClick={ () => checkLetter(letter)}
            key={letter}>
              {letter}
          </button>
        ))
      }

      <br></br>
      <button onClick={newGame}>New Game?</button>

    </div>
  )
}

export default App;