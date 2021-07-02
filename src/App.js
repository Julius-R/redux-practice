import logo from './logo.svg';
import './App.css';
import { updateWord } from './redux/Actions/wordAction';
import { increment, decrement } from './redux/Actions/countAction';
import { useSelector, useDispatch } from 'react-redux';

function Words(){
  const maxCount = 100;
  const dispatch = useDispatch();
  const word = useSelector(state => state.word)
  return(
    <>
      Word: {word.phrase}
      Count: {word.letterCount}/{maxCount}
      <input style={{borderColor: word.letterCount <= maxCount ? "green" : "red"}} onChange={(e) => {
        dispatch(updateWord(e.target.value))
      }} />
    </>
  )
}

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count)
  return (
    <>
    {count}
    <button onClick={() => {
      dispatch(decrement())
    }}>-</button>
    <button onClick={() => {
      dispatch(increment())
    }}>+</button>
    </>
  )
  
}

function App() {
  
  return (
    <div className="App">
      <Counter/>
      <Words />
    </div>
  );
}

export default App;
