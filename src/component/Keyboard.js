import React from "react";
import { useDispatch } from "react-redux";

const Keyboard = ({chageKr}) => {
  const keyboardNum = [1,2,3,4,5,6,7,8,9,0,"-","+"];
  const keyboardInput = (num) =>{
    dispatch({type:"KEYBOARDNUM",payload:{num}})
  }

  const userKeyR3 = ["","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",""];
  const userKeyR2 = ["","A", "S", "D", "F", "G", "H", "J", "K", "L","",""];
  const userKeyR1 = ["","","Z", "X", "C", "V", "B", "N", "M","","",""];
  
  const userKeykrR3 = ["","ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ",""];
  const userKeykrR2 = ["","ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ","ㅓ","ㅏ","ㅣ","",""];
  const userKeykrR1 = ["","","ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","","",""];

  const changeLayout = () =>{
    if(chageKr == true){
        return{
            row1: userKeykrR3,
            row2: userKeykrR2,
            row3: userKeykrR1
        }
    } else {
        return{
            row1: userKeyR3,
            row2: userKeyR2,
            row3: userKeyR1 
        }
    }
  }

  const keyboardLayout =changeLayout();

  const dispatch = useDispatch();
  const userInput = (key) => {
    if(key){
        dispatch({ type: "INPUTR3", payload: { key } });
    }
  };
  return (
    <div>
      <div className='keyboard-num'>
        {keyboardNum.map((num,index)=>(
          <button key={index} onClick={()=>keyboardInput(num)}>{num}</button>
        ))}
      </div>
      <div className="keyboard-input">
      {keyboardLayout.row1.map((key,index) => (
          <button key={index} onClick={() => userInput(key)} disabled={key === ""}>
            {key}
          </button>
        ))}
      </div>

      <div className="keyboard-input">
        {keyboardLayout.row2.map((key,index) => (
          <button key={index} onClick={() => userInput(key)} disabled={key === ""}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-input">
        {keyboardLayout.row3.map((key,index) => (
          <button key={index} onClick={() => userInput(key)} disabled={key === ""}>
            {key}
          </button>
        ))}

      </div>
      
    </div>
  );
};

export default Keyboard;
