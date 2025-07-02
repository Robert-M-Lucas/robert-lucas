import { Project } from "../../routes/projects/single-project-page/project.ts"
import tictactoe from "./assets/tictactoe.png"
import {
  compilersTechnology,
  cSharpTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const ProgrammingLangEntryPage = lazy(
  () => import("./ProgrammingLangEntryPage")
)

export const programmingLangProject: Project = {
  name: "programming_lang",
  title: "Custom Programming Language (RLC)",
  shortTitle: "Programming Language",
  subtitle: "Creating my own programming language",
  msSinceEpoch: null,
  image: { image: tictactoe, alt: "TODO" },
  technologies: [cSharpTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/ProgrammingLanguage",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <ProgrammingLangEntryPage />
    </Suspense>
  ),
}
