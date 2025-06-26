import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {CPP} from "../../routes/projects/SingleProjectPage/technology.tsx";
import ProjLink from "../../components/project_entry_utils/ProjLink.tsx";

export const PiProject: Project = {
    currently_working_on: false,
    name: "pi",
    title: "Pi Calculator",
    subtitle: "A program that calculates π using a physics simulation",
    ms_since_epoch: null,
    technologies: [CPP],
    links: [
        {url: "https://github.com/Robert-M-Lucas/Elastic-Collision-Bounce-Calculator", type: GITHUB_LINK}
    ],
    page: PiEntryPage
};

function PiEntryPage() {
    return <ProjWrapper>

    <ProjParagraph>
        I made this program after me teacher told me about this as I thought it was very strange that pi showed up in a physics simulation. This is a very inefficient way to calculate pi,
        but I wrote it in C++ to make it as fast as possible. I found that <ProjLink href="https://www.youtube.com/watch?v=jsYwFizhncE">this
        YouTube video</ProjLink> gives an excellent explanation of the phenomenon.
    </ProjParagraph>
    <ProjParagraph>
        This was mostly a maths problem as I needed to rearrange the equations for elastic collisions to give me the output I wanted.
    </ProjParagraph>
    </ProjWrapper>;
}