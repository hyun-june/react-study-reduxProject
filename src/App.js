import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';
import Keyboard from './component/Keyboard';
import { useState } from 'react';

function App() {
  const [chageKr,setChageKr] = useState(false) // false면 => 영어, true => 한국어
  const dispatch = useDispatch();
  const inputReset = () =>{
    dispatch({type:"INPUTRESET"})
  }
  const changeLanguage = () =>{
    setChageKr(!chageKr)
  }

  return (
    <div className='container'>
      <Box />
      <div className='keyboard-section'>
        <Keyboard chageKr={chageKr} />
        <div className='button-section'>
          <button onClick={()=>inputReset()}>지우기</button>
          <button onClick={()=>changeLanguage()}>{chageKr ? "EN" : "KR"}</button>
        </div>
      </div>

    </div>
  );
}

export default App;
