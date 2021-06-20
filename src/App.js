import "./App.css";
/* Components */
import Grid from "./components/Grid";
/* Styles */
import { Header } from "./styles";

function App() {
  return (
    <div>
      <Header>
        The Memory Game
        <p>Play a memory game with the best memories.</p>
      </Header>
      <Grid />
    </div>
  );
}

export default App;
