import { Project } from "../../routes/projects/single-project-page/project.ts"
import with_water from "./assets/with_water.png"
import {
  cSharpTechnology,
  unityTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const TerrainGeneratorEntryPage = lazy(
  () => import("./TerrainGeneratorEntryPage")
)

export const terrainGeneratorProject: Project = {
  name: "terrain_generator",
  title: "Random Terrain Generator",
  subtitle: "Generating terrain meshes in Unity using Perlin noise",
  msSinceEpoch: null,
  image: { image: with_water, alt: "TODO" },
  technologies: [cSharpTechnology, unityTechnology],
  links: [],
  page: () => (
    <Suspense>
      <TerrainGeneratorEntryPage />
    </Suspense>
  ),
}
