import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error/ErrorPage.tsx"
import IndexPage from "./routes/index/IndexPage.tsx"
import ProjectsIndexPage from "./routes/projects/ProjectsIndexPage.tsx"
import SingleProjectPage from "./routes/projects/SingleProjectPage/SingleProjectPage.tsx"

export const indexPath = "/"
export const projectsPath = "/projects"
export const getProjectPath = (project: string) => `${projectsPath}/${project}`

export const router = createBrowserRouter([
  {
    path: indexPath,
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: projectsPath,
    element: <ProjectsIndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: getProjectPath(":project"),
    element: <SingleProjectPage />,
    errorElement: <ErrorPage />,
  },
])
