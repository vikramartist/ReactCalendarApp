import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [rangeValue, setRangeValue] = useState(1);
  let date = new Date();
  date = date.setDate(date.getDate() + count);
  // const handleStep = (val) => {
  //   return val === "+" ? setStep((s) => s + 1) : setStep((s) => s - 1);
  // };

  const handleCount = (val) => {
    return val === "+"
      ? setCount((i) => i + rangeValue)
      : setCount((i) => i - rangeValue);
  };

  const handleRange = (e) => {
    setRangeValue(Number(e.target.value));
  };

  const handleReset = () => {
    setRangeValue(1);
    setCount(0);
  };

  return (
    <div className="App">
      <div className="steps">
        Step :
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          id="volume"
          name="volume"
          onChange={handleRange}
          value={rangeValue}
        />
        <label htmlFor="volume">{rangeValue}</label>
        {/* <button onClick={() => handleStep("-")}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => handleStep("+")}>+</button> */}
      </div>
      <div className="count">
        <label htmlFor="count">Count : </label>
        <button onClick={() => handleCount("-")}>-</button>
        <input
          type="text"
          id="count"
          name="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => handleCount("+")}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count === 1
            ? `${count} day from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : count < -1
            ? `${Math.abs(count)} days ago was `
            : `${count} days from today is `}
        </span>
        <span>{new Date(date).toDateString()}</span>
      </p>
      {count !== 0 || rangeValue !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
