import logo from "./logo.svg";
import Lottery from "./Components/Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
