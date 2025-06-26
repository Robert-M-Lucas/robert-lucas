import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx"
import {
  CRATES_LINK,
  GITHUB_LINK,
} from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import usage from "./assets/usage.png"

export const RssProject: Project = {
  currently_writing: true,
  name: "rss",
  title: "RSS",
  subtitle:
    "A tool allowing the creation of single-file Rust projects with embedded compiled binaries enabling similar usage to Python scripts",
  image: { image: usage, alt: "Image of the RSS tool recompiling a file" },
  ms_since_epoch: 1716902340000,
  page: RssPage,
  technologies: [RUST],
  links: [
    { url: "https://github.com/Robert-M-Lucas/rss2", type: GITHUB_LINK },
    { url: "https://crates.io/crates/rs-script", type: CRATES_LINK },
  ],
}

function RssPage() {
  return <ProjWrapper>TODO</ProjWrapper>
}
