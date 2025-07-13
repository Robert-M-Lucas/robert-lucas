import { Project } from "../../routes/projects/single-project-page/project.ts"
import whython_4_short from "./assets/whython_4_short.png"
import {
  compilersTechnology,
  rustTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const Whython4EntryPage = lazy(() => import("./Whython4EntryPage"))

export const whython4Project: Project = {
  name: "whython-4",
  title: "Whython 4",
  subtitle:
    "An more modern and maintainable programming language with better flow control and function support. A precursor to Whython-7/8",
  msSinceEpoch: null,
  image: { image: whython_4_short, alt: "No alt text" },
  technologies: [rustTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-4",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <Whython4EntryPage />
    </Suspense>
  ),
}
