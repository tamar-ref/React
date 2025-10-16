import { useState } from 'react';

export default function MoodApp() {
  const [happyCount, setHappyCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [angryCount, setAngryCount] = useState(0);

  const [current, setCurrent] = useState('Neutral 😐')

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');

  function historyUpdate(current) {
    setThird(second);
    setSecond(first);
    setFirst(current);
  }

  function reset() {
    setHappyCount(0);
    setSadCount(0);
    setAngryCount(0);
    setCurrent('Neutral 😐')
    setFirst('');
    setSecond('');
    setThird('');
  }

  function happy() {
    setHappyCount(happyCount + 1);
    historyUpdate("happy");
    setCurrent('Happy 😀');
  }

  function sad() {
    setSadCount(sadCount + 1);
    historyUpdate("sad");
    setCurrent('Sad 😢');
  }

  function angry() {
    setAngryCount(angryCount + 1);
    historyUpdate("angry");
    setCurrent('Angry 😡');
  }

  function randomMood() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        happy();
        break;
      case 2:
        sad();
        break;
      default:
        angry();
        break;
    }
  }

  return (
    <>
      <div className='current-mood'>
        <h3>Current Mood:</h3>
        <p>{current}</p>
      </div>
      <div id="mood-buttons">
        <div>
          <button onClick={happy}>Happy 😀</button>
          <p>{happyCount}</p>
        </div>
        <div>
          <button onClick={sad}>Sad 😢</button>
          <p>{sadCount}</p>
        </div>
        <div>
          <button onClick={angry}>Angry 😡</button>
          <p>{angryCount}</p>
        </div>
      </div>
      <div id='counts'>
      </div>
      <div id='buttons'>
        <button onClick={reset}>Reset</button>
        <button onClick={randomMood}>Random Mood</button>
      </div>
      <h3>Mood History:</h3>
      <ul>
        {[first, second, third].map((item, index) =>
          item ? <li key={index}>{item}</li> : null
        )}
      </ul>
    </>
  );
}