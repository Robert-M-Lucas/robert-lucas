import P_img from "../../components/project_entry_utils/P_img.tsx"
import tictactoe_cmd from "./assets/tictactoe_cmd.png"
import tictactoe from "./assets/tictactoe.png"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  compilersTechnology,
  cSharpTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"
import P_hr from "../../components/project_entry_utils/P_hr.tsx"

export const ProgrammingLangProject: Project = {
  name: "programming_lang",
  title: "Custom Programming Language (RLC)",
  shortTitle: "Programming Language",
  subtitle: "Creating my own programming language",
  msSinceEpoch: null,
  image: { image: tictactoe, alt: "TODO" },
  technologies: [cSharpTechnology, compilersTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/ProgrammingLanguage",
      type: githubLink,
    },
  ],
  page: ProgrammingLangEntryPage,
}

function ProgrammingLangEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        A new, improved programming language that I created can be found{" "}
        <P_a href="/projects/programming_lang_2">here</P_a>.
      </P_p>
      <P_hr />
      <P_p>
        I am working on making my own interpreted programming language. The most
        up-to-date information will be in the GitHub's
        <P_a href="https://github.com/Robert-M-Lucas/ProgrammingLanguage/blob/master/README.md">
          readme
        </P_a>{" "}
        and the documentation can be found in the{" "}
        <P_a href="https://github.com/Robert-M-Lucas/ProgrammingLanguage/wiki">
          wiki
        </P_a>
        .
      </P_p>
      <P_img
        legacyNaturalWidth
        image={tictactoe}
        alt={"TODO"}
        caption={
          "Snippet of Tic Tac Toe written in my programming language (outdated version) with my extension's highlighting"
        }
      />
      <P_p>
        I have made a primitive VSCode extension that provides basic syntax
        highlighting and autocompletion to make programming in my language a bit
        easier. It is still, however, missing many features as it only uses
        VSCodes grammar support, not a language server so a large amount of
        IntelliSense features aren't available. Most of the JSON that configures
        the extension is created automatically by my program to make it easier
        to add commands and keywords. The extension can be found
        <P_a href="https://github.com/Robert-M-Lucas/RLC-VSCode-Extension">
          here
        </P_a>{" "}
        and is highly recommended if you want to try writing RLC.
      </P_p>
      <P_p>
        Using C# to write an interpreted programming language isn't a great idea
        in general as C# has some overhead such as garbage collection and the
        language will, presumably have some overhead compared to machine code as
        it is interpreted. For this very reason languages such as Python are
        written in C or C++. I, despite knowing this, chose to use C# anyway as
        I wanted to experiment with making a language and wasn't too concerned
        with its speed. For this purpose C# was perfect as it allowed fast
        prototyping. The language also isn't slow (at least compared to a
        language like Python) because in the processing stage before running (a
        stage that I'm considering caching in the future) all the code gets
        converted to a system of C# objects with a lot of the heavy lifting
        being done during processing time allowing the language to approach C#
        speed.
      </P_p>
      <P_p>
        In terms of syntax and functionality the language is very primitive as
        all objects are either integers or integer arrays of fixed length. While
        there is plenty of support for these arrays to be treated as strings
        their fixed length is still limiting and would make it difficult to
        support IO operations. The lack of support for functions, scope and
        being able to pass any data at all between code files makes any project
        beyond a simple script rapidly spiral in complexity - even in a program
        as simple as Tic Tac Toe. Despite the recent addition of comments to my
        language, the code is still difficult to read due to the lack of
        functions and the syntax. I'm hoping to make a second version that
        includes some abstractions for current code such as function support.
      </P_p>
      <P_img
        image={tictactoe_cmd}
        alt={"TODO"}
        caption={"Tic Tac Toe program running"}
      />
      <P_p>
        I am also currently working on making the program support saving the
        compiled code to a file to make it faster to run after the first time.
        This will, however, be quite difficult as I need a way to serialise and
        de-serialise symbols and make it enough of a speed increase over the
        initial processing to make it worth it.
      </P_p>
    </ProjWrapper>
  )
}
