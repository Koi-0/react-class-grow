import React from "react";
import GrandFather from "./components/GrandFather";

const App = () => {
    return (
        <div>
            <h1>Context API</h1>
            <br />
            <GrandFather />
        </div>
    );
};

export default App;

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
