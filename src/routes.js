import App from "./App";
import TodaysWorkout from "./Pages/TodaysWorkout";
import RestDay from "./Pages/RestDay";
import Workouts from "./Pages/Workouts";
import ErrorPage from "./Pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <TodaysWorkout />
            },
            {
                path: "/workouts",
                element: <Workouts />
            },
            {
                path: "/rest",
                element: <RestDay />
            }
        ]
        
    }
];

export default routes;