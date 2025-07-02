import { Project } from "../../routes/projects/single-project-page/project.ts"
import enigma from "./assets/enigma.png"
import {
  cSharpTechnology,
  unityTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const EnigmaEntryPage = lazy(() => import("./EnigmaEntryPage"))

export const enigmaProject: Project = {
  name: "enigma",
  title: "Enigma Simulator",
  subtitle:
    "An enigma simulator with support for almost all the features of the real machine",
  msSinceEpoch: null,
  image: { image: enigma, alt: "TODO" },
  technologies: [cSharpTechnology, unityTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/Enigma-Simulator",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <EnigmaEntryPage />
    </Suspense>
  ),
}
