import { Project } from "../../routes/projects/single-project-page/project.ts"
import chess from "./assets/chess.png"
import {
  cSharpTechnology,
  netcodeTechnology,
  unityTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const ChessEntryPage = lazy(() => import("./ChessEntryPage"))

export const chessProject: Project = {
  name: "chess",
  title: "Chess",
  subtitle:
    "A hybrid 3D-2D chess game with local play, multiplayer, custom net code and a chess AI using a minimax algorithm",
  msSinceEpoch: null,
  image: { image: chess, alt: "No alt text" },
  technologies: [cSharpTechnology, netcodeTechnology, unityTechnology],
  links: [
    { url: "https://github.com/Robert-M-Lucas/Chess3D", type: githubLink },
  ],
  page: () => (
    <Suspense>
      <ChessEntryPage />
    </Suspense>
  ),
}
