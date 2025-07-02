import { Project } from "../../routes/projects/single-project-page/project.ts"
import usage from "./assets/usage.png"
import { rustTechnology } from "../../routes/projects/single-project-page/technology.tsx"
import {
  copyableCommandLink,
  cratesLink,
  githubLink,
} from "../../routes/projects/single-project-page/links.tsx"
import { lazy, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/naming-convention
const RssEntryPage = lazy(() => import("./RssEntryPage.tsx"))

export const rssProject: Project = {
  name: "rss",
  title: "RSS",
  subtitle:
    "Single file Rust projects with embedded binary enable Rust's use as a scripting language",
  image: { image: usage, alt: "Image of the RSS tool recompiling a file" },
  msSinceEpoch: 1716902340000,
  page: () => (
    <Suspense>
      <RssEntryPage />
    </Suspense>
  ),
  technologies: [rustTechnology],
  links: [
    { url: "https://github.com/Robert-M-Lucas/rss2", type: githubLink },
    { url: "https://crates.io/crates/rs-script", type: cratesLink },
    { url: "cargo install rs-script", type: copyableCommandLink },
  ],
}
