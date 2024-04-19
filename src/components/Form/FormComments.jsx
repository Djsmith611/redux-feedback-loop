import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function FormComments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment !== '') {
           let action = {
            type:"SET_COMMENTS",
            payload:comment
            };
            dispatch(action); 
        }
        navigate('/form/review');
    }
    const handleChange = (e) => {
        setComment(e.target.value);
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={comment} onChange={handleChange} />
            <button type="submit">Next</button>
        </form>
    )
}
export default FormComments;