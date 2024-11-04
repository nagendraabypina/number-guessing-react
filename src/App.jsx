import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// 1 -5 && < random : guess is low
// 5- 10 && < random : guess is moderate
// >10 && > random : guess is high
//  ===  random : guess is correct

const App = () => {
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [message, setMessage] = useState("");

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  };

  const checkGuess = () => {
    const value = parseInt(guess, 10);
    setMessage("");
    if (value === randomNumber) {
      setMessage("match");
    } else if (value <= 5 && value < randomNumber) {
      console.log("Low");
      setMessage("low");
    } else if (value > 5 && value < randomNumber) {
      setMessage("moderate");
    } else if (value > randomNumber) {
      setMessage("high");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Guess The Number</h1>
      <div className="main-content">
        <Button onClick={generateRandomNumber}>
          Generate Random number between 1 and 10
        </Button>
        <Form.Group className="mt-3 mb-3" controlId="guess">
          <Form.Control
            type="text"
            placeholder="Enter your guess"
            onChange={(e) => {
              const value = e.target.value;
              setGuess(e.target.value);
              if (value === "") {
                setMessage("");
              }
            }}
          />
        </Form.Group>
        <Button onClick={checkGuess} disabled={!guess || !randomNumber}>
          Check Guess
        </Button>
        {message && <div className={message}>Value is {message}</div>}
      </div>
    </div>
  );
};

export default App;
