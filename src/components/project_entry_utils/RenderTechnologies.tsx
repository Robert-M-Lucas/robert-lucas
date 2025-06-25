import {Technology} from "../../routes/projects/SingleProjectPage/technology.tsx";

export interface Props {
    technologies: Technology[]
}

export default function RenderTechnologies({ technologies }: Props) {
    if (technologies.length === 0) {
        return <></>;
    }

    return <span>
        {technologies.map((technology, i) => <>
            {technology.getElement()} {i !== technologies.length - 1 && "●"}
        </>)}
    </span>;
}