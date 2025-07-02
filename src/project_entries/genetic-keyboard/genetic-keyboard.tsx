import { Project } from "../../routes/projects/single-project-page/project.ts"
import keyboard from "./assets/keyboard.png"
import { cSharpTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const GeneticKeyboardEntryPage = lazy(
  () => import("./GeneticKeyboardEntryPage")
)

export const geneticKeyboardProject: Project = {
  name: "genetic_keyboard",
  title: "Genetic Keyboard",
  subtitle: "Using a genetic algorithm to create the perfect keyboard",
  msSinceEpoch: null,
  image: { image: keyboard, alt: "TODO" },
  technologies: [cSharpTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/GeneticKeyboard",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <GeneticKeyboardEntryPage />
    </Suspense>
  ),
}
