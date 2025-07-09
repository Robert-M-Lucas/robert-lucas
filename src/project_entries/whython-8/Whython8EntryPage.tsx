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
import P_ul from "../../components/project-entry-utils/P_ul.tsx"
// import while_asm from "./assets/while_asm.txt"
import prefix_op from "./assets/prefix_op.txt"
import P_h3 from "../../components/project-entry-utils/headings/P_h3.tsx"
import markers_whython from "./assets/markers_whython.txt"
import markers_asm from "./assets/markers_asm.txt"
import PQuote from "../../components/project-entry-utils/PQuote.tsx"
import DHashMap from "./assets/DHashMap.txt"
import hash_map_new from "./assets/hash_map_new.txt"
import unrandom from "./assets/unrandom.txt"
import deref_impl from "./assets/deref_impl.txt"
import iter_error from "./assets/iter_error.png"
import linked_list_why from "./assets/linked_list_why.txt"
import cmd_output from "./assets/cmd_output.png"
import cmd_output_why from "./assets/cmd_output_why.txt"
import bad_asm_why from "./assets/bad_asm_why.txt"
import bad_asm from "./assets/bad_asm.txt"

export default function Whython8EntryPage() {
  const parsingRef = useHeadingRef()
  const errorHandlingRef = useHeadingRef()
  const nameResolutionRef = useHeadingRef()
  const llvmRef = useHeadingRef()
  const linkedListRef = useHeadingRef()

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
          <PHeadingLink heading_id={errorHandlingRef.headingID}>
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
          <PHeadingLink heading_id={parsingRef.headingID}>
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
          <PHeadingLink heading_id={parsingRef.headingID}>
            {parsingRef.headingContents}
          </PHeadingLink>{" "}
          and{" "}
          <PHeadingLink heading_id={nameResolutionRef.headingID}>
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
        <P_h2>Function/Line Compilation</P_h2>
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
        <P_p>
          Compiling evaluable sections was the hardest part of the hardest part
          of this project due to it needing to be able to compile evaluable
          sections in 4 very similar ways that had enough code overlap to make
          annoying to maintain separately but had just enough difference between
          them to not be combinable. Were I to remake this project, this is
          certainly something I'd focus on. The 4 types of compilation were as
          follows:
        </P_p>
        <P_ol>
          <P_li>
            <PMono>new</PMono> - Place the result into a new variable and return
            a reference to that variable
            <P_ul>
              <P_li>
                Used heavily by <PMono>reference</PMono> where there needs to be
                a reference of something that does not exist e.g. a literal, an
                operation result, etc.
              </P_li>
            </P_ul>
          </P_li>
          <P_li>
            <PMono>into</PMono> - Place the result into a specified existing
            variable
            <P_ul>
              <P_li>
                This could be used in the last step of an assignment where the
                result needs to be placed into a variable
              </P_li>
            </P_ul>
          </P_li>
          <P_li>
            <PMono>reference</PMono> - Return a reference to the result
            <P_ul>
              <P_li>
                This could be used in intermediary steps of an evaluation as it
                is being recursively compiled. Usually used instead of{" "}
                <PMono>new</PMono> as it can provide performance gains.
              </P_li>
            </P_ul>
          </P_li>
          <P_li>
            <PMono>type_only</PMono> - Evaluate only the type of the result (no
            assembly generated)
            <P_ul>
              <P_li>
                Can be used to determine whether types are correct, work out how
                much space to reserve, etc.
              </P_li>
            </P_ul>
          </P_li>
        </P_ol>
        <P_p>
          Here's an example of the code to perform a prefix operation (e.g.{" "}
          <PMono>!x</PMono>):
        </P_p>
        <PCodeSrc codeSrc={prefix_op} language={"rust"} />
        <P_p>
          Note that line 40 would be omitted in the <PMono>into</PMono>{" "}
          compilation type as the output location would already exist. An
          additional check that the result of the operation was the expected
          type would also have to be performed.
        </P_p>
      </>

      {/*Assembly*/}
      <>
        <P_h1>Assembly</P_h1>
        <P_p>
          This project compiled code directly to x86_64 assembly with no
          intermediary code (such as{" "}
          <PHeadingLink heading_id={llvmRef.headingID}>
            {llvmRef.headingContents}
          </PHeadingLink>
          ). This was achieved by generating NASM code as text, and then using
          NASM to assemble it. Generating machine code directly could quite
          likely be practical due to the simplicity of assembling, and that my
          code uses only a known subset of assembly. While this could be
          interesting, especially as it might allow me to go further into
          assembly optimisations e.g. building a model of the CPU registers
          virtually and using that model to calculate their most efficient use,
          I currently plan to use LLVM, if I ever revisit this project, as it
          enables cross-platform compilation and is overall easier to target
          than assembly.
        </P_p>
        <P_p>
          The assembly (particularly how function calls worked) were modelled
          off of simply looking at the assembly code generated by{" "}
          <PMono>gcc</PMono> using <P_a href="https://godbolt.org">Godbolt</P_a>
          . This means that, though similar, it is not compatible with any
          particular C calling convention. Adherence to a calling convention
          either manually or through the use of LLVM could enable a more
          seamless integration of existing C library functions.
        </P_p>
        <P_h2>Development Tooling</P_h2>
        <P_h3>Markers</P_h3>
        <P_p>
          As assembly is very hard to read with single lines of code sometimes
          ballooning to tens of lines of assembly, markers available only in
          debug builds were very useful for diagnosing assembly bugs.
        </P_p>
        <PCodeSrc codeSrc={markers_whython} language={"rust"} />
        <PCodeSrc codeSrc={markers_asm} language={"text"} />
        <P_p>
          I initially planned to add comments everywhere in the assembly
          providing more information and otherwise erased data (e.g. variable
          names) however this will have to wait for the next iteration.
        </P_p>
        <P_h3>Unrandom</P_h3>
        <P_p>
          When compiling code with multiple functions, I found that the order of
          my functions in the assembly code generated was changing on each run,
          making debugging where I wanted to see the exact change in the output
          when making changes to the code very difficult. To my knowledge I had
          not used any randomisation tools/libraries and so was very surprised
          to see this...
        </P_p>
        <PQuote
          author={"HashMap documentation"}
          source={
            "https://doc.rust-lang.org/std/collections/struct.HashMap.html"
          }
        >
          By default, HashMap uses a hashing algorithm selected to provide
          resistance against HashDoS attacks. The algorithm is randomly seeded,
          and a reasonable best-effort is made to generate this seed from a high
          quality, secure source of randomness provided by the host without
          blocking the program. [...]
        </PQuote>
        <P_p>Ah.</P_p>
        <P_p>
          While hash maps in Rust can be made to be deterministic, this would
          require the type of every hash map in the code base to change and, as
          I wanted them to only be deterministic in debug mode, every hash map
          type would have to be defined twice, once for the debug hash map and
          once for the release hash map massively cluttering and duplicating
          code.
        </P_p>
        <P_p>
          The solution is simple though, right? Replace all the hash maps with a
          custom type definition that conditionally makes them deterministic:
        </P_p>
        <PCodeSrc codeSrc={DHashMap} language={"rust"} />
        <P_p>
          Well of course it could not be that simple. For some reason know only
          to whoever wrote the code, <PMono>HashMap::new()</PMono> is only
          defined for the random hasher:
        </P_p>
        <PCodeSrc codeSrc={hash_map_new} language={"rust"} />
        <P_p>
          Fantastic. So I guess I'll just implement my own <PMono>new</PMono>
          method then...
        </P_p>
        <PQuote
          author={"The Rust Reference"}
          source={
            "https://doc.rust-lang.org/reference/items/implementations.html#r-items.impl.trait.orphan-rule"
          }
        >
          The orphan rule states that a trait implementation is only allowed if
          either the trait or at least one of the types in the implementation is
          defined in the current crate. It prevents conflicting trait
          implementations across different crates and is key to ensuring
          coherence.
        </PQuote>
        <P_p>
          While I could get around this (as you're supposed to) by creating a
          trait with a new method and then implementing that trait on my custom
          hash map, this would require that trait to be imported conditionally
          on the project being in debug mode - something that I would have to
          remember to do if I had my IDE set to release mode as it wouldn't know
          that in debug mode the import needs to be present.
        </P_p>
        <P_p>
          Ok, this is getting a bit frustrating but I can think of one more
          solution. Rust allows you to implement the <PMono>Deref</PMono> trait
          which will automatically try to use methods on a specified attribute
          if the method isn't present on the struct i.e.{" "}
          <PMono>alpha.bravo()</PMono> calls alpha's method if it exists but, if
          not, may call <PMono>alpha.attribute.bravo()</PMono>. This is
          especially useful with smart pointer-like types such as{" "}
          <PMono>
            <P_a href={"https://doc.rust-lang.org/std/rc/struct.Rc.html"}>
              Rc
            </P_a>
          </PMono>{" "}
          (a reference-counter smart pointer) where you want to be able to
          access methods on the contained type directly (
          <PMono>my_rc.method()</PMono>) rather than having to first get a
          reference to that type (<PMono>my_rc.inner().method()</PMono>). So,
          here is the implementation:
        </P_p>
        <PCodeSrc
          codeSrc={deref_impl}
          language={"rust"}
          caption={"This was, of course, also repeated for hash sets"}
        />
        <P_p>So surely all is well then...</P_p>
        <P_img
          image={iter_error}
          alt={"A Rust build error stating that DHashMap is not an iterator"}
        />
        <P_p>
          I worked out that making it an iterator (and implementing all the
          other traits I'd ever need in the future e.g. <PMono>Default</PMono>)
          would be such a pain that I decided to just bodge it with some awful
          code that could be broken by a 'non-breaking' change to the Rust
          standard library as I was just using this as a development tool and it
          wasn't worth my time. Here is the result:
        </P_p>
        <PCodeSrc codeSrc={unrandom} language={"rust"} />
        <P_p>Amazing.</P_p>
        <P_p>
          As a side note, I want to point out that I generally disagree with the
          standard library's <PMono>HashMap/HashSet</PMono> implementation using
          randomisation. While I both understand the security concerns and that
          you should not rely on the order of a hash map, I tend to see
          nondeterminism as an explicitly opt-in and expect to find the literal
          word 'random' somewhere in <i>my code</i> if that is not the case.
        </P_p>
      </>

      {/*Conclusion*/}
      <>
        <P_h1>Conclusion</P_h1>
        <P_p>
          This was just a brief(ish) look at some parts of this project and
          there is a great deal more that was not covered. I found that this
          project, in particular, had one of the most planning heavy balances of
          any coding project I've done as any poor decisions made earlier
          quickly come back to bite you.
        </P_p>
      </>

      {/*Future Work*/}
      <>
        <P_h1>Future Work</P_h1>
        <P_h2>Arrays and Slicing</P_h2>
        <P_p>
          Probably the most obvious missing feature is support for arrays (and
          slicing would also be nice). Fundamentally, support for arrays
          required an addition to the type system however as I didn't have
          arrays on my feature list until the compiling step was essentially
          working, this wasn't included from the start. With some large
          refactoring (although nothing particularly difficult), arrays could be
          added however with the amount of time already spent on this project, I
          decided to polish the current feature set, as opposed to adding new
          ones.
        </P_p>
        <P_h2>Reference Coercion</P_h2>
        <P_p>
          In{" "}
          <PHeadingLink heading_id={linkedListRef.headingID}>
            {linkedListRef.headingContents}
          </PHeadingLink>
          , you might notice the constant use of the <PMono>*</PMono>{" "}
          dereferencing operator. This is because in this language, if a
          variable is not a reference, it is treated as being used by-value and
          is free to be copied. As such any attribute being accessed (e.g.{" "}
          <PMono>node.next</PMono>) returns a reference so that the original{" "}
          <PMono>next</PMono> can be modified, rather than a copy of it. As
          such, references often need to be dereferenced to get the underlying
          value. This could be fixed by extending the type system to keep track
          of when a non-reference is linked to a variable.
        </P_p>
        <P_h2>Assembly Optimisation</P_h2>
        <P_p>
          The assembly includes a lot of redundant instructions as each bit of
          generated assembly is meant to work completely independently of
          others. Here is an example of Whython code, along with the generated
          assembly for the function body:
        </P_p>
        <PCodeSrc codeSrc={bad_asm_why} language={"rust"} />
        <PCodeSrc codeSrc={bad_asm} language={"text"} />
        <P_p>
          With line numbers denoted in square brackets, heres what happens in
          order:
        </P_p>
        <P_ol>
          <P_li>
            [1-2] - 7 and 13 are moved into the addresses for <PMono>a</PMono>{" "}
            and <PMono>b</PMono> respectively.
          </P_li>
          <P_li>
            [3-6] - the values of <PMono>a</PMono> and <PMono>b</PMono> are both
            copied into new variables.
          </P_li>
          <P_li>
            [7-14] - the two values are compared, setting a boolean to 0 if
            false, and 1 if true.
          </P_li>
          <P_li>
            [15-] - the if statement is run conditionally based on the value of
            the boolean
          </P_li>
        </P_ol>
        <P_p>
          There are some obvious improvements to be made here, such as the
          variables being initialised, then being copied to new addresses before
          being compared, instead of simply being compared at their existing
          addresses. Another example is that when the values are compared,
          instead of conditionally setting a boolean to true or false, the if
          statement could directly be conditionally run.
        </P_p>
        <P_p>
          While these improvements are easy to spot from the generated assembly,
          fixing a lot of these issues would require coding special cases and
          making the compiling system less modular and less maintainable. An
          interesting approach might be to have an intermediary interface that
          we tell what we are trying to do in assembly, and it writes the
          assembly allowing it to implement special cases without complicating
          the compiling code, potentially also modelling registers and how they
          are used to reduce copying. Another approach might be to create a
          separate program that analyses and optimises assembly, without any
          insight from the compiler during compilation although I do believe
          this would be more complicated. This is mostly irrelevant, however, if
          I do choose to move to{" "}
          <PHeadingLink heading_id={llvmRef.headingID}>
            {llvmRef.headingContents}
          </PHeadingLink>
          .
        </P_p>
        <P_h2 headingRef={llvmRef}>LLVM</P_h2>
        <P_p>
          LLVM is the final technology that, if used in my next iteration, would
          allow me to create a production-ready programming language. It is a
          collection of technologies, namely an Intermediate Representation (IR)
          code that LLVM backends can then compile to a very large number of
          architectures. This would allow the language to finally work on
          multiple platforms, and its adherence to calling conventions would
          allow it to interact with C libraries. It also has a large number of
          optimisation features, and its code being slightly higher level than
          assembly makes the compilation step easier.
        </P_p>
        <P_p>
          Despite being aware of LLVM before starting this iteration of Whython
          and being aware of its advantages, I still decided against using it.
          While a large number of 'real' programming languages (e.g. Rust) use
          LLVM, my aim with this iteration was to get very close to the bare
          metal, learning about not just what, for example, the Rust compiler
          was doing but going all the way down to what LLVM is doing in Rust's
          compiler. I am, however, strongly considering using it should I ever
          revisit Whython as I would likely want my next iteration to be a
          production-ready language with no rough edges, and LLVM would take a
          large (if not impossible, should you count support for different
          architectures) weight off of my shoulders.
        </P_p>
        <P_h2>Miscellaneous</P_h2>
        <P_ul>
          <P_li>
            Improve importing - allow importing individual functions and marking
            functions as public.
          </P_li>
          <P_li>
            Type parameter - add support for type parameters e.g. a single
            linked list implementation being able to hold any type.
          </P_li>
        </P_ul>
      </>

      {/*Examples*/}
      <>
        <P_h1>Examples</P_h1>
        <P_h2 headingRef={linkedListRef}>Linked List Implementation</P_h2>
        <PCodeSrc codeSrc={linked_list_why} language={"rust"} />
        <P_h2>Command Line Output</P_h2>
        <PCodeSrc codeSrc={cmd_output_why} language={"rust"} />
        <P_img
          image={cmd_output}
          alt={"Command line output of running Whython-8"}
          caption={
            "The compiled binary can, of course, be executed on its own which would result in only the text between the lines being outputted."
          }
        />
      </>
    </ProjWrapper>
  )
}
