import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error/ErrorPage.tsx"
import { lazy, Suspense } from "react"
import { getProjectPath, indexPath, projectsPath } from "./routingConstants.ts"

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
