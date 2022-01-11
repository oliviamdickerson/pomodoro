import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import TimerButton from './TimerButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Timer 
          time={1500}
          timerStatus={0}
        />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
