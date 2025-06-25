import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import {Button} from "react-bootstrap";

export interface Props {
    project: Project;
}

export default function RenderButtonLinks({ project }: Props) {
    const buttons = [];

    if (project.github) {
        buttons.push(
            <Button href={project.github}>Github</Button>
        );
    }
    if (project.google_play) {
        buttons.push(
            <Button href={project.google_play}>Google Play</Button>
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