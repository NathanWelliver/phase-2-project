import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";

function App(){
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => setWorkouts(data))
        .catch(error => console.log(error))
    }, [])
    

    return  (
        <div className="app">
            <header>
                <NavBar />
            </header>
            <Outlet context={{workouts: workouts, setWorkouts: setWorkouts}}/>
        </div>
    )
}

export default App;