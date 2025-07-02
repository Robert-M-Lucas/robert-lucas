import { Project } from "../../routes/projects/single-project-page/project.ts"
import astar from "./assets/astar.webp"
import {
  androidTechnology,
  cSharpTechnology,
  unityTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { googlePlayLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const AstarEntryPage = lazy(() => import("./AstarEntryPage"))

export const aStarProject: Project = {
  name: "astar",
  title: "A* Pathfinding",
  subtitle:
    "A simple program that demonstrates the A* pathfinding algorithm for PC and Android",
  msSinceEpoch: null,
  image: { image: astar, alt: "TODO" },
  technologies: [cSharpTechnology, unityTechnology, androidTechnology],
  links: [
    {
      url: "https://play.google.com/store/apps/details?id=com.RobertAppDev.AStar2D",
      type: googlePlayLink,
    },
  ],
  page: () => (
    <Suspense>
      <AstarEntryPage />
    </Suspense>
  ),
}
