import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import error from "./assets/error.png"
import multierror from "./assets/multierror.png"
import info from "./assets/info.png"
import P_h1 from "../../components/project-entry-utils/headings/P_h1.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import P_h2 from "../../components/project-entry-utils/headings/P_h2.tsx"
import P_a from "../../components/project-entry-utils/P_a.tsx"
import PProjLink from "../../components/project-entry-utils/PProjLink.tsx"
import nom_example from "./assets/nom_example.txt"
import inner_location from "./assets/inner_location.txt"
import importing from "./assets/importing.txt"
import import_importing from "./assets/import_import.txt"
import use_importing from "./assets/use_import.txt"
import PCodeSrc from "../../components/project-entry-utils/p-code/PCodeSrc.tsx"
import PMono from "../../components/project-entry-utils/PMono.tsx"
import P_ol from "../../components/project-entry-utils/P_ol.tsx"
import P_li from "../../components/project-entry-utils/P_li.tsx"
import P_img from "../../components/project-entry-utils/P_img.tsx"
import { portfolioTwoProject } from "../portfolio_two/portfolio-two.tsx"
import { whython7Project } from "../whython-7/whython-7.tsx"
import PHeadingLink from "../../components/project-entry-utils/PHeadingLink.tsx"
import circular_import from "./assets/circular_import.png"
import circular_type from "./assets/circular_type.png"
import resolve_type_sizes from "./assets/resolve_type_sizes.txt"
import evaluable_tokens from "./assets/evaluable_tokens.txt"
import useHeadingRef from "../../components/project-entry-utils/headings/useHeadingRef.ts"
import line_tokens from "./assets/line_tokens.txt"
import initialisation_line from "./assets/initialisation_line.txt"
// import while_asm from "./assets/while_asm.txt"

export default function Whython8EntryPage() {
  const parsingRef = useHeadingRef()
  const errorHandlingRef = useHeadingRef()
  const nameResolutionRef = useHeadingRef()

  return (
    <ProjWrapper>
      {/*Preface*/}
      <>
        <P_h2>Preface</P_h2>
        <P_p>
          As this project write-up is being written after I got fed up with the
          structure of my{" "}
          <P_a href={"https://robertlucas.pythonanywhere.com"}>
            previous website
          </P_a>
          , but before I created{" "}
          <PProjLink to={portfolioTwoProject}>this website</PProjLink>, this is
          being written a number of months after I last worked on this project.{" "}
          <PProjLink to={whython7Project}>Whython-7</PProjLink> was like a trial
          run of a number of new approaches before creating Whython-8 as a
          refined version. As such, improvements mentioned here might have first
          been introduced in Whython-7.
        </P_p>
      </>

      {/*Parsing*/}
      <>
        <P_h1 headingRef={parsingRef}>Parsing</P_h1>
        <P_p>
          Parsing is potentially one of the greatest steps forward this version
          makes over previous iterations, as it enables a large amount of the
          later improvements thanks to more advanced syntax, syntax being
          converted to better data structures representing it, and a
          comprehensive 'location system' ensuring that the in-code-file
          location of code follows it through the compilation process enabling
          rich error messages.
        </P_p>
        <P_p>
          For this iteration I used a library,{" "}
          <P_a href={"https://crates.io/crates/nom"}>nom</P_a>, to create a
          recursive parser-combinator. Here is an example parser component which
          I will break down:
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
          multiple errors or errors within errors. The nom blueprint for
          creating parsing functions is that they should, on success, return{" "}
          <PMono>
            ([remaining text to parse], [thing that has been parsed])
          </PMono>{" "}
          and this explains the following lines 4 - 10, where <PMono>s</PMono>{" "}
          is what's left after the parser is applied, and the other part of the
          tuple either stores or discards the result. If you are new to Rust,
          the <PMono>?</PMono> operator returns the error from the function if
          the value is an error, otherwise evaluating to the success variant's
          contents.
        </P_p>
        <P_p>
          The parsing functions used by this function are as follows (note that
          a lot are used just to modify <PMono>s</PMono>):
        </P_p>
        <P_ol>
          <P_li>
            <PMono>tag("struct")</PMono> - parse specific text exactly
          </P_li>
          <P_li>
            <PMono>require_ignored</PMono> - parse at least some ignored text
            e.g. whitespace
          </P_li>
          <P_li>
            <PMono>parse_simple_name</PMono> - parse a name (the struct's name)
          </P_li>
          <P_li>
            <PMono>discard_ignored</PMono> - parse ignored text
          </P_li>
          <P_li>
            <PMono>parse_default_terminator_content</PMono> - parse content
            within the braced section
          </P_li>
          <P_li>
            <PMono>parse_parameters</PMono> - parse parameter list (here used to
            get struct attributes as the attribute and parameter syntax is
            near-identical)
          </P_li>
        </P_ol>
        <P_p>
          What is, in my opinion, one of the largest strengths out of nom is
          that of all these functions, only <PMono>tag</PMono> is provided by
          nom which demonstrates how easy it is to implement your own functions
          as nom mainly provides a blueprint for parser functions rather than a
          framework.
        </P_p>
        <P_h2>Parsing Evaluables</P_h2>
        <P_p>
          All of the earlier examples of easy-to-use, clean, and modular parsing
          code can be completely discarded when discussing the code for parsing
          'evaluables' (e.g. <PMono>x*(y+z.func())</PMono>). While the nom style
          of recursive parsing is great in general, in this case where there is
          operator precedence among multiple non-bracketed operations and
          operators that can be used both as prefix and infix operators, there
          isn't much of a way around repeated passes of the list of tokens each
          time replacing some groups of token with a single one representing
          that operation (similar to wrapping them in brackets).
        </P_p>
        <PCodeSrc
          codeSrc={evaluable_tokens}
          language={"rust"}
          caption={
            <>
              Parsing output of <PMono>(3-x)+y*z</PMono>.
            </>
          }
        />
      </>

      {/*Error Handling*/}
      <>
        <P_h1 headingRef={errorHandlingRef}>Error Handling</P_h1>
        <P_p>
          Building on the work the parser does, rich error messages are possible
          as at any point in the compilation process, the origin of the current
          data can be retrieved at any time. Notably, neither the surrounding
          file context, nor the piece of code, is stored in the{" "}
          <PMono>Location</PMono> struct that is used in the compilation process
          greatly improving performance and reducing memory use due to copying.
        </P_p>
        <PCodeSrc codeSrc={inner_location} language={"rust"} />
        <P_p>
          This can be combined with an error message into a well-presented error
          pointing to exactly where the error occurred, including a snippet of
          the file.
        </P_p>
        <P_img image={error} alt={"A Whython-8 error message"} />
        <P_p>
          The same system can also be used for information and warnings:
        </P_p>
        <P_img image={info} alt={"A Whython-8 information message"} />
        <P_p>
          This system does, however, come with the slight negative that if the
          code files are altered between compilation starting and the error
          message, the contents of the error message will be incorrect or
          missing as the message rereads the file from disk.
        </P_p>
        <P_img
          image={multierror}
          alt={"A Whython-8 error message with multiple components"}
          caption={"Example of multiple errors being combined"}
        />
      </>

      {/*Importing*/}
      <>
        <P_h1>Importing</P_h1>
        <P_p>
          As adding file imports was a later addition, rather than one planned
          from the start, the implementation is something I would look to
          improve in the future. In terms of syntax, I created 4 methods for
          importing files:
        </P_p>
        <PCodeSrc codeSrc={importing} language={"text"} />
        <P_p>
          Importing something means making its contents accessible behind a
          namespace e.g.:
        </P_p>
        <PCodeSrc codeSrc={import_importing} language={"rust"} />
        <P_p>
          Whereas using something means making its contents accessible without a
          namespace e.g.:
        </P_p>
        <PCodeSrc codeSrc={use_importing} language={"rust"} />
        <P_p>
          Either one of these applied to a folder (denoted by the import ending
          in a <PMono>/</PMono>) imported/used all the files within that folder
          (non-recursively). The whole system used a global hash table tree of{" "}
          <PMono>FileIDs</PMono> (which you may recognise from{" "}
          <PHeadingLink href={errorHandlingRef.headingID}>
            {errorHandlingRef.headingContents}
          </PHeadingLink>
          ) and <PMono>FolderIDs</PMono> allowing fast tree traversals of files
          included in compilation and only lightweight file references being
          stored with tokens for error reporting.
        </P_p>
        <P_p>
          One particular improvement I'd like to make is allowing circular
          imports which currently just throw an error:
        </P_p>
        <P_img
          image={circular_import}
          alt={
            "A Whython-8 error message showing why a circular import has occured"
          }
        />
      </>

      {/*Name Resolution*/}
      <>
        <P_h1 headingRef={nameResolutionRef}>Name Resolution</P_h1>
        <P_p>
          Name resolution was relatively easy to implement due to the
          well-structured tokens emitted from the{" "}
          <PHeadingLink href={parsingRef.headingID}>
            {parsingRef.headingContents}
          </PHeadingLink>{" "}
          step with only some tedium coming from the data transformations in the
          multiple steps of the resolution process:
        </P_p>
        <P_ol>
          <P_li>Register all the types that exist</P_li>
          <P_li>Fill out all the types with their definitions</P_li>
        </P_ol>
        <P_p>
          Tasks like this where you need to transform entries in a data
          structure using other both transformed and non-transformed data in the
          same structure does sometimes make me wish I picked a less restrictive
          language than Rust but I do always find myself grateful in the end
          when I don't have to deal with strange edge cases, type error, or
          memory issues.
        </P_p>
        <P_p>
          The final solution used is one that goes through all the unevaluated
          types and for all the types inside, uses their definition if they have
          been resolved, recurses to resolve their size if they are in the
          unresolved set, or throws a circular type error as the type being in
          neither set indicates that it is actively being calculated in the
          recursive tree.
        </P_p>
        <PCodeSrc
          codeSrc={resolve_type_sizes}
          language={"rust"}
          caption={"Code for resolving the size of a type"}
        />
        <P_img
          image={circular_type}
          alt={
            "A Whython-8 error message showing why a type's definition is circular"
          }
        />
      </>

      {/*Compilation*/}
      <>
        <P_h1>Compilation</P_h1>
        <P_p>
          Compilation, as you might expect, was the hardest part of this
          project, although this was made a lot easier by doing as much work as
          possible in the{" "}
          <PHeadingLink href={parsingRef.headingID}>
            {parsingRef.headingContents}
          </PHeadingLink>{" "}
          and{" "}
          <PHeadingLink href={nameResolutionRef.headingID}>
            {nameResolutionRef.headingContents}
          </PHeadingLink>{" "}
          steps.
        </P_p>
        <P_h2>Starting Compilation</P_h2>
        <P_p>
          The top level of the compilation process keeps track of all the
          functions remaining to be compiled, starting with just the main
          function, and calls the function to compile each function, with other
          functions being added to the set as they are called by functions. It
          also manages some global state such as constant data that needs to be
          appended in the <PMono>section .data_readonly</PMono> part of the
          assembly file, identifiers that need to be unique throughout the
          entire assembly file, and information/warnings emitted during the
          compilation process.
        </P_p>
        <P_p>
          Notably, this could very easily be multithreaded which I may do in the
          future (along with creating a test case complex enough to justify
          this).
        </P_p>
        <P_h2>Function/line Compilation</P_h2>
        <P_p>
          The next step in the compilation process is iterating through each
          line a given function and compiling them. The definition of a line
          here is more abstract than what you might expect as, for example, an
          entire if statement including ifs, elifs, elses, their conditions, and
          their contents all count as a single line, again thanks to the work of
          the parser.
        </P_p>
        <PCodeSrc
          codeSrc={line_tokens}
          language={"rust"}
          caption={"All possible line tokens and the if token"}
        />
        <P_p>
          As such, this step is also recursive allowing easy handling of the
          control flow in assembly at the current depth, handing off nested
          components to a recursion. Any evaluable e.g. the condition within an
          if statement, the value of an assignment, the value of a return, a
          function, etc. is handled by evaluable compilation.
        </P_p>
        <PCodeSrc
          codeSrc={initialisation_line}
          language={"rust"}
          caption={
            <>
              An example of how an initialisation line is handled (
              <PMono>let x = ...</PMono>). This is simpler than most lines as it
              has no control flow handling.
            </>
          }
        />
        <P_h2>Evaluable Compilation Types</P_h2>
        <P_p>...</P_p>
        <P_h2>Unrandom</P_h2>
      </>

      {/*Assembly*/}
      <>
        <P_h1>Assembly</P_h1>
      </>

      {/*Other*/}
      <>
        <P_h1>Other</P_h1>
        <P_p>This was just a brief ...</P_p>
      </>

      {/*Future Work*/}
      <>
        <P_h1>Future Work</P_h1>
        <P_h2>Better Importing</P_h2>
        <P_h2>Assembly Optimisation</P_h2>
        <P_h2>LLVM</P_h2>
      </>
    </ProjWrapper>
  )
}
