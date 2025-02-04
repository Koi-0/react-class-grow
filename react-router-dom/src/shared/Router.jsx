// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 한다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
// import Layout from "./Layout";
import DashboardLayout from "./DashboardLayout";
import MyPage from "../pages/MyPage";
import Test from "../pages/Test";

// 2. Router라는 함수를 만들고 아래와 같이 작성한다.
// BrowserRouter를 Router로 감싸는 이유는,
// SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어준다!
const Router = () => {
    return (
        <BrowserRouter>
            {/* <Layout> */}
            <Routes>
                {/* Routes 안에 이렇게 작성한다. 
                    Route에는 react-router-dom에서 지원하는 props들이 있다.
                    path는 우리가 흔히 말하는 사용하고 싶은 "주소"를 넣어주면 된다.
                    element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어준다. */}
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="works" element={<Works />} />
                <Route path="works/:id" element={<Works />} />
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="test" element={<Test />} />
                </Route>
            </Routes>
            {/* </Layout> */}
        </BrowserRouter>
    );
};

export default Router;
