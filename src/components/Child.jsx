// useContext

import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

const Child = () => {
    const stressedWord = {
        color: "red",
        fontWeight: "bold",
    };

    const { houseName, pocketMoney } = useContext(FamilyContext);

    return (
        <div>
            나는 우리 집안의 막내입니다.
            <br />
            할아버지께서 우리 집 이름은 <span style={stressedWord}>{houseName}</span>
            라고 하셨습니다.
            <br />
            게다가 용돈도 <span style={stressedWord}>{pocketMoney}</span>원 만큼이나 주셨습니다.
        </div>
    );
};

export default Child;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// useState

// const Child = ({ setCount }) => {
//     return (
//         <div>
//             <br />
//             <h3>여기는 자식 컴포넌트입니다.</h3>
//             <button
//                 onClick={() => {
//                     setCount((prev) => prev + 1);
//                 }}
//             >
//                 + 증가
//             </button>
//         </div>
//     );
// };

// export default Child;
