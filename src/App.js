import logo from './logo.svg';
import './App.css';
import DigitalClock from './components/digitalclock';
import CountDown from './components/countDown';
import CronoClock from './components/cronoClock';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
      <DigitalClock></DigitalClock>
      <CountDown></CountDown>
      <CronoClock></CronoClock>
      </div>
    </div>
  )

}

export default App;
