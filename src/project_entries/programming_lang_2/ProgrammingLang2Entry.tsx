import Pimg from "../../components/project_entry_utils/Pimg.tsx"
import execute from "./assets/execute.png"
import save_compiled from "./assets/save_compiled.png"
import go_to_if from "./assets/go_to_if.png"
import memory_manager from "./assets/memory_manager.png"
import int_assign from "./assets/int_assign.png"
import int_create from "./assets/int_create.png"
import int_type from "./assets/int_type.png"
import reference from "./assets/reference.png"
import reference_handler from "./assets/reference_handler.png"
import get_reference from "./assets/get_reference.png"
import block_handler from "./assets/block_handler.png"
import handle_line from "./assets/handle_line.png"
import lexical_result from "./assets/lexical_result.png"
import output from "./assets/output.png"
import fizzbuzz from "./assets/fizzbuzz.png"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import { CPP } from "../../routes/projects/SingleProjectPage/technology.tsx"
import Pa from "../../components/project_entry_utils/Pa.tsx"

export const ProgrammingLang2Project: Project = {
  name: "programming_lang_2",
  title: "Custom Programming Language 2",
  subtitle:
    "Improved programming language with support for many types and conditional logic",
  ms_since_epoch: null,
  image: { image: fizzbuzz, alt: "TODO" },
  technologies: [CPP],
  links: [],
  page: ProgrammingLang2EntryPage,
}

function ProgrammingLang2EntryPage() {
  return (
    <ProjWrapper>
      <Pp>
        I wanted to improve on my{" "}
        <Pa href="/projects/programming_lang">first programming language</Pa> by
        creating something that is more 'pythonic' as opposed one that is more
        similar to COBOL or assembly. I also wanted to make it more performant
        that my first language. To achieve this, I created this project in C++
        as opposed to C# for the improved performance and designed it from the
        ground up to support as stack-like scope system so that loops and
        conditional blocks could easily be added as well. I also made sure it
        supported compilation to an intermediate binary code that could be saved
        and loaded and designed it carefully so that it could support various
        types, operators between types as well as arrays of types. In the end I
        managed to create a language with all of these features that sometimes
        beats Python in performance testing.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={fizzbuzz}
        alt={"TODO"}
        caption={"Fizzbuzz written in this language"}
      />
      <Pimg
        image={output}
        alt={"TODO"}
        caption={"Snippet of the output of the above code"}
      />
      <Pp>
        This project required a large number of separate components working
        together which made it important to plan the structure of the code ahead
        of time. I found c++ to be a nightmare for organising code as it
        required a large amount of boilerplate code in the form of header files.
      </Pp>
      <Pp>
        For the compilation stage, a lexical analyser converts the input into
        symbols that have a type, value and indentation allowing a tree of valid
        code patterns to understand the code and removing all unnecessary
        whitespace.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={lexical_result}
        alt={"TODO"}
        caption={"Class holding symbol data"}
      />
      <Pp>
        These symbols are then fed into a function that creates the binary
        instructions and allocates variable space. One of the arguments to this
        function is a 'BlockHandler'. This is essentially what controls all the
        scoping as it creates instructions when entering and exiting e.g. for an
        if block, skipping the code if a condition is not met or, for a while
        block, looping until a condition is not met.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={handle_line}
        alt={"TODO"}
        caption={"Line handling function signature"}
      />
      <Pimg
        legacyNaturalWidth
        image={block_handler}
        alt={"TODO"}
        caption={"BlockHandler"}
      />
      <Pp>
        Each 'BlockHandler' contains a reference to the 'BlockHandler' from the
        layer above. This allows a method to be created that searches for
        variable names first in the current block, then the one above, and so on
        until the reference is either found or not. It also means that when a
        user de-dents their code, you can simply set the current block to the
        one above itself and discard the old current one.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={get_reference}
        alt={"TODO"}
        caption={"Recursively getting a reference"}
      />
      <Pimg legacyNaturalWidth image={reference_handler} alt={"TODO"} />
      <Pimg legacyNaturalWidth image={reference} alt={"TODO"} />
      <Pp>
        Most of variable memory allocation and binary instruction creation is
        handled by the type which has its functions called by the function that
        handles the symbols.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={int_type}
        alt={"TODO"}
        caption={"Integer type"}
      />
      <Pimg
        legacyNaturalWidth
        image={int_create}
        alt={"TODO"}
        caption={"Creating an integer"}
      />
      <Pimg
        legacyNaturalWidth
        image={int_assign}
        alt={"TODO"}
        caption={"Creating instruction to assign a value to an integer"}
      />
      <Pp>
        'VManager' and 'PManager' in the above code hold variable memory and the
        binary instruction respectively. They are both of type 'MemoryManager'
        and their data is what's either saved or passed to the interpreter to
        execute.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={memory_manager}
        alt={"TODO"}
        caption={"Memory Manager"}
      />
      <Pp>
        'Instructions' are classes that create the binary code that will be
        executed at runtime.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={go_to_if}
        alt={"TODO"}
        caption={
          "Instruction that goes to a specified instruction address if the boolean at a specified address is true"
        }
      />
      <Pp>
        Once compilation has finished, the bytes from the two 'MemoryManager'
        are saved and/or passed to the interpreter.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={save_compiled}
        alt={"TODO"}
        caption={
          "Saving compiled program. Note that 'v_memory' size is saved to so that 'v_memory' and 'p_memory' can be separated when the file is loaded"
        }
      />
      <Pp>
        The compiled code is then simply executed according to code for what
        each instruction does and a counter to keep track of where the
        interpreter is in the program.
      </Pp>
      <Pimg
        legacyNaturalWidth
        image={execute}
        alt={"TODO"}
        caption={"Snippet of execution code"}
      />
    </ProjWrapper>
  )
}
