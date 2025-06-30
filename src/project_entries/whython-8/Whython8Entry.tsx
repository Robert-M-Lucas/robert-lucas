import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import {
  compilersTechnology,
  rustTechnology,
  x86_64_AsmTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import error from "./assets/error.png"
import P_h1 from "../../components/project_entry_utils/P_h1.tsx"

export const Whython8Project: Project = {
  currentlyWriting: true,
  name: "whython-8",
  title: "Whython 8",
  subtitle:
    "A high-level language with functions, classes, methods, importing, and detailed error messages - compiling to assembly",
  image: { image: error, alt: "A Whython-8 error message" },
  msSinceEpoch: 1726665540000,
  page: Whython8Page,
  technologies: [rustTechnology, x86_64_AsmTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-8",
      type: githubLink,
    },
  ],
}

function Whython8Page() {
  return (
    <ProjWrapper>
      <P_h1>Overview</P_h1>
      <P_h1>Parsing</P_h1>
      <P_h1>Importing</P_h1>
      <P_h1>Name Resolution</P_h1>
      <P_h1>Compilation</P_h1>
      <P_h1>Assembly</P_h1>
      <P_h1>Error Handling</P_h1>
      <P_h1>Future Improvements</P_h1>
    </ProjWrapper>
  )
}
