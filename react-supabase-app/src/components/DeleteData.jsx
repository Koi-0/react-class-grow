import { useState } from "react";
import supabase from "../supabaseClient";

const DeleteData = () => {
    const [targetId, setTargerId] = useState(0);

    const handleDelete = async () => {
        const { error } = await supabase.from("NBCAMP_SAMPLE").delete().eq("id", targetId);

        if (error) {
            console.log("error =>", error);
        } else {
            alert("해당 아이디의 정보를 정상적으로 삭제했습니다.");
            console.log("targetId =>", targetId);
        }
    };

    const deleteData = {
        border: "1px solid black",
    };

    return (
        <div style={deleteData}>
            <h1>Delete Data</h1>
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
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
};

export default DeleteData;
