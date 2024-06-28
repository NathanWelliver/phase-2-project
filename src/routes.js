import App from "./App";
import Home from "./Pages/Home";
import RestDay from "./Pages/RestDay";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/rest",
                element: <RestDay />
            }
        ]
        
    }
];

export default routes;