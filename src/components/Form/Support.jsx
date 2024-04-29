import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Support() {
    const [displaySupport, setDisplaySupport] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputSupport = parseInt(displaySupport);
        if (!isNaN(inputSupport) && inputSupport !== 0) {
            dispatch({ type: "SET_SUPPORT", payload: inputSupport });
            navigate("/comments");
        } else {
            alert("Please select a support value.");
        }
    };

    const handleChange = (e) => {
        setDisplaySupport(e.target.value);
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <form onSubmit={handleSubmit}>
                <h3>How well are you being supported?</h3>
                <TextField
                    data-testid="input"
                    label="Support"
                    type="number"
                    value={displaySupport}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                        inputProps: {
                            "aria-label": "support",
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

export default Support;