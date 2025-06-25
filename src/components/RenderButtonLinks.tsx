import {Project} from "../routes/projects/SingleProjectPage/project.ts";
import {Button} from "react-bootstrap";
import {Github, GooglePlay} from "react-bootstrap-icons";

export interface Props {
    project: Project;
}

export default function RenderButtonLinks({ project }: Props) {
    const buttons = [];

    if (project.github) {
        buttons.push(
            <Button variant="warning" href={project.github} target="_blank">
                <div className="d-flex flex-row align-items-center">
                    <Github/><span className="ps-2">Github</span>
                </div>
            </Button>
        );
    }
    if (project.google_play) {
        buttons.push(
                <Button variant="success" href={project.google_play} target="_blank">
                    <div className="d-flex flex-row align-items-center">
                        <GooglePlay/><span className="ps-2">Google Play</span>
                    </div>
                </Button>
            );
    }

    if (buttons.length === 0) {
        return <></>;
    }

    return <div className="mb-1">
        {buttons.map((button, i) => <>
            {button} {i !== buttons.length - 1 && <span className="px-2"></span>}
        </>)}
    </div>;
}