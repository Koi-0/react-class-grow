import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";

// 1. createStore()
// 리덕스의 가장 핵심이 되는 스토어를 만드는 메서드(함수)이다.
// 리덕스는 단일 스토어로 모든 상태 트리를 관리한다.
// 리덕스를 사용할 시 creatorStore를 호출할 일은 단 한 번 뿐이다.

// 2. combineReducers()
// 리덕스는 action —> dispatch —> reducer 순서로 동작한다.
// 이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생한다.
// combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어 준다.

// 1) rootReducer 생성
const rootReducer = combineReducers({
    counter,
});

// 2) store 생성
const store = createStore(rootReducer);

// 3) 생성한 store 내보내기
export default store;
