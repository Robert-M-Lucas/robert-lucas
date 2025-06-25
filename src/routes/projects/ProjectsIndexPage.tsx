import FooterWrapper from "../../components/FooterWrapper";
import Header from "../../components/Header.tsx";
import {Container} from "react-bootstrap";
import PROJECT_LIST from "./SingleProjectPage/project_list.ts";
import {getProjectPath} from "../../router.tsx";
import {Link} from "react-router-dom";
import HeaderSpacer from "../../components/HeaderSpacer.tsx";


export default function ProjectsIndexPage() {
    return <FooterWrapper>
        <Header/>
        <HeaderSpacer/>
        <Container>
            <h1>Projects</h1>
            <ul>
                {PROJECT_LIST.map(project => <li>
                    <Link viewTransition to={getProjectPath(project.name)}>{project.title}</Link>
                </li>)}
            </ul>
        </Container>
    </FooterWrapper>;
}