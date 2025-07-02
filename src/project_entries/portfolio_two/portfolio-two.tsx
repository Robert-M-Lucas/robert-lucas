import { Project } from "../../routes/projects/single-project-page/project.ts"
import code from "./assets/code.png"
import {
  bootstrapTechnology,
  cssTechnology,
  firebaseTechnology,
  htmlTechnology,
  reactTechnology,
  typescriptTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import {
  createCustomLink,
  githubLink,
} from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const PortfolioTwoEntryPage = lazy(() => import("./PortfolioTwoEntryPage"))

export const portfolioTwoProject: Project = {
  currentlyWorkingOn: true,
  currentlyWriting: true,
  name: "portfolio_two",
  title: "Portfolio Website (This Website)",
  shortTitle: "Portfolio Website",
  image: { image: code, alt: "Image of some code used in this website" },
  subtitle: "This website, created to replace my old portfolio website",
  msSinceEpoch: 1750860747000,
  page: () => (
    <Suspense>
      <PortfolioTwoEntryPage />
    </Suspense>
  ),
  technologies: [
    typescriptTechnology,
    reactTechnology,
    firebaseTechnology,
    bootstrapTechnology,
    htmlTechnology,
    cssTechnology,
  ],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/robert-lucas",
      type: githubLink,
    },
    {
      url: "https://robertlucas.pythonanywhere.com",
      type: createCustomLink("Old Website"),
    },
  ],
}
