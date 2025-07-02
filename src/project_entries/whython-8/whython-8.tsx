import { Project } from "../../routes/projects/single-project-page/project.ts"
import error from "./assets/error.png"
import {
  compilersTechnology,
  rustTechnology,
  x86_64_AsmTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const Whython8EntryPage = lazy(() => import("./Whython8EntryPage"))

export const whython8Project: Project = {
  currentlyWriting: true,
  name: "whython-8",
  title: "Whython 8",
  subtitle:
    "A high-level language with functions, classes, methods, importing, and detailed error messages - compiling to assembly",
  image: { image: error, alt: "A Whython-8 error message" },
  msSinceEpoch: 1726665540000,
  page: () => (
    <Suspense>
      <Whython8EntryPage />
    </Suspense>
  ),
  technologies: [rustTechnology, x86_64_AsmTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-8",
      type: githubLink,
    },
  ],
}
