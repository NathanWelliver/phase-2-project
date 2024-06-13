import {useEffect, useState} from "react";
import NavBar from "../Components/NavBar"
import WorkoutCard from "../Components/WorkoutCard";

function Home(){
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => setWorkouts(data))
        .catch(error => console.log(error))
    }, []);

    const workoutList = workouts.map(workout => {
        return <WorkoutCard key={workout.id} workout={workout}/>
    })

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Welcome!</h1>
                {workoutList}
            </main>
        </>
    )
}

export default Home;