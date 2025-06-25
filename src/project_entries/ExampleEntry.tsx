import {Project} from "../routes/projects/SingleProjectPage/project.ts";

export const ExampleEntryProject: Project = {
    name: "Example",
    title: "Example Entry",
    subtitle: "Example Entry Subtitle",
    page: ExampleEntryPage,
}

function ExampleEntryPage() {
    return <>Example Entry</>;
}