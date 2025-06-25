import {Link, useParams} from "react-router-dom";
import PROJECT_LIST from "./project_list.ts";
import FooterWrapper from "../../../components/FooterWrapper.tsx";
import Header from "../../../components/Header.tsx";
import {Container} from "react-bootstrap";
import {Project} from "./project.ts";
import {PROJECTS_PATH} from "../../../router.tsx";
import HeaderSpacer from "../../../components/HeaderSpacer.tsx";

export default function SingleProjectPage() {
    const params = useParams();
    if (params.project) {
        for (const project of PROJECT_LIST) {
            if (project.name === params.project) {
                return SingleProjectPageRenderer(project);
            }
        }

        throw Error("Project '" + params.project + "' not found");
    }

    throw Error("No project specified");
}



function SingleProjectPageRenderer(project: Project) {
    return <FooterWrapper>
        <Header/>
        <HeaderSpacer/>
        <Container>
            <Link to={PROJECTS_PATH} className="text-decoration-none">‹ Projects List</Link>
            <h1 className={project.subtitle ? "mb-0" : "mb-3"}>{project.title}</h1>
            {project.subtitle && <p className="text-muted">{project.subtitle}</p>}
            {project.page()}
        </Container>
    </FooterWrapper>;
}