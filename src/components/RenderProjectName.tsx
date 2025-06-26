
export interface Props {
    title: string;
    margin?: boolean;
    legacy?: boolean;
    large?: boolean;
}

export default function RenderProjectName({title, margin=false, legacy=false, large=false}: Props) {
    return large ? <h1 className={margin ? "mb-3" : "mb-0"}>{title}{legacy && <span className={"text-muted"}> [Legacy]</span>}</h1> :
        <h2 className={margin ? "mb-3" : "mb-0"}>{title}{legacy && <span className={"text-muted"}> [Legacy]</span>}</h2>;
}