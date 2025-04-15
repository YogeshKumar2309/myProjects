import React from "react";

const Display = ({ textToshow }) => {
  return(
    <>
       {textToshow ? <p>{textToshow}</p> : <p>0</p>}
    </>
  );
};

export default Display;
