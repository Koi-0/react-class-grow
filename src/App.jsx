// Custom hook

// import React from "react";
// import useInput from "./hooks/useInput";

// const App = () => {
//     // 우리가 만든 훅을 마치 원래 있던 훅인 것처럼 사용해 봅시다.
//     const [title, onChangeTitleHandler] = useInput();
//     const [body, onChangeBodyHandler] = useInput();

//     // // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//     // const [title, setTitle] = useState("");
//     // const onChangeTitleHandler = (e) => {
//     //     setTitle(e.target.value);
//     // };

//     // // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//     // const [body, setBody] = useState("");
//     // const onChangeBodyHandler = (e) => {
//     //     setBody(e.target.value);
//     // };

//     return (
//         <div>
//             <input type="text" name="title" value={title} onChange={onChangeTitleHandler} />
//             <input type="text" name="body" value={body} onChange={onChangeBodyHandler} />
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useMemo

// 동일한 값을 반환하는 함수를 계속 호출해야 하면 필요없는 렌더링을 한다고 볼 수 있다.
// 맨 처음 해당 값을 반환할 때 그 값을 특별한 곳(메모리)에 저장한다.
// 이렇게 하면 필요할 때마다 다시 함수를 호출해서 계산하는게 아니라 이미 저장한 값을 단순히 꺼내와서 사용할 수 있다.
// 보통 이러한 기법을 "캐싱을 한다."" 라고 표현하기도 한다.
// 특히 복잡한 계산 결과값을 memoization할 때 많이 사용한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useMemo 사용 방법

// as-is
// const value = 반환할_함수();

// to-be
// const value = useMemo(() => {
//     return 반환할_함수();
// }, [dependencyArray]);

// dependency Array의 값이 변경될 때만 반환할_함수()가 호출된다.
// 그 외의 경우에는 memoization 해놨던 값을 가져오기만 한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// import HeavyComponent from "./components/HeavyComponent";

// const App = () => {
//     const navStyleObj = {
//         backgroundColor: "yellow",
//         marginBottom: "30px",
//     };

//     const footerStyleObj = {
//         backgroundColor: "green",
//         marginTop: "30px",
//     };

//     return (
//         <>
//             <h1>useMemo</h1>
//             <br />
//             <nav style={navStyleObj}>네비게이션 바</nav>
//             <HeavyComponent />
//             <footer style={footerStyleObj}>푸터 영역이에요</footer>
//         </>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 1. 리-렌더링의 발생 조건

// 1-1) 컴포넌트에서 state가 바뀌었을 때
// 1-2) 컴포넌트가 내려받은 props가 변경되었을 때
// 1-3) 부모 컴포넌트가 리-렌더링 된 경우 자식 컴포넌트는 모두

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 2. 최적화

// 2-1) memo(React.memo) : 컴포넌트를 캐싱
// 2-2) useCallback : 함수를 캐싱
// 2-3) useMemo : 값을 캐싱

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 3. memo(React.memo)

// 3-1) memo란?
// 리-렌더링의 발생 조건 중 3번째 경우
// 즉, 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트는 모두 리렌더링 된다는 것

// 3-2) ex :
// 자식 컴포넌트의 입장에서는 “나는 바뀐게 없는데 왜 다시 렌더링이 되지?” 라고 할 수 있다.
// 즉, 이 부분을 돕는 도구가 바로 React.memo이다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 4. memo(React.memo)를 통해 해결해보기

// 우리는 정말 간단히 React.memo를 이용해서 컴포넌트를 메모리에 저장해두고 필요할 때 갖다 쓰게 된다.
// 이렇게 하면 부모 컴포넌트의 state의 변경으로 인해 props의 변경이 일어나지 않는 한, 자식 컴포넌트는 리렌더링 되지 않는다.
// 이것을 컴포넌트 memoization 이라고 한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 5. useCallback

// 5-1) useCallback이란?
// React.memo는 컴포넌트를 메모이제이션 했다면,
// useCallback은 인자로 들어오는 함수 자체를 기억(메모이제이션) 한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// import React, { useState } from "react";
// import Box1 from "./components/Box1";
// import Box2 from "./components/Box2";
// import Box3 from "./components/Box3";
// import { useCallback } from "react";

// const boxesStyle = {
//     display: "flex",
//     marginTop: "10px",
// };

// function App() {
//     console.log("App 컴포넌트가 렌더링되었습니다!");

//     const [count, setCount] = useState(0);

//     // 1을 증가시키는 함수
//     const onPlusButtonClickHandler = () => {
//         setCount(count + 1);
//     };

//     // 1을 감소시키는 함수
//     const onMinusButtonClickHandler = () => {
//         setCount(count - 1);
//     };

//     // count를 초기화해주는 함수
//     const initCount = useCallback(() => {
//         console.log(`[COUNT 변경] ${count}에서 0으로 변경되었습니다.`);
//         setCount(0);
//     }, [count]);

//     return (
//         <>
//             <h3>카운트 예제입니다!</h3>
//             <br />
//             <p>현재 카운트 : {count}</p>
//             <br />
//             <button onClick={onPlusButtonClickHandler}>+</button>
//             <button onClick={onMinusButtonClickHandler}>-</button>
//             <div style={boxesStyle}>
//                 <Box1 initCount={initCount} />
//                 <Box2 />
//                 <Box3 />
//             </div>
//         </>
//     );
// }

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// import GrandFather from "./components/GrandFather";

// const App = () => {
//     return (
//         <div>
//             <h1>Context API</h1>
//             <br />
//             <GrandFather />
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useRef

// import React, { useEffect, useRef } from "react";

// const App = () => {
//     const idRef = useRef("");

//     // 최초 렌더링 시
//     useEffect(() => {
//         idRef.current.focus();
//     }, []);

//     return (
//         <div>
//             <div>
//                 아이디 : <input type="text" ref={idRef} />
//             </div>
//             <div>
//                 비밀번호 : <input type="password" />
//             </div>
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// import React, { useRef, useState } from "react";

// const App = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(0);

//     const plusStateCountButtonHandler = () => {
//         setCount(count + 1);
//     };

//     const plusRefCountButtonHandler = () => {
//         countRef.current++;
//     };

//     return (
//         <div>
//             <h1>useState VS useRef</h1>
//             <br />
//             <div>
//                 State 영역입니다. {count}
//                 <br />
//                 <button onClick={plusStateCountButtonHandler}>State 증가</button>
//             </div>
//             <br />
//             <div>
//                 Ref 영역입니다. {countRef.current}
//                 <br />
//                 <button onClick={plusRefCountButtonHandler}>Ref 증가</button>
//             </div>
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useEffect

// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//     const [value, setValue] = useState("");
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         // useEffect는 렌더링이 된 이후에 useEffect가 속한 컴포넌트가 실행된다.
//         console.log("hello useEffect");
//     }, [count]);

//     return (
//         <div>
//             <h1>useEffect</h1>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => {
//                     setValue(e.target.value);
//                 }}
//             />
//             <br />
//             {count}
//             <button
//                 onClick={() => {
//                     setCount(count + 1);
//                 }}
//             >
//                 증가
//             </button>
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 의존성 배열(dependency array) : 배열에 해당 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useState

// import { useState } from "react";
// import Child from "./components/Child";

// const App = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>여기는 부모 컴포넌트입니다.</h1>
//             <span>현재 카운트 : {count}</span>
//             <Child setCount={setCount} />
//         </div>
//     );
// };

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useState 기본적인 형태
// useState 함수가 배열을 반환하고, 이것을 구조 분해 문법으로 꺼내놓은 모습이다.
// const [state, setState] = useState(initialState);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 기존에 우리가 사용하던 방식
// setState(number + 1);

// 함수형 업데이트 방식
// setState(() => {});

// 예시
// 현재 number의 값을 가져와서 그 값에 +1을 더하여 반환한 것이다.
// setState((currentNumber) => {
//     return currentNumber + 1;
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 차이점
// 일반 업데이트 방식 : onClick을 했을 때 setNumber 라는 명령을 세 번 내리지만, React는 그 명령을 하나로 모아 최종적으로 한 번만 실행시킨다.
// 함수형 업데이트 방식 : 세 번을 동시에 명령을 내리면, 그 명령을 모아 순차적으로 각각 한 번씩 실행시킨다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
