import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import {
  COMPILERS,
  RUST,
  X86_64_ASM,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import { GITHUB_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import error from "./assets/error.png"

export const Whython8Project: Project = {
  currently_writing: true,
  name: "whython-8",
  title: "Whython 8",
  subtitle:
    "A high-level language with functions, classes, methods, importing, and detailed error messages, compiling to assembly",
  image: { image: error, alt: "A Whython-8 error message" },
  ms_since_epoch: 1726665540000,
  page: Whython8Page,
  technologies: [RUST, X86_64_ASM, COMPILERS],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-8",
      type: GITHUB_LINK,
    },
  ],
}

function Whython8Page() {
  return <ProjWrapper>TODO</ProjWrapper>
}
