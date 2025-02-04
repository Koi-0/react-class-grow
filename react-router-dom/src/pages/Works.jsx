import { Link, useLocation, useNavigate } from "react-router-dom";

const Works = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log("location", location);

    return (
        <div>
            <h1>Works 컴포넌트입니다.</h1>
            <div>현재 페이지 : {location.pathname.slice(1)}</div>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home으로 이동
            </button>
            <br />
            <Link to="/contact">contact 페이지로 이동하기</Link>
        </div>
    );
};

export default Works;
