import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import logo from "../../assets/icon.png";
import {TYPESCRIPT} from "../../routes/projects/SingleProjectPage/technology.tsx";
import {GITHUB_LINK, GOOGLE_PLAY_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";

export const ExampleProject: Project = {
    currently_working_on: false,
    name: "example_entry",
    alt_names: ["example"],
    title: "Example Entry",
    subtitle: "Example Entry Subtitle",
    ms_since_epoch: 1750860135000,
    image: {image: logo, alt: "Example image"},
    page: ExampleEntryPage,
    technologies: [TYPESCRIPT],
    links: [
        {url: "https://github.com/Robert-M-Lucas/", type: GITHUB_LINK},
        {url: "https://example.com", type: GOOGLE_PLAY_LINK}
    ],
};

function ExampleEntryPage() {
    return <ProjWrapper>Example Entry</ProjWrapper>;
}