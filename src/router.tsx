import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./error/ErrorPage.tsx";
import IndexPage from "./routes/index/IndexPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/projects",
        element: <ErrorPage/>,
        errorElement: <ErrorPage/>
    },
]);