import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {RUST} from "../../routes/projects/SingleProjectPage/technology.tsx";
import code from "./assets/code.png"
    
export const Whython7Project: Project = {
    currently_working_on: false,
    name: "whython-7",
    title: "Whython 7",
    subtitle: "An in-development programming language created in Rust compiling to assembly",
    ms_since_epoch: null,
    image: {image: code, alt: "TODO"},
    technologies: [RUST],
    links: [
        {url: "https://github.com/Robert-M-Lucas/whython-7", type: GITHUB_LINK}
    ],
    page: Whython7EntryPage
};

function Whython7EntryPage() {
    return <ProjWrapper>

    <ProjParagraph>
        This is a currently under development programming language built in a completely different manner to previous iterations.
    </ProjParagraph>
    <ProjParagraph>
        This iteration has Rust-like syntax and compiles down to assembly without the use of IL tool such as LLVM. Only
        the final assembling and linking steps are handled by other programs (NASM and MSVC respectively).
    </ProjParagraph>
    </ProjWrapper>;
}