import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>REACT WEATHER APP</h1>

      <Weather />
      <p>
        {" "}
        coded by Temitope with React{" "}
        <a
          href="https://github.com/DrJasmineTemitope/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Opensource
        </a>
      </p>
    </div>
  );
}

export default App;
