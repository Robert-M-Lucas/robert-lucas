import { Project } from "../../routes/projects/single-project-page/project.ts"
import pattern from "./assets/pattern.png"
import { pythonTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const GeometricPatternEntryPage = lazy(
  () => import("./GeometricPatternEntryPage")
)

export const geometricPatternProject: Project = {
  name: "geometric_pattern",
  title: "Geometric Pattern Generator",
  subtitle: "Generating a geometric pattern for use in future projects",
  msSinceEpoch: null,
  image: { image: pattern, alt: "TODO" },
  technologies: [pythonTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/TriangleGenerator",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <GeometricPatternEntryPage />
    </Suspense>
  ),
}
