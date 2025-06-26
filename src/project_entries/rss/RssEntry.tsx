import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx";
import {CRATES_LINK, GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";

export const RssProject: Project = {
    currently_working_on: false,
    name: "rss",
    title: "RSS - [Writing In Progress]",
    subtitle: "TODO",
    ms_since_epoch: 1716902340000,
    page: RssPage,
    technologies: [RUST],
    links: [
        {url: "https://github.com/Robert-M-Lucas/rss2", type: GITHUB_LINK},
        {url: "https://crates.io/crates/rs-script", type: CRATES_LINK},
    ],
}

function RssPage() {
    return <ProjWrapper>
        TODO
    </ProjWrapper>;
}