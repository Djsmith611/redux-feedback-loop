import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function FormComprehension() {
    const [comprehension, setComprehension] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comprehension !== null) {
            let action = {
                type:"SET_COMPREHENSION",
                payload:comprehension,
            }
            dispatch(action);
            navigate("/form/support");
        } else {
            alert("Please select a comprehension value.");
        }
    }

    const handleChange = (e) => {
        setComprehension(e.target.value)
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="number" value={comprehension} onChange={handleChange}  />
            <button type="submit">Next</button>
        </form>
    )
}
export default FormComprehension;