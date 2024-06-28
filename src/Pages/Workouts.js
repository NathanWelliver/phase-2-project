import React from "react";
import WorkoutCard from "../Components/WorkoutCard";
import { Accordion } from "react-bootstrap";
import WorkoutForm from "../Components/WorkoutForm";
import { useOutletContext } from "react-router-dom";


function About() {
  const {workouts, setWorkouts} = useOutletContext();

const workoutList = workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}/>)

    return (
      <div className="about">
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
          <div>{workoutList}</div>
        </main>
      </div>
    );
  };
  
  export default About;