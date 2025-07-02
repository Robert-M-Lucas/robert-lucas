import { Project } from "../../routes/projects/single-project-page/project.ts"
import fizzbuzz from "./assets/fizzbuzz.png"
import {
  compilersTechnology,
  cppTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const ProgrammingLang2EntryPage = lazy(
  () => import("./ProgrammingLang2EntryPage")
)

export const programmingLang2Project: Project = {
  name: "programming_lang_2",
  title: "Programming Language 2",
  subtitle:
    "Improved programming language with support for many types and conditional logic",
  msSinceEpoch: null,
  image: { image: fizzbuzz, alt: "TODO" },
  technologies: [cppTechnology, compilersTechnology],
  links: [],
  page: () => (
    <Suspense>
      <ProgrammingLang2EntryPage />
    </Suspense>
  ),
}
