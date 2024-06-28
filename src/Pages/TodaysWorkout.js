import React from "react";
import {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";

/* 
Rename components for whats in them,
make the workout form a controlled componenet,
put state for workout in the main app.js file and pass them down, 
only one fetch request should be made,
pass the data down through outlet context.
remove date state and assign date to a javascript variable.
look into making a seperate callback function for the workoutform sumbission/ update state.
*/

function Home(){
    const [workout, setWorkout] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const {workouts} = useOutletContext();

    const date = new Date();

    useEffect(() => {
        const day = date.getDay();
        let recommendedBodyPart = '';
        if (day === 1 || day === 4) {
            recommendedBodyPart = "Lower Body";
        } else if (day === 2 || day === 5){
            recommendedBodyPart = "Upper Body";
        } else {
            recommendedBodyPart = "Rest Day";
        }

        setBodyPart(recommendedBodyPart);

        const filteredWorkouts = workouts.filter(workout => workout.body === recommendedBodyPart);
        const randomWorkout = filteredWorkouts[Math.floor(Math.random() * filteredWorkouts.length)];

        if (randomWorkout){
            setWorkout(randomWorkout.name + '(' + randomWorkout.reps + ')');
        }
    }, [date, workouts]);

    return (
        <div className="home">
            <main>
                <h1 className="welcome-header">Welcome!</h1>
                    <h2 className="today">
                        Today is: <span className="date">{date.toDateString()}</span>
                    </h2>
                <h3 className="rec-workouts">
                <div>
                    {bodyPart !== 'Rest Day' ? (
                        <>
                            <p>Recommended Workout: {bodyPart}</p>
                            <p>Random workout to try: {workout}</p>
                        </>
                    ) : (
                        <p>Today is a rest day. Enjoy your rest!</p>
                    )}
                </div>
                </h3>
            </main>
        </div>
    )
}

export default Home;