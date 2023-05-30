import { useState } from 'react'
import './App.css'

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function App() {

  

  // lo usaremos para saber si el usuario ha introducido un numero más alto o más bajo. Además nos servirá si el usuario agota todos los intentos, para mostrarlo
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  console.log('Random Number:', randomNumber);

  // tendremos que decrementar uno cada vez que el usuario introduzca un número
  const [remainingGuesses, setRemainingGuesses] = useState(10);

  // [4, 40, 20]
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setRemainingGuesses(remainingGuesses -1);
    setPreviousGuesses([...previousGuesses, currentGuess]);
    setCurrentGuess('');
    if (currentGuess > randomNumber) {
      setMessage('The number is lower')
    } else if (currentGuess < randomNumber) {
      setMessage('The number is higher')
    } else if (currentGuess == randomNumber) {
      setMessage('The number is correct')
    }


  // si la variable de estado es 0, es que ya hemos perdido!
  if (remainingGuesses === 0) {
    return <h1>Lo siento! el número era {randomNumber}</h1>
  }
  }

  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 0 and 100.</p>
      <p>You have {remainingGuesses} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">Guess a number</label>
        <input type="number" id="guessField" class="guessField" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} max={100} min={0} />
        <button class="guessSubmit" onClick={handleClick} >Submit a Guess</button>

        <div class="resultParas">
          <p>Previous Guesses: <span class="guesses">{previousGuesses.join(', ')}</span></p>
          <p>Guesses Remaining: <span class="lastResult">{remainingGuesses}</span></p>
          <p class="lowOrHi"> {message} </p>
        </div>
      </div>
    </>
  )
}

export default App;
