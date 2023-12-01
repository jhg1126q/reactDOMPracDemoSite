import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  // 만약 button에서 React memo를 사용한다면 배열 비교가 되어지기에
  // 데이터 비교를 할때 다르다고 나오게 됩니다.

  // [1,2,3,4] === [1,2,3,4] 는 false
  // props.activeFunction === props.previous.activeFunction 은 false
  // 그러므로 React Memo의 props비교가 계속 진행됩니다.
  console.log("Btn Active");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
