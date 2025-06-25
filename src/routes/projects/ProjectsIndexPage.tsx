import FooterWrapper from "../../components/FooterWrapper";
import Header from "../../components/Header.tsx";
import {Button, Card, Container} from "react-bootstrap";
import PROJECT_LIST from "./SingleProjectPage/project_list.ts";
import HeaderSpacer from "../../components/HeaderSpacer.tsx";
import {useState} from "react";
import {Project} from "./SingleProjectPage/project.ts";
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx";
import RenderProjectDate from "../../components/RenderProjectDate.tsx";
import RenderTechnologies from "../../components/RenderTechsAndLinks.tsx";
import ProjImage from "../../components/project_entry_utils/ProjImage.tsx";
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx";
import {useNavigate} from "react-router-dom";
import {getProjectPath} from "../../router.tsx";


export default function ProjectsIndexPage() {
    const [compact, setCompact] = useState(false);

    return <FooterWrapper>
        <Header/>
        <HeaderSpacer/>
        <Container className="pb-5">
            <div className="d-flex justify-content-between">
                <div>
                    <h1>Projects</h1>
                    <p className="text-muted">Click on any project to learn more</p>
                </div>
                <div>
                    <Button variant={"outline-dark"} onClick={() => {setCompact(!compact)}} href={"#"}>{compact ? "Switch to expanded view" : "Switch to compact view"}</Button>
                </div>
            </div>

            {PROJECT_LIST.map((project, i) => <div key={i}><hr/>{compact ?
                    <CompactEntry project={project}/> :
                    <ExpandedEntry project={project}/>}</div>)
                }

            <hr/>
            <Card className={"mt-5 text-center"}>
                <Card.Title className={"mt-3"}>Migration in progress</Card.Title>
                <Card.Body>
                    This list is incomplete as projects are still being transferred from my <a href={"https://robertlucas.pythonanywhere.com"} target={"_blank"}>old website</a>.
                </Card.Body>
            </Card>
        </Container>
    </FooterWrapper>;
}

interface EntryProps {
    project: Project;
}

function CompactEntry({project}: EntryProps) {
    const navigate = useNavigate();
    return <div style={{cursor: "pointer"}} onClick={async () => navigate(getProjectPath(project.name), {viewTransition: true})}>
        <h2 className="mb-0">{project.title}</h2>
        <div className="d-flex justify-content-start align-items-center mb-2">
            <RenderProjectDate ms_since_epoch={project.ms_since_epoch}/> &nbsp;|&nbsp;
            <RenderTechsAndLinks currently_working_on={project.currently_working_on} technologies={project.technologies} links={project.links}/>
        </div>
        <p className={"text-muted"}>{project.subtitle}</p>
    </div>;
}

function ExpandedEntry({project}: EntryProps) {
    const navigate = useNavigate();
    return <div style={{cursor: "pointer"}} onClick={async () => navigate(getProjectPath(project.name), {viewTransition: true})}>
        <h2 className={project.subtitle ? "mb-0" : "mb-3"}>{project.title}</h2>
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
    </div>;
}