import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home 컴포넌트입니다.</h1>
            <button
                onClick={() => {
                    navigate("/works");
                }}
            >
                works로 이동
            </button>
        </div>
    );
};

export default Home;
