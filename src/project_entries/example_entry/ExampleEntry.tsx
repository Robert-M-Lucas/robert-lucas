import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import logo from "../../assets/logo.png";
import {TYPESCRIPT} from "../../routes/projects/SingleProjectPage/technology.tsx";

export const ExampleProject: Project = {
    name: "example_entry",
    alt_names: ["example"],
    title: "Example Entry",
    subtitle: "Example Entry Subtitle",
    ms_since_epoch: 1750860135000,
    image: {image: logo, alt: "Example image"},
    page: ExampleEntryPage,
    technologies: [TYPESCRIPT],
    github: "https://github.com/robert-M-Lucas/",
    google_play: "https://example.com"
}

function ExampleEntryPage() {
    return <>Example Entry</>;
}