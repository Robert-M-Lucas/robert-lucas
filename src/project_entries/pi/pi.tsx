import { Project } from "../../routes/projects/single-project-page/project.ts"
import { cppTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const PiEntryPage = lazy(() => import("./PiEntryPage"))

export const piProject: Project = {
  name: "pi",
  title: "Pi Calculator",
  subtitle: "A program that calculates π using a physics simulation",
  msSinceEpoch: null,
  technologies: [cppTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/Elastic-Collision-Bounce-Calculator",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <PiEntryPage />
    </Suspense>
  ),
}
