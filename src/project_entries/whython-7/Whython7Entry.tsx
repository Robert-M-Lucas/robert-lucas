import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  compilersTechnology,
  rustTechnology,
  x86_64_AsmTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import code from "./assets/code.png"
import { whython8Project } from "../whython-8/Whython8Entry.tsx"
import PProjLink from "../../components/project_entry_utils/PProjLink.tsx"

export const whython7Project: Project = {
  name: "whython-7",
  title: "Whython 7",
  subtitle: "A precursor to Whython-8",
  msSinceEpoch: null,
  image: { image: code, alt: "TODO" },
  technologies: [rustTechnology, x86_64_AsmTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-7",
      type: githubLink,
    },
  ],
  page: Whython7EntryPage,
}

function Whython7EntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        <i>
          This projects write up was unfinished on the old website. See{" "}
          <PProjLink to={whython8Project}>Whython-8</PProjLink> as it includes
          the features developed in Whython-7 as well as many more.
        </i>
      </P_p>
      <P_p>
        <span className="text-decoration-line-through">
          This is a currently under development programming language
        </span>{" "}
        built in a completely different manner to previous iterations.
      </P_p>
      <P_p>
        This iteration has Rust-like syntax and compiles down to assembly
        without the use of IL tool such as LLVM. Only the final assembling and
        linking steps are handled by other programs (NASM and MSVC
        respectively).
      </P_p>
    </ProjWrapper>
  )
}
