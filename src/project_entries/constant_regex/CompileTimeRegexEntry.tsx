import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";

export const CompileTimeRegexProject: Project = {
    currently_working_on: false,
    name: "constant_regex",
    title: "Compile Time Regex Automaton - [Writing In Progress]",
    subtitle: "Compile time regex DFA generation to eliminate regex creation overhead at runtime",
    ms_since_epoch: 1736777940000,
    page: CompileTimeRegexPage,
    technologies: [RUST],
    links: [
        {url: "https://github.com/Robert-M-Lucas/const_regex", type: GITHUB_LINK},
    ],
}

function CompileTimeRegexPage() {
    return <ProjWrapper>
        TODO
    </ProjWrapper>;
}