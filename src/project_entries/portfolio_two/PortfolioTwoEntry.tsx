import {Project} from "../../routes/projects/SingleProjectPage/project.ts";

import {REACT, TYPESCRIPT} from "../../routes/projects/SingleProjectPage/technology.tsx";
import {createCustomLink, GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";

export const PortfolioTwoProject: Project = {
    currently_working_on: true,
    name: "portfolio_two",
    title: "Portfolio Website (This Website)",
    subtitle: "This website, created to replace my old portfolio website",
    ms_since_epoch: 1750860747000,
    page: PortfolioTwoEntryPage,
    technologies: [TYPESCRIPT, REACT],
    links: [
        {url: "https://github.com/Robert-M-Lucas/robert-lucas", type: GITHUB_LINK},
        {url: "https://robertlucas.pythonanywhere.com", type: createCustomLink("Old Website")}
    ],
}

function PortfolioTwoEntryPage() {
    return <>
        This entry is still being written
    </>;
}