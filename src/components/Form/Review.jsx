import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Review() {
    const { feeling, understanding, support, comments } = useSelector((store) => store.userInput);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        const data = { feeling, understanding, support, comments };
        axios
            .post("/api/feedback", data)
            .then((res) => {
                dispatch({ type: "RESET" });
                navigate('/thank');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Review Your Feedback
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#2196f3", color: "white" }}>
                            <TableCell>Field</TableCell>
                            <TableCell>Response</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell>Feeling</TableCell>
                            <TableCell>{feeling}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>Understanding</TableCell>
                            <TableCell>{understanding}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>Support</TableCell>
                            <TableCell>{support}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>Comments</TableCell>
                            <TableCell>{comments}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 4 }}>
                <Button
                    data-testid="next"
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default Review;