import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function FormFeeling() {
    const [feeling, setFeeling] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feeling !== null) {
            let action = {
                type:"SET_FEELING",
                payload:feeling,
            }
            dispatch(action);
            navigate("/form/comments");
        } else {
            alert("Please select a feeling value.");
        }
    }
    const handleChange = (e) => {
        setFeeling(e.target.value);
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="number" value={feeling} onChange={handleChange}  />

        </form>
    )
}
export default FormFeeling;