import CountDownTimer from "./CountDownTimer";
import "../styles.css";
import stars from "../images/bg-stars.svg";
import hills from "../images/pattern-hills.svg";

function App() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);
  const difference = targetDate - new Date();

  return (
    <div className="App">
      <img src={stars} className="stars" />
      <img src={hills} className="hills" />
      <CountDownTimer duration={difference} />
    </div>
  );
}

export default App;
