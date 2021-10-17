import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
       <h3 className="text-center">DICTIONARY APP</h3>
      <Dictionary />
      <footer>
        <h6 className="text-center">
          This project was coded by{" "}
          <a href="">
            Victoria
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;