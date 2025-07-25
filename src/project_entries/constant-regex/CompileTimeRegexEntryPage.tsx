import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import PLatex from "../../components/project-entry-utils/PLatex.tsx"
import insane from "./assets/insane.txt"
import sane from "./assets/sane.txt"
import performance from "./assets/performance.txt"
import generated from "./assets/generated.txt"
import PCodeSrc from "../../components/project-entry-utils/p-code/PCodeSrc.tsx"
import PMono from "../../components/project-entry-utils/PMono.tsx"
import P_h1 from "../../components/project-entry-utils/headings/P_h1.tsx"
import P_a from "../../components/project-entry-utils/P_a.tsx"

export default function CompileTimeRegexEntryPage() {
  return (
    <ProjWrapper>
      <P_h1>Overview</P_h1>
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
        tester that ran as a <PMono>const fn</PMono>. This also had the added
        benefit of allowing compile time constant assertion e.g. that a global
        string conformed to some Regex (although I couldn't think of a use case
        for this).
      </P_p>
      <P_p>
        The best use of this would, in my opinion, be in serverless cloud
        functions where the Regex DFA being created at compile time rather than
        deploy/runtime could enable some significant performance gains.
      </P_p>
      <P_h1>Performance</P_h1>
      <PCodeSrc
        codeSrc={performance}
        language={"text"}
        caption={
          <>
            <PMono>naive</PMono> initialises the Regex inside the hot loop,{" "}
            <PMono>sensible</PMono> initialises the Regex outside the hot loop.
            This is against the{" "}
            <P_a href={"https://crates.io/crates/regex"}>regex crate</P_a>.
          </>
        }
      />
      <P_h1>Example Macro Expansion</P_h1>
      <PCodeSrc codeSrc={generated} language={"rust"} />
    </ProjWrapper>
  )
}
