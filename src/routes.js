import Home from "./Pages/Home";
import Form from "./Pages/Form";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

const routes = [
    {
        path: "/",
        Element: <Home />,
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
                path: "/form",
                element: <Form />
            }
        ]
        
    }
];

export default routes;