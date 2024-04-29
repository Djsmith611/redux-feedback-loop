import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

/**
 * Function to render a table of all responses
 * @returns a page for the admin view of the website
 */
export default function AdminView() {
  const [feedback, setFeedback] = useState([]); // Empty array to contain all feedback objects in state
  /**
   * Calls to GET feedback on page load
   */
  useEffect(() => {
    fetchFeedback();
  }, []);

  /**
   * Will load all feedback objects into the empty array
   */
  const fetchFeedback = () => {
    axios
      .get("/api/feedback")
      .then((response) => {
        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback :", error);
      });
  };

  /**
   * removes item from database
   * @param {number} id of row to be deleted from database
   */
  const handleDelete = (id) => {
    axios
      .delete(`/api/feedback/${id}`)
      .then((response) => {
        // console.log("Feedback response deleted successfully:", response.data);
        fetchFeedback();
      })
      .catch((error) => {
        console.error("Error deleting feedback response:", error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feeling</TableCell>
            <TableCell>Understanding</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Modify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedback.map((response) => (
            <TableRow key={response.id}>
              <TableCell>{response.feeling}</TableCell>
              <TableCell>{response.understanding}</TableCell>
              <TableCell>{response.support}</TableCell>
              <TableCell>{response.comments}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(response.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
