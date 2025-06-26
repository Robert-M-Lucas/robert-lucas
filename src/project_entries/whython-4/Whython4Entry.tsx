import ProjImage from "../../components/project_entry_utils/ProjImage.tsx";
import tictactoe from "./assets/tictactoe.png";
import whython_4_short from "./assets/whython_4_short.png"
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {RUST} from "../../routes/projects/SingleProjectPage/technology.tsx";
import ProjLink from "../../components/project_entry_utils/ProjLink.tsx";
    
export const Whython4Project: Project = {
    currently_working_on: false,
    name: "whython-4",
    title: "Whython 4",
    subtitle: "An more modern and maintainable programming language with better flow control and function support",
    ms_since_epoch: null,
    image: {image: whython_4_short, alt: "TODO"},
    technologies: [RUST],
    links: [
        {url: "https://github.com/Robert-M-Lucas/whython-4", type: GITHUB_LINK}
    ],
    page: Whython4EntryPage
};

function Whython4EntryPage() {
    return <ProjWrapper>

    <ProjParagraph>
        This project is quite similar to my <ProjLink href="programming_lang_2">second programming language</ProjLink>, however
        this project is created in Rust which has far better developer ergonomics and far fewer (no) difficult to
        diagnose SEGFAULTS. This has allowed me to create a much more maintainable project with more features (such as
        functions) due as the project is generally better structured. Due to it still having the same core framework as
        my last language, it still doesn't have a stack or dynamically allocated memory making recursion not possible.
    </ProjParagraph>
    <ProjParagraph>
        I see this language as being more of a stepping stone as I'm planning on building on creating a fourth iteration
        of my language (sensibly named 'Whython 5') based on this one with support for dynamically allocated memory and
        a call stack.
    </ProjParagraph>
    <ProjImage legacyNaturalWidth image={tictactoe} alt={"TODO"} caption={"Tic Tac Toe written in Whython 4"}/>
    </ProjWrapper>;
}