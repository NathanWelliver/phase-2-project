import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function WorkoutForm({ setWorkouts }){
    const [formData, setFormData] = useState({
        name: "",
        reps: "",
        body: ""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        const newWorkout = {
            name: formData.name,
            reps: formData.reps,
            body: formData.body
        };

        fetch("http://localhost:3000/workouts", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newWorkout)
        })
        .then(r => r.json())
        .then(addedWorkout => {
            setWorkouts((workouts) => [...workouts, addedWorkout])
        })
        .then(setFormData({
            name: "",
            reps: "",
            body: ""
        }))
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="workout-name">
                <Form.Label>Workout Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Enter workout name"
                    value={formData.name}
                    onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="workout-reps">
                <Form.Label>Reps</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter # of sets x reps"
                    name="reps"
                    value={formData.reps}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="workout-body">
                <Form.Label>Body Part</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter target body part" 
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default WorkoutForm;