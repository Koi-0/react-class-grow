import React from "react";
import styled from "styled-components";

// 1. styled-components 만들기
const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
    margin: 20px;
`;

const App = () => {
    return (
        <div>
            {/* 2. 그리고 위에서 만든 styled-components를 사용했습니다. */}
            {/* 3. 그리고 props를 통해 borderColor라는 값을 전달했습니다. */}
            <StBox borderColor="red">빨간 박스</StBox>
            <StBox borderColor="green">초록 박스</StBox>
            <StBox borderColor="blue">파랑 박스</StBox>
        </div>
    );
};

export default App;
