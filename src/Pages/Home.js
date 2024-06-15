import NavBar from "../Components/NavBar"
import WorkoutOfDay from "../Components/WorkoutOfDay"
import DateComponent from "../Components/DateComponent"
import React from "react";
import {useState, useEffect} from "react"

function Home(){
    const [date, setDate] = useState(new Date());
    const [workout, setWorkout] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => setWorkouts(data))
        .catch(error => console.log(error))
    }, [])

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
            <header>
                <NavBar />
            </header>
            <main>
                <h1 className="welcome-header">Welcome!</h1>
                    <h2 className="today">
                        Today is: <DateComponent date={date}/>
                    </h2>
                <h3 className="rec-workouts">
                    <WorkoutOfDay 
                        bodyPart={bodyPart}
                        workout={workout}
                    />
                </h3>
            </main>
        </div>
    )
}

export default Home;