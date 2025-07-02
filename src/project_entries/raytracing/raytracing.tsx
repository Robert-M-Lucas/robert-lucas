import { Project } from "../../routes/projects/single-project-page/project.ts"
import render from "./assets/render.png"
import { rustTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const RaytracingEntryPage = lazy(() => import("./RaytracingEntryPage"))

export const raytracingProject: Project = {
  name: "raytracing",
  title: "Raytracing Engine",
  subtitle:
    "A raytracing engine supporting reflections, refraction, direct lighting and indirect lighting",
  msSinceEpoch: null,
  image: { image: render, alt: "TODO" },
  technologies: [rustTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/raytracing-two",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <RaytracingEntryPage />
    </Suspense>
  ),
}
