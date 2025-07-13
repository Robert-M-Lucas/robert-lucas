import { Project } from "../../routes/projects/single-project-page/project.ts"
import minesweeper from "./assets/minesweeper.jpg"
import {
  androidTechnology,
  cSharpTechnology,
  unityTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import {
  githubLink,
  googlePlayLink,
} from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const MinesweeperEntryPage = lazy(() => import("./MinesweeperEntryPage"))

export const minesweeperProject: Project = {
  name: "minesweeper",
  title: "Infinite Minesweeper",
  subtitle: "Minesweeper on an infinite plane",
  msSinceEpoch: null,
  image: { image: minesweeper, alt: "No alt text" },
  technologies: [cSharpTechnology, unityTechnology, androidTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/InfiniteMinesweeper",
      type: githubLink,
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.InfiniteMinesweeper",
      type: googlePlayLink,
    },
  ],
  page: () => (
    <Suspense>
      <MinesweeperEntryPage />
    </Suspense>
  ),
}
