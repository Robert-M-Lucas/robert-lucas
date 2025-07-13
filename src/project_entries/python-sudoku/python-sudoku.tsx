import { Project } from "../../routes/projects/single-project-page/project.ts"
import rust_timings from "./assets/rust_timings.png"
import {
  pythonTechnology,
  rustTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const PythonSudokuEntry = lazy(() => import("./PythonSudokuEntryPage"))

export const pythonSudokuProject: Project = {
  name: "python_sudoku",
  title: "Python Sudoku Solver",
  subtitle:
    "A 16x faster Sudoku-solving algorithm despite being written in Python. 450x faster in Rust with no additional optimisations.",
  msSinceEpoch: null,
  image: { image: rust_timings, alt: "No alt text" },
  technologies: [pythonTechnology, rustTechnology],
  links: [],
  page: () => (
    <Suspense>
      <PythonSudokuEntry />
    </Suspense>
  ),
}
