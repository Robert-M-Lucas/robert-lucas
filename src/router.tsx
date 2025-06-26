import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error/ErrorPage.tsx"
import IndexPage from "./routes/index/IndexPage.tsx"
import ProjectsIndexPage from "./routes/projects/ProjectsIndexPage.tsx"
import SingleProjectPage from "./routes/projects/SingleProjectPage/SingleProjectPage.tsx"

export const INDEX_PATH = "/"
export const PROJECTS_PATH = "/projects"
export const getProjectPath = (project: string) => `${PROJECTS_PATH}/${project}`

export const router = createBrowserRouter([
    {
        path: INDEX_PATH,
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: PROJECTS_PATH,
        element: <ProjectsIndexPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: getProjectPath(":project"),
        element: <SingleProjectPage />,
        errorElement: <ErrorPage />,
    },
])
