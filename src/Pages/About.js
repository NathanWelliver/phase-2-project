import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import WorkoutCard from "../Components/WorkoutCard";
import { Accordion } from "react-bootstrap";
import WorkoutForm from "../Components/WorkoutForm";

function About() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/workouts")
    .then(r => r.json())
    .then(data => setWorkouts(data))
    .catch(error => console.log(error))
}, [])

const workoutList = workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}/>)

    return (
      <>
      <header>
        <NavBar />
      </header>
        <main>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add a new Workout!</Accordion.Header>
              <Accordion.Body>
                <WorkoutForm setWorkouts={setWorkouts}/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h1>Workouts:</h1>
          {workoutList}
        </main>
      </>
    );
  };
  
  export default About;