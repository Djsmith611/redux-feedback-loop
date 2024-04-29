import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Comments() {
    const [isValid, setIsValid] = useState(false);
    const [displayComments, setDisplayComments] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const inputComments = e.target.value;
        setDisplayComments(inputComments);
        setIsValid(inputComments.trim() !== "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            dispatch({ type: "SET_COMMENTS", payload: displayComments });
            navigate("/review");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <form onSubmit={handleSubmit}>
                <h2>Any comments you want to leave?</h2>
                <TextField
                    data-testid="input"
                    label="Comments"
                    type="text"
                    value={displayComments}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                        inputProps: {
                            "aria-label": "comments",
                        },
                    }}
                />
                <Button
                    data-testid="next"
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Next
                </Button>
            </form>
        </Box>
    );
}

export default Comments;