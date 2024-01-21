// FormComponent.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../css/routeform.css"
import { Link } from 'react-router-dom';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    startingPoint: '',
    destination: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Send the form data to the backend
    // You can use Axios or Fetch API for this purpose
    fetch('/api/submitFormData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, if needed
      });
    
  };

  return (
    <form>
      <h2>Starting Point:</h2>
      <TextField
        label="Enter a starting point..."
        name="startingPoint"
        value={formData.startingPoint}
        onChange={handleInputChange}
        InputProps={{
            style: {
                backgroundColor: "white",
                borderRadius: "15px",
                width: "30vw",
            }
        }}
      />
      <h2>Destination:</h2>
      <TextField
        label="Enter a destination..."
        name="destination"
        value={formData.destination}
        onChange={handleInputChange}
        InputProps={{
            style: {
                backgroundColor: "white",
                borderRadius: "15px",
                width: "30vw",
            }
        }}
      />
      {/* Add more input fields as needed */}
      <div id="submit-container">
        <Link to="/nav">
            <Button 
                variant="contained" 
                onClick={handleSubmit}
                sx={{
                    backgroundColor: "#528a8c",
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "20px",
                }}
            >
                Submit
            </Button>
        </Link>
      </div>
    </form>
  );
};

export default FormComponent;
