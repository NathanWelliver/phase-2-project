import React from "react";

function WorkoutOfDay({bodyPart, workout}){
    return (
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
    );
}

export default WorkoutOfDay;