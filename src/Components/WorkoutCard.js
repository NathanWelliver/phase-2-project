import React from "react";
import Accordion from "react-bootstrap/Accordion"

function WorkoutCard({workout}) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{workout.name}</Accordion.Header>
                <Accordion.Body>
                Reps: {workout.reps} 
                <br/>
                Body Section: {workout.body}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default WorkoutCard;