import React, { useMemo, useState } from "react";

const HeavyComponent = () => {
    const [value, setValue] = useState(0);

    const heavyWork = () => {
        for (let i = 0; i < 1000000000; i++) {}
        return 100;
    };

    // CASE 1 : useMemo를 사용하지 않았을 때
    // const sampleValue = heavyWork();

    // CASE 2 : useMemo를 사용했을 때
    const sampleValue = useMemo(() => heavyWork(), []);

    return (
        <div>
            <p>나는 {sampleValue}를 가져오는 엄청 무거운 작업을 하는 컴포넌트야!</p>
            <br />
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                누르면 아래 count가 올라가요!
            </button>
            <br />
            {value}
        </div>
    );
};

export default HeavyComponent;
