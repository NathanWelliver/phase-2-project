import React from "react";


function WorkoutCard({workout}) {
    return (
        <article>
            <h2>{workout.name}</h2>
            <h4>{workout.reps}</h4>
            <h4>{workout.body}</h4>
        </article>
    )
}

export default WorkoutCard;