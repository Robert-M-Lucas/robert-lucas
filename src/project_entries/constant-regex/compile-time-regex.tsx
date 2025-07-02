import { Project } from "../../routes/projects/single-project-page/project.ts"
import performance_img from "./assets/performance.png"
import { rustTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const CompileTimeRegexEntryPage = lazy(
  () => import("./CompileTimeRegexEntryPage")
)

export const compileTimeRegexProject: Project = {
  name: "constant_regex",
  title: "Compile Time Regex Automaton",
  shortTitle: "Compile Time Regex",
  subtitle:
    "Compile time regex DFA generation to eliminate regex creation overhead at runtime",
  image: {
    image: performance_img,
    alt: "Image of a performance comparison between this project and other Regex implementations",
  },
  msSinceEpoch: 1736777940000,
  page: () => (
    <Suspense>
      <CompileTimeRegexEntryPage />
    </Suspense>
  ),
  technologies: [rustTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/const_regex",
      type: githubLink,
    },
  ],
}
