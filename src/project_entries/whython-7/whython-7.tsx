import { Project } from "../../routes/projects/single-project-page/project.ts"
import code from "./assets/code.png"
import {
  compilersTechnology,
  rustTechnology,
  x86_64_AsmTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const Whython7EntryPage = lazy(() => import("./Whython7EntryPage"))

export const whython7Project: Project = {
  name: "whython-7",
  title: "Whython 7",
  subtitle: "A precursor to Whython-8",
  msSinceEpoch: null,
  image: { image: code, alt: "No alt text" },
  technologies: [rustTechnology, x86_64_AsmTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-7",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <Whython7EntryPage />
    </Suspense>
  ),
}
