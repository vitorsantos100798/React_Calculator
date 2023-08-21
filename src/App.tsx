import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (value: any) => {
    if (value === "=") {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult("Erro");
      }
    } else if (value === "C") {
      setDisplay("0");
      setResult("");
    } else if (value === "+/-") {
      setDisplay((prevDisplay) =>
        prevDisplay.charAt(0) === "-" ? prevDisplay.slice(1) : "-" + prevDisplay
      );
    } else if (value === "%") {
      try {
        const percentage = (parseFloat(display) / 100).toString();
        setDisplay(percentage);
        setResult("");
      } catch (error) {
        setResult("Erro");
      }
    } else {
      if (display === "0") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={display} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("C")}>AC</button>
          <button onClick={() => handleClick("+/-")}>+/-</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
