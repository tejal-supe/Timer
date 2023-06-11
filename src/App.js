import './App.css';
import Timer, { myComonent } from './components/Timer';
import TimerTask from './components/TimerTask';

function App() {
  const compo = myComonent;
  return (
  <>
  {/* <Timer /> */}
  <TimerTask />
  {/* {compo} */}
  </>
  );
}

export default App;
