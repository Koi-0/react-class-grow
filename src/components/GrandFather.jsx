import React from "react";
// import Father from "./Father";
import Child from "./Child";
import { FamilyContext } from "../context/FamilyContext";

const GrandFather = () => {
    const houseName = "스파르타";
    const pocketMoney = 10000;

    return (
        <FamilyContext.Provider value={{ houseName, pocketMoney }}>
            {/* <Father /> */}
            <Child /> {/* GrandFather → useContext(중앙 관리소) → Child */}
        </FamilyContext.Provider>
    );
};

export default GrandFather;
