import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Feeling() {
    const [displayFeeling, setDisplayFeeling] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputFeeling = parseInt(displayFeeling);
        if (!isNaN(inputFeeling) && inputFeeling !== 0) {
            dispatch({ type: "SET_FEELING", payload: inputFeeling });
            navigate("/understanding");
        } else {
            alert("Please select a feeling value.");
        }
    };

    const handleChange = (e) => {
        setDisplayFeeling(e.target.value);
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <form onSubmit={handleSubmit}>
                <h3>How are you feeling today?</h3>
                <TextField
                    label="Feeling"
                    type="number"
                    value={displayFeeling}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                        inputProps: {
                            "data-testid": "input",
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

export default Feeling;