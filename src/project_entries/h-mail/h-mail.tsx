import { Project } from "../../routes/projects/single-project-page/project.ts"
import h_mail_screenshot from "./assets/h-mail-screenshot.png"
import {
  cssTechnology, htmlTechnology, netcodeTechnology,
  reactTechnology,
  rustTechnology,
  typescriptTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import { githubLink } from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const HMailEntryPage = lazy(
  () => import("./HMailEntryPage")
)

export const hMailProject: Project = {
  name: "h_mail",
  title: "H-Mail",
  subtitle: "A modern email replacement focused on security and fighting spam through proof-of-work",
  msSinceEpoch: 1757687892000,
  currentlyWriting: true,
  image: { image: h_mail_screenshot, alt: "No alt text" },
  technologies: [rustTechnology, netcodeTechnology, reactTechnology, typescriptTechnology, htmlTechnology, cssTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/h-mail",
      type: githubLink,
    },
  ],
  page: () => (
    <Suspense>
      <HMailEntryPage />
    </Suspense>
  ),
}
