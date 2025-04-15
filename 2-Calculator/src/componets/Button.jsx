import React from "react";

const Button = ({text,onclickHandler}) => {
  return <button onClick={onclickHandler}>{text}</button>;
};

export default Button;
