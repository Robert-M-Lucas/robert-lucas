import {
  PLACEHOLDER_IMAGE,
  Project,
} from "../../routes/projects/SingleProjectPage/project.ts"
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx"
import { GITHUB_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import PLatex from "../../components/project_entry_utils/PLatex.tsx"
import insane from "./assets/insane.txt"
import sane from "./assets/sane.txt"
import PCodeSrc from "../../components/project_entry_utils/PCodeSrc.tsx"
import PMono from "../../components/project_entry_utils/PMono.tsx"

export const CompileTimeRegexProject: Project = {
  currently_writing: true,
  name: "constant_regex",
  title: "Compile Time Regex Automaton",
  short_title: "Compile Time Regex",
  subtitle:
    "Compile time regex DFA generation to eliminate regex creation overhead at runtime",
  image: PLACEHOLDER_IMAGE,
  ms_since_epoch: 1736777940000,
  page: CompileTimeRegexPage,
  technologies: [RUST],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/const_regex",
      type: GITHUB_LINK,
    },
  ],
}

function CompileTimeRegexPage() {
  return (
    <ProjWrapper>
      <P_p>
        This year at university (Year 2, 2024/2025), we had a year-long
        'Algorithms and Complexity' module, covering a large variety of topics.
        Part of this module covered Deterministic Finite Automatons (DFAs) and
        how they are equivalent to Regexes which lead me to a surprising (to me
        at least) inference - Regexes are <PLatex latex="O(n)" />.
      </P_p>
      <P_p>
        The creation of this DFA from the regex does, of course, incur
        additional overhead. While this can be easily mitigated by storing the
        compiled automaton globally, in certain languages the initialisation of
        this global state can be slightly annoying. In design patterns with
        single functions handling like, for example, web routes, this can make
        the code a bit less clean and the performance overhead of initialising
        Regexes within hot paths is non-negligible.
      </P_p>
      <P_p>The below code, for example, would not be performant:</P_p>
      <PCodeSrc codeSrc={insane} language={"rust"} />
      <P_p>...but might (in some cases) be easier to inspect than:</P_p>
      <PCodeSrc codeSrc={sane} language={"rust"} />
      <P_p>
        Rust has very extensive compile time capabilities with its const
        functions which can be further extended using procedural macros. With
        this approach it was relatively easy to create a proof-of-concept Regex
        tester that ran as a <PMono>const fn</PMono>.
      </P_p>
    </ProjWrapper>
  )
}
