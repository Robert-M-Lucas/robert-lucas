import { Project } from "../../routes/projects/single-project-page/project.ts"
import bezier from "./assets/bezier.gif"
import { pythonTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const BezierEntryPage = lazy(() => import("./BezierEntryPage"))

export const bezierProject: Project = {
  name: "bezier",
  title: "Bézier Curves",
  subtitle: "Demonstation of how bezier curves are formed. Created in PyGame.",
  msSinceEpoch: null,
  image: { image: bezier, alt: "TODO" },
  technologies: [pythonTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/Bezier-Curves",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <BezierEntryPage />
    </Suspense>
  ),
}
