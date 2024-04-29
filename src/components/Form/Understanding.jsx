import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Understanding() {
  const [displayUnderstanding, setDisplayUnderstanding] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputUnderstanding = parseInt(displayUnderstanding);
    if (!isNaN(inputUnderstanding) && inputUnderstanding !== 0) {
      dispatch({ type: "SET_UNDERSTANDING", payload: inputUnderstanding });
      navigate("/support");
    } else {
      alert("Please select an understanding value.");
    }
  };

  const handleChange = (e) => {
    setDisplayUnderstanding(e.target.value);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <h3>Understanding</h3>
        <TextField
          label="Understanding"
          type="number"
          value={displayUnderstanding}
          onChange={handleChange}
          fullWidth
          inputProps={{ "data-testid": "input" }}
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

export default Understanding;
