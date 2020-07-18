import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

/*
* React.FC는 props의 타입을 제너릭스로 넣어서 사용한다

장점
1. props에 기본적으로 children이 들어감


const Greetings: React.FC<GreetingsProps> = ({ name, mark, ...props }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

// App에서 값을 바로 넘겨주기 때문에 결과적으로 defaultProps가 의미가 없어짐 : React.FC를 쓰면 안되는 이유

// App에서 props를 안써서 안넘겨주면 에러가나버림. 그럴꺼면 defaultProps를 왜쓰니?
Greetings.defaultProps = {
  mark: "!",
};

그래서 이렇게 바꿔줄꺼야. ReactFC만 안쓰면됨 
*/

/*
결론적으로 REact.FC를 안쓰면 불러오는 컴포넌트에서 props를 생략해도 
defaultProps로 인해 넣어진다.

const Greetings = ({ name, mark }: GreetingsProps) => (
  <div>
    Hello, {name} {mark}
  </div>
);

화살표함수가 아닌 함수버전
*/

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
