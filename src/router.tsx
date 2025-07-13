import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error/ErrorPage.tsx"
import { lazy, Suspense } from "react"

export const indexPath = "/"
export const projectsPath = "/projects"
export const getProjectPath = (project: string) => `${projectsPath}/${project}`
export const getProjectTechnologyQuery = (technologies: string[]) =>
  `${projectsPath}?techs=${technologies.join(",")}`

// eslint-disable-next-line @typescript-eslint/naming-convention
const IndexPage = lazy(() => import("./routes/index/IndexPage.tsx"))
// eslint-disable-next-line @typescript-eslint/naming-convention
const ProjectsIndexPage = lazy(
  () => import("./routes/projects/ProjectsIndexPage.tsx")
)
// eslint-disable-next-line @typescript-eslint/naming-convention
const SingleProjectPage = lazy(
  () => import("./routes/projects/single-project-page/SingleProjectPage.tsx")
)

export const router = createBrowserRouter([
  {
    path: indexPath,
    element: (
      <Suspense>
        <IndexPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: projectsPath,
    element: (
      <Suspense>
        <ProjectsIndexPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: getProjectPath(":project"),
    element: (
      <Suspense>
        <SingleProjectPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
])
