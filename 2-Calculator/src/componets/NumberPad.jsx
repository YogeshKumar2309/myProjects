import React from "react";
import Button from "./Button";

const NumberPad = ({displayVal , setDisplayVal}) => {

  const btns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const btns2 = ["+", "-", "*", "/","."];


  const addToDisplay = (text) =>{
    setDisplayVal(displayVal + text);
  }
  const eveluateExpression = () => {
    setDisplayVal(eval(displayVal));
  }
  
  return (
    <>
    {<Button text="C" onclickHandler={() => setDisplayVal('')}/>}
      {btns.map((text) => <Button key={text} text={text} onclickHandler={() => addToDisplay(text)}/>)}
      {btns2.map((text) => <Button key={text} text={text} onclickHandler={() => addToDisplay(text)}/>)}
      {<Button text="=" onclickHandler={eveluateExpression}/>}
    
    </>
  );
};

export default NumberPad;
