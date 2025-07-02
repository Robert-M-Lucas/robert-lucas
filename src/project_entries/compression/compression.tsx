import { Project } from "../../routes/projects/single-project-page/project.ts"
import compression from "./assets/compression.png"
import { cSharpTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const CompressionEntryPage = lazy(() => import("./CompressionEntryPage"))

export const compressionProject: Project = {
  name: "compression",
  title: "Compression Algorithm",
  subtitle:
    "A simple program to test custom compression algoritms and combinations of algorithms",
  msSinceEpoch: null,
  image: { image: compression, alt: "TODO" },
  technologies: [cSharpTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/CompressionAlgorithm",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <CompressionEntryPage />
    </Suspense>
  ),
}
