import {Link, useParams} from "react-router-dom";
import PROJECT_LIST from "./project_list.ts";
import FooterWrapper from "../../../components/FooterWrapper.tsx";
import Header from "../../../components/Header.tsx";
import {Container} from "react-bootstrap";
import {Project} from "./project.ts";
import {PROJECTS_PATH} from "../../../router.tsx";
import HeaderSpacer from "../../../components/HeaderSpacer.tsx";
import RenderTechnologies from "../../../components/project_entry_utils/RenderTechnologies.tsx";
import RenderButtonLinks from "../../../components/project_entry_utils/RenderButtonLinks.tsx";
import RenderProjectDate from "../../../components/project_entry_utils/RenderProjectDate.tsx";

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
            <div>
                <Link viewTransition to={PROJECTS_PATH} className="text-decoration-none">‹ Projects List</Link>
            </div>


            
            <h1 className={project.subtitle ? "mb-0" : "mb-3"}>{project.title}</h1>
            <div className="mb-1">
                <RenderProjectDate ms_since_epoch={project.ms_since_epoch}/>
                {project.technologies.length > 0 && <>
                    &nbsp;|&nbsp;
                    <RenderTechnologies technologies={project.technologies}/>
                </>}
            </div>

            {project.image && <img className="rounded-2 mb-2" src={project.image} alt={"Project Image"}/>}

            {project.subtitle && <p className="text-muted">{project.subtitle}</p>}
            <RenderButtonLinks project={project}/>
            <hr/>
            {project.page()}
        </Container>
    </FooterWrapper>;
}