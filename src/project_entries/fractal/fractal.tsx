import { Project } from "../../routes/projects/single-project-page/project.ts"
import one from "./assets/one.png"
import {
  gpuTechnology,
  javaTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const FractalEntryPage = lazy(() => import("./FractalEntryPage"))

export const fractalProject: Project = {
  name: "fractal",
  title: "Mandlebrot Fractal Explorer",
  subtitle:
    "An app that renders and allows you to explore the Madlebrot (and burning ship) fractal",
  msSinceEpoch: null,
  image: { image: one, alt: "TODO" },
  technologies: [javaTechnology, gpuTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/Mandlebrot-Fractal-GPU",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <FractalEntryPage />
    </Suspense>
  ),
}
