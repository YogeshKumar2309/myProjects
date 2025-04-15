import React, { useState } from "react";
import Display from "./componets/Display";
import NumberPad from "./componets/NumberPad";
import Button from "./componets/Button";

const App = () => {
  const [displayVal , setDisplayVal] = useState('');
  return (
    <>
      <h1>Calculator</h1>
      <Display textToshow={displayVal} />
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal}/>
    </>
  );
};

export default App;
