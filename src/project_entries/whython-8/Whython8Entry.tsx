import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";

export const Whython8Project: Project = {
    currently_writing: true,
    name: "whython-8",
    title: "Whython 8",
    subtitle: "TODO",
    ms_since_epoch: 1726665540000,
    page: Whython8Page,
    technologies: [RUST],
    links: [
        {url: "https://github.com/Robert-M-Lucas/whython-8", type: GITHUB_LINK},
    ],
}

function Whython8Page() {
    return <ProjWrapper>
        TODO
    </ProjWrapper>;
}