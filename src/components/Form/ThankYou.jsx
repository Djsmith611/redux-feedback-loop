import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ThankYou() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Thank You!
            </Typography>
            <Button
                data-testid="next"
                onClick={handleClick}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4 }}
            >
                Leave New Feedback
            </Button>
        </Box>
    );
}

export default ThankYou;