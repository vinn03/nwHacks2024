// FormComponent.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Form, Link } from 'react-router-dom';
import { routeCalc } from './routecalc';

export default function RouteForm() {
    const [formData, setFormData] = useState({
        // Initialize your form fields here
        startingPoint: '',
        destination: '',
        gasConsumption: '',
        // Add more fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const startingPoint = formData.startingPoint;
        const destination = formData.destination;
        const gasConsumption = formData.gasConsumption;

        const routeRes = routeCalc(startingPoint, destination, gasConsumption);

        return routeRes; // Exporting the routeRes variable
    };

    return (
        <form>
            <h2>Starting Point:</h2>
            <TextField
                label="Enter a starting point address..."
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
                label="Enter a destination address..."
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
            <h2>Enter your vehicle's gas consumption:</h2>
            <TextField
                label="L/100km"
                name="gasConsumption"
                value={formData.gasConsumption}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                        backgroundColor: "white",
                        borderRadius: "15px",
                        width: "30vw",
                    }
                }}
            />
            <h3>
                Don't know your vehicle's gas consumption?
                Choose a generic value from the menu below.
            </h3>
            <RadioGroup
                name="gasConsumption"
                value={formData.gasConsumption}
                onChange={handleInputChange}
            >
                <FormControlLabel
                    value="8"
                    control={<Radio sx={{ fontSize: "10px" }} />}
                    label="Coupe: 8L/100km"
                />
                <FormControlLabel
                    value="10"
                    control={<Radio sx={{ fontSize: "10px" }} />}
                    label="Sedan: 10L/100km"
                />
                <FormControlLabel
                    value="14"
                    control={<Radio sx={{ fontSize: "10px" }} />}
                    label="Minivan: 14L/100km"
                />
                <FormControlLabel
                    value="16.5"
                    control={<Radio sx={{ fontSize: "10px" }} />}
                    label="SUV: 16.5L/100km"
                />
                <FormControlLabel
                    value="20"
                    control={<Radio sx={{ fontSize: "10px" }} />}
                    label="Pickup Truck: 20L/100km"
                />
            </RadioGroup>
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
        </form>
    );
}