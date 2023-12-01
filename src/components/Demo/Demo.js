import React, { useMemo } from "react";

const Demo = (props) => {
  // 자식 컴포넌트가 변경된다면
  // 상위 컴포넌트에서 props를 받아와서 변경점을 가져오는거기 떼문에
  // <p>태그는 살아있지만 랜더링하는 부분은 그 내부에서만 일어납니다.
  // 하지만 상위 컴포넌트에서 props를 관리하기에 App.js는 계속 re-rendering 되고 있습니다.

  // 부모 component들이 재실해되어서 jsx가 다시 출려고된다면 자식 component들은 전부 다시 랜더링 됩니다.
  // 하지만 실제 DOM에서는 아무것도 재 랜더링 되지 않습니다.
  console.log("Demo");
  const sortList = useMemo(() => {
    return props.isShow;
  }, [props.isShow]);
  return <p>{sortList && "Test param !"}</p>;
};

export default Demo;
