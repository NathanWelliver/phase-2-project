import NavBar from "../Components/NavBar"
import WorkoutOfDay from "../Components/WorkoutOfDay"
import Date from "../Components/Date"
import React from "react";
import {useState, useEffect} from "react"

function Home(){
    const [days, setDays] = useState([]);
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/days")
        .then(r => r.json())
        .then(data => setDays(data))
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => setWorkouts(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Welcome!</h1>
                    <h2>
                        Today's Date: <Date />
                    </h2>
                <h3>
                    Excercise To Try: <WorkoutOfDay />
                </h3>
            </main>
        </>
    )
}

export default Home;