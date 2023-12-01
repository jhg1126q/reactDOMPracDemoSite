import React, { useEffect, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";
import MyPropsChildren from "./components/Demo/MyPropsChildren";

function App() {
  // useState 를 App에서 사용했기 때문에 계속 re-rendering 이 되고 있다.
  // 컴포넌트 전체를 다시 실행한다
  // 하지만 실제 DOM에서 확인해보면 div id=app 에서 <p>태그가 추가되고 삭제될 때는 <p>태그만 사라진다.
  console.log("App rendering :::: ");

  const [testParam, setTestParam] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleHandler = () => {
    if (allowToggle) {
      setTestParam((testParam) => !testParam);
    }
  };

  //useCallBack(() => {
  //   if (allowToggle) {
  //     setTestParam((testParam) => !testParam);
  //   }
  // }, [allowToggle]);

  const toggleAllowHandler = () => {
    setAllowToggle(true);
  };

  useEffect(() => {
    setTestParam(true);
  }, []);

  //{testParam && <p>Test Param is here</p>}

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo isShow={testParam}></Demo>
      <MyPropsChildren>{"테스트"}</MyPropsChildren>

      <Button onClick={toggleHandler}>클릭</Button>
      <Button onClick={toggleAllowHandler}>000</Button>
    </div>
  );
}

export default App;
