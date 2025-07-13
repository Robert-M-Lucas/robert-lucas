import { Project } from "../../routes/projects/single-project-page/project.ts"
import output2 from "./assets/output2.png"
import {
  pythonTechnology,
  rustTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const SudokuSolverEntryPage = lazy(() => import("./SudokuSolverEntryPage"))

export const sudokuSolverProject: Project = {
  name: "sudoku_solver",
  title: "Sudoku Solver",
  subtitle: "Solving sudoku puzzles",
  msSinceEpoch: null,
  image: { image: output2, alt: "No alt text" },
  technologies: [rustTechnology, pythonTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/sudoku-solver-2/tree/master",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <SudokuSolverEntryPage />
    </Suspense>
  ),
}
