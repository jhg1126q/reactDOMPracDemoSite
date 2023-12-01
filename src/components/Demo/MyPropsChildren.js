import React from "react";

const MyPropsChildren = (props) => {
  console.log("Children 테스트");

  // 연결된 컴포넌트들이 계속 연속적으로 재실행된다면 낭비
  // 그러므로 React.memo 를 사용하여 효율적으로 랜더링 하도록 합니다
  // 하지만 memo를 사용하게 된다면 랜더링 하는것 대신
  // props를 비교하게 됩니다. 즉 props 비교와 render하는 것을 바꾸어서 하는 경우 입니다.

  // 컴포넌트 트리의 크기와 상위 컴포넌트에서 시작되는 re-Rendering 을 막을수 있다면
  // memo는 효율적인 선택이 될 수 있습니다.
  // 즉 비효율적인 가지를 잘라낸다는 점에서 좋은 선택이 됩니다.
  return <p>{props.children}</p>;
};

export default React.memo(MyPropsChildren);
