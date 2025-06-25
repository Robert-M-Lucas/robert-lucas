import {Link, useNavigate, useParams} from "react-router-dom";
import PROJECT_LIST from "./project_list.ts";
import FooterWrapper from "../../../components/FooterWrapper.tsx";
import Header from "../../../components/Header.tsx";
import {Container} from "react-bootstrap";
import {Project} from "./project.ts";
import {getProjectPath, PROJECTS_PATH} from "../../../router.tsx";
import HeaderSpacer from "../../../components/HeaderSpacer.tsx";
import RenderTechnologies from "../../../components/RenderTechsAndLinks.tsx";
import RenderButtonLinks from "../../../components/RenderButtonLinks.tsx";
import RenderProjectDate from "../../../components/RenderProjectDate.tsx";
import FullscreenCenter from "../../../components/FullscreenCenter.tsx";
import ProjImage from "../../../components/project_entry_utils/ProjImage.tsx";
import RenderLegacyWarning from "../../../components/RenderLegacyWarning.tsx";

export default function SingleProjectPage() {
    const params = useParams();
    const navigate = useNavigate();
    if (params.project) {
        for (const project of PROJECT_LIST) {
            if (project.name === params.project) {
                return SingleProjectPageRenderer(project);
            }
        }

        for (const project of PROJECT_LIST) {
            if (project.alt_names) {
                for (const alt_name of project.alt_names) {
                    if (alt_name === params.project) {
                        setTimeout(() => navigate(getProjectPath(project.name), { replace: true, viewTransition: true}), 0);
                        return <FullscreenCenter>Redirecting</FullscreenCenter>;
                    }
                }
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
                    <RenderTechnologies currently_working_on={project.currently_working_on} technologies={project.technologies}/>
                </>}
            </div>

            {project.image && <ProjImage image={project.image.image} alt={project.image.alt}/>}

            {project.subtitle && <p className="text-muted mb-2">{project.subtitle}</p>}

            <RenderButtonLinks links={project.links}/>

            <hr/>

            {project.ms_since_epoch === null && <RenderLegacyWarning/>}

            {project.page()}
        </Container>
    </FooterWrapper>;
}