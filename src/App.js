import "./App.css";
import Player from "./Player";

function App() {
  const styleEnligne = { color: "red", letterSpacing: "5px" };
  return (
    <div className="App">
      <h2 style={styleEnligne}>Les Legendes Du Foot</h2>
      <Player />
    </div>
  );
}

export default App;
