import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
    display: flex;
`;

const StBox = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.borderColor};
    margin: 20px;
`;

// 박스의 색을 배열에 담는다.
const boxList = ["red", "green", "blue"];

const getBoxName = (color) => {
    let boxName;
    switch (color) {
        case "red":
            boxName = "빨간 박스";
            break;
        case "green":
            boxName = "초록 박스";
            break;
        case "blue":
            boxName = "파란 박스";
            break;
        default:
            boxName = "검정 박스";
            break;
    }
    return boxName;
};

const App = () => {
    return (
        <StContainer>
            {/* map을 이용해서 StBox를 반복하여 화면에 그린다. */}
            {boxList.map((box) => (
                <StBox borderColor={box}>{getBoxName(box)}</StBox>
            ))}
        </StContainer>
    );
};

export default App;
