// 액션 value를 상수들로 만든다. 보통 이렇게 한 곳에 모여있다.
// const PLUS_ONE = "PLUS_ONE"; // value는 대문자로 생성
// const MINUS_ONE = "MINUS_ONE";
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

// export가 붙는 이유는 밖으로 나가서 사용될 예정이기 때문이다.
// export const plusOne = () => {
//     return {
//         type: PLUS_ONE, // type에는 위에서 만든 상수 사용
//     };
// };

// export const minusOne = () => {
//     return {
//         type: MINUS_ONE,
//     };
// };

// payload가 필요한 Action Creator에서는 함수를 선언할 때 매개변수 자리에 paylaod를 넣어야 한다.
// 그 이유는 Action Creator를 사용하는 컴포넌트에서 리듀서로 보내고자 하는 payload를 인자로 넣어줘야 하기 때문이다.
// 즉, 인자로 payload를 넣어줌으로써 Action Creator가 Action 객체를 생성할 때 payload를 같이 담아 생성하는 원리이기 때문이다.

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    };
};

export const removeNumber = (payload) => {
    return {
        type: REMOVE_NUMBER,
        payload,
    };
};

// 초기 상태값
const initialState = {
    number: 0,
};

// 우리가 useState를 사용했을 때 괄호 안에 초기값을 지정해주던 것과 같은 이치이다.
// const [number, setNumber] = useState(0) < 여기

// 리듀서(변화를 일으키는 함수)
const counter = (state = initialState, action) => {
    console.log("action", action);

    switch (action.type) {
        // case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어준다.
        //     return { number: state.number + 1 };
        // case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어준다.
        //     return { number: state.number - 1 };
        case ADD_NUMBER:
            // state.number(기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
            return { number: state.number + action.payload };
        case REMOVE_NUMBER:
            // state.number(기존의 nubmer)에 action.paylaod(유저가 빼길 원하는 값)을 뺀다.
            return { number: state.number - action.payload };
        default:
            return state;
    }
};

// const onClickHandler = () => {
// 	setNumber(number + 1); // setState를 이용해서 state 변경
// }

// 모듈 파일에서 리듀서를 export default한다.
export default counter;
