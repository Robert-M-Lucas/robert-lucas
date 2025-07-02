import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import {
  compilersTechnology,
  rustTechnology,
  x86_64_AsmTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import error from "./assets/error.png"
import info from "./assets/info.png"
import P_h1 from "../../components/project_entry_utils/P_h1.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import P_h2 from "../../components/project_entry_utils/P_h2.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"
import PProjLink from "../../components/project_entry_utils/PProjLink.tsx"
import { portfolioTwoProject } from "../portfolio_two/PortfolioTwoEntry.tsx"
import { whython7Project } from "../whython-7/Whython7Entry.tsx"
import nom_example from "./assets/nom_example.txt"
import inner_location from "./assets/inner_location.txt"
import PCodeSrc from "../../components/project_entry_utils/PCodeSrc.tsx"
import PMono from "../../components/project_entry_utils/PMono.tsx"
import P_ol from "../../components/project_entry_utils/P_ol.tsx"
import P_li from "../../components/project_entry_utils/P_li.tsx"
import P_img from "../../components/project_entry_utils/P_img.tsx"

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
        <PProjLink to={whython7Project}>Whython-7</PProjLink> was like a trial
        run of a number of new approaches before creating Whython-8 as a refined
        version. As such, improvements mentioned here might have first been
        introduced in Whython-7.
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
      <P_p>
        For this iteration I used a library,{" "}
        <P_a href={"https://crates.io/crates/nom"}>nom</P_a>, to create a
        recursive parser-combinator. Here is an example parser component which I
        will break down:
      </P_p>
      <PCodeSrc codeSrc={nom_example} language={"rust"} />
      <P_p>
        This code parses a struct (similar to a class declaration in other
        languages). Let's start with the function signature: the{" "}
        <PMono>Span</PMono> type in the argument represents a slice of the
        original inputted file and, as such, makes taking substrings very fast
        as it simply changes the start and length pointer to the full file
        currently in memory, as opposed to copying/resizing strings constantly
        on the heap. It is also in a tuple with a file ID that, together with
        comparing the pointer of the string slice to the full file string,
        enables finding the file and position with said file using the{" "}
        <PMono>Span</PMono>. You can see this being done in the first line of
        the function body where a <PMono>Location</PMono> struct is created
        (which no longer holds a Rust reference to the original file), later
        attached to the <PMono>StructToken</PMono> allowing an error in the
        compilation step to be attributed to the struct's location in code.
      </P_p>
      <P_p>
        The <PMono>ParseResult</PMono> return type functions similarly to a
        normal Rust{" "}
        <P_a href={"https://doc.rust-lang.org/std/result/"}>
          <PMono>Result</PMono>
        </P_a>{" "}
        enum, with the success variant <PMono>(Span, StructToken)</PMono> and
        the error variant being a generic error struct, including support for
        multiple errors, or errors within errors. The nom blueprint for creating
        parsing functions is that they should, on success, return{" "}
        <PMono>([remaining text to parse], [thing that has been parsed])</PMono>{" "}
        and this explains the following lines 4 - 10, where <PMono>s</PMono> is
        what's left after the parser is applied, and the other part of the tuple
        either stores or discards the result. If you are new to Rust, the{" "}
        <PMono>?</PMono> operator returns the error from the function if the
        value is an error, otherwise evaluating to the success variants
        contents.
      </P_p>
      <P_p>
        The parsing functions used by this function are as follows (note that a
        lot are used just to modify <PMono>s</PMono>):
      </P_p>
      <P_ol>
        <P_li>
          <PMono>tag("struct")</PMono> - parse specific text exactly
        </P_li>
        <P_li>
          <PMono>require_ignored</PMono> - parse at least some ignored text e.g.
          whitespace
        </P_li>
        <P_li>
          <PMono>parse_simple_name</PMono> - parse a name (the struct's name)
        </P_li>
        <P_li>
          <PMono>discard_ignored</PMono> - parse ignored text
        </P_li>
        <P_li>
          <PMono>parse_default_terminator_content</PMono> - parse content within
          the braced section
        </P_li>
        <P_li>
          <PMono>parse_parameters</PMono> - parse parameter list (here used to
          get struct attributes as the attribute and argument syntax is
          near-identical)
        </P_li>
      </P_ol>
      <P_p>
        What is, in my opinion, one of the largest strengths of nom is that of
        all these functions, only <PMono>tag</PMono> is provided by nom which
        demonstrates how easy it is to implement your own functions as nom
        mainly provides a blueprint for parser functions, rather than a
        framework.
      </P_p>

      <P_h1>Error handling</P_h1>
      <P_p>
        Building on the work the parser does, very rich error messages are
        possible as at any point in the compilation process, the origin of the
        current data can be retrieved at any time. Notably, neither the
        surrounding file context, nor the piece of code, is stored in the{" "}
        <PMono>Location</PMono> struct that is used in the compilation process
        greatly improving performance and reducing memory use due to copying.
      </P_p>
      <PCodeSrc codeSrc={inner_location} language={"rust"} />
      <P_p>
        This can be combined with an error message into a well-presented error
        pointing to exactly where the error occurred, including a snippet of the
        file.
      </P_p>
      <P_img image={error} alt={"A Whython-8 error message"} />
      <P_p>The same system can also be used for information and warnings:</P_p>
      <P_img image={info} alt={"A Whython-8 information message"} />
      <P_p>
        This system does, however, come with the slight negative that if the
        code files are altered between compilation starting and the error
        message, the contents of the error message will be incorrect or missing
        as the message rereads the file from disk.
      </P_p>

      <P_h1>Importing</P_h1>

      <P_h1>Name Resolution</P_h1>

      <P_h1>Compilation</P_h1>

      <P_h1>Assembly</P_h1>

      <P_h1>Future Improvements</P_h1>
    </ProjWrapper>
  )
}
