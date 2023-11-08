import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState(0);

  function onChange1(e) {
    setNumber1(e.target.value);
  }
  function onChange2(e) {
    setNumber2(e.target.value);
  }

  function onClick() {
    setResult(Number(number1) + Number(number2));
  }
  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          value={number1}
          onChange={onChange1}
        />
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          value={number2}
          onChange={onChange2}
        />
      </div>

      <button onClick={onClick}>Topla!</button>

      <h2>{result}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
