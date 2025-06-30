import P_img from "../../components/project_entry_utils/P_img.tsx"
import tictactoe from "./assets/tictactoe.png"
import whython_4_short from "./assets/whython_4_short.png"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  compilersTechnology,
  rustTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"

export const Whython4Project: Project = {
  name: "whython-4",
  title: "Whython 4",
  subtitle:
    "An more modern and maintainable programming language with better flow control and function support. A precursor to Whython-7/8",
  msSinceEpoch: null,
  image: { image: whython_4_short, alt: "TODO" },
  technologies: [rustTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/whython-4",
      type: githubLink,
    },
  ],
  page: Whython4EntryPage,
}

function Whython4EntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        This project is quite similar to my{" "}
        <P_a href="programming_lang_2">second programming language</P_a>,
        however this project is created in Rust which has far better developer
        ergonomics and far fewer (no) difficult to diagnose SEGFAULTS. This has
        allowed me to create a much more maintainable project with more features
        (such as functions) due as the project is generally better structured.
        Due to it still having the same core framework as my last language, it
        still doesn't have a stack or dynamically allocated memory making
        recursion not possible.
      </P_p>
      <P_p>
        I see this language as being more of a stepping stone as I'm planning on
        building on creating a fourth iteration of my language (sensibly named
        'Whython 5') based on this one with support for dynamically allocated
        memory and a call stack.
      </P_p>
      <P_img
        legacyNaturalWidth
        image={tictactoe}
        alt={"TODO"}
        caption={"Tic Tac Toe written in Whython 4"}
      />
    </ProjWrapper>
  )
}
