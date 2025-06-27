import { GITHUB_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  COMPILERS,
  RUST,
  X86_64_ASM,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import code from "./assets/code.png"

export const Whython7Project: Project = {
  name: "whython-7",
  title: "Whython 7",
  subtitle: "A precursor to Whython-8",
  ms_since_epoch: null,
  image: { image: code, alt: "TODO" },
  technologies: [RUST, X86_64_ASM, COMPILERS],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-7",
      type: GITHUB_LINK,
    },
  ],
  page: Whython7EntryPage,
}

function Whython7EntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        This is a currently under development programming language built in a
        completely different manner to previous iterations.
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
