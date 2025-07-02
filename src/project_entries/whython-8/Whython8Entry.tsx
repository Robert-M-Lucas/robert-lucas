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
import P_p from "../../components/project_entry_utils/P_p.tsx"
import P_h2 from "../../components/project_entry_utils/P_h2.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"
import PProjLink from "../../components/project_entry_utils/PProjLink.tsx"
import { portfolioTwoProject } from "../portfolio_two/PortfolioTwoEntry.tsx"
import { whython7Project } from "../whython-7/Whython7Entry.tsx"

export const whython8Project: Project = {
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
      <P_h2>Preface</P_h2>
      <P_p>
        As this project write up is being written after I got fed up with the
        structure of my{" "}
        <P_a href={"https://robertlucas.pythonanywhere.com"}>
          previous website
        </P_a>
        , but before I created{" "}
        <PProjLink to={portfolioTwoProject}>this website</PProjLink>, this is
        being written a number of months after I last worked on this project.{" "}
        <PProjLink to={whython7Project}>Whython-7</PProjLink> was almost a trial
        run of a number of new approaches, before creating Whython-8 as a
        refined version. As such, improvements mentioned here might have first
        been introduced in Whython-7.
      </P_p>

      <P_h1>Parsing</P_h1>
      <P_p>
        Parsing is potentially one of the greatest steps forward this version
        makes over previous iterations, as it enables a large amount of the
        later improvements thanks to more advanced syntax, syntax being
        converted to better data structures representing it, and a comprehensive
        'location system' ensuring that the in-code-file location of code
        follows it through the compilation process enabling rich error messages.
      </P_p>

      <P_h2>Error Handling</P_h2>

      <P_h1>Importing</P_h1>

      <P_h1>Name Resolution</P_h1>

      <P_h1>Compilation</P_h1>

      <P_h1>Assembly</P_h1>

      <P_h1>Future Improvements</P_h1>
    </ProjWrapper>
  )
}
