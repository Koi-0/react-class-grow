const Child = ({ setCount }) => {
    return (
        <div>
            <br />
            <h3>여기는 자식 컴포넌트입니다.</h3>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                + 증가
            </button>
        </div>
    );
};

export default Child;
