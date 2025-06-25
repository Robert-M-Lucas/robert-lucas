import {Project} from "../routes/projects/SingleProjectPage/project.ts";
import logo from "../assets/logo.png";
import {TYPESCRIPT} from "../routes/projects/SingleProjectPage/technology.tsx";

export const ExampleEntryProject: Project = {
    name: "Example",
    title: "Example Entry",
    subtitle: "Example Entry Subtitle",
    description: "Example Entry Description",
    ms_since_epoch: 1750860135000,
    image: logo,
    page: ExampleEntryPage,
    technologies: [TYPESCRIPT],
    github: "https://github.com/robert-M-Lucas/",
    google_play: "https://example.com"
}

function ExampleEntryPage() {
    return <>Example Entry</>;
}