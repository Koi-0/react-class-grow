import { useState } from "react";
import supabase from "../supabaseClient";

const UpdateData = () => {
    const [targetId, setTargerId] = useState(0);
    const [address, setAddress] = useState("");

    const handleUpdate = async () => {
        const { error } = await supabase.from("NBCAMP_SAMPLE").update({ address }).eq("id", targetId);

        if (error) {
            console.log("error =>", error);
        } else {
            alert("주소가 정상적으로 변경되었습니다.");
            console.log("address =>", address);
        }
    };

    const updateData = {
        border: "1px solid blue",
    };

    return (
        <div style={updateData}>
            <h1>Update Data</h1>
            <div>
                아이디 : {""}
                <input
                    type="number"
                    value={targetId}
                    onChange={(e) => {
                        setTargerId(e.target.value);
                    }}
                />
            </div>
            <div>
                변경할 주소 : {""}
                <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
            </div>
            <button onClick={handleUpdate}>변경</button>
        </div>
    );
};

export default UpdateData;
