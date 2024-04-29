import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function FeedbackResponses() {
  const [feedbackResponses, setFeedbackResponses] = useState([]);

  useEffect(() => {
    fetchFeedbackResponses();
  }, []);

  const fetchFeedbackResponses = () => {
    axios.get('/api/feedback')
      .then(response => {
        setFeedbackResponses(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback responses:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/feedback/${id}`)
      .then(response => {
        console.log('Feedback response deleted successfully:', response.data);
        fetchFeedbackResponses();
      })
      .catch(error => {
        console.error('Error deleting feedback response:', error);
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
            <TableCell></TableCell> {/* Empty cell for the delete button */}
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbackResponses.map(response => (
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
}

export default FeedbackResponses;